import getData from './Models/test.database'
import express, {Express, NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'

import {getPlaygroundData} from "./Models/playgrounds.model";
import type {Playground} from "./Models/playgrounds.model";

import {getAllUsers} from "./Models/user.model";
import {User} from "./Models/user.model"
// import type { User } from "./Models/user.model";

import userRouter from "./Routes/user.routes";
import signupRouter from "./Routes/signup.routes";
import loginRouter from "./Routes/login.routes";
import playgroundRouter from "./Routes/playground.routes";
import {Strategy as LocalStrategy} from "passport-local";
import bcrypt from "bcrypt";

const app: Express = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(session({
    secret: 'ih0KITYhDOrmI94Hm6caIhHJn4cw2IweQmi5U933lsc=',
    resave: false,
    saveUninitialized: true,
}));

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email: string, password: string, done: Function): Promise<any> => {
    try {
        console.log('Checkpoint: Starting authentication');
        const user: User | null = await User.findOne({where: {email: email}});
        if (!user) {
            console.log('Checkpoint: User not found');
            return done(null, false, {message: 'Incorrect username or password'});
        }

        const passwordMatch: boolean = await bcrypt.compare(password, user.password);
        console.log('Checkpoint: Password match:', passwordMatch);
        if (!passwordMatch) {
            console.log('Checkpoint: Incorrect password');
            console.log(password)
            console.log(user.password)
            return done(null, false, {message: 'Incorrect password'});
        }

        console.log('Checkpoint: Authentication successful');
        return done(null, user);
    } catch (err) {
        console.error('Checkpoint: Error during authentication:', err);
        return done(err);
    }
}));

passport.serializeUser((user: any, done: Function) => {
    process.nextTick(() => {
        done(null, user.id);
    });
});

passport.deserializeUser(async (id: number, done: Function) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: Error | null, user: User | false, info: { message: string }) => {
        console.log('Checkpoint: Passport authenticate callback');
        if (err) {
            console.log('Checkpoint: Error in authentication', err);
            return next(err);
        }
        if (!user) {
            console.log('Checkpoint: Authentication failed', info.message);
            return res.status(401).json({message: 'Authentication failed'});
        }
        req.logIn(user, (err) => {
            if (err) {
                console.log('Checkpoint: Error in login', err);
                return next(err);
            }
            console.log('Checkpoint: Login successful');
            return res.status(200).json({message: 'Authentication successful'});
        });
    })(req, res, next);
});

app.post("/signup", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {first_name, last_name, email, password} = req.body;
    try {
        const hashedPassword: string = await bcrypt.hash(password, 10);
        const newUser: User = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword,
        })
        console.log("checkpoint three")
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (err) {
        // @ts-ignore
        // TODO what type is err?
        res.status(500).json({ message: "Error creating user", error: err.message })
    }
})

app.use('/user', userRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.listen(3000, () => {
    console.log('Application listening at http://localhost:3000');
});

export default app;