import express, {Express} from 'express'
import bodyParser from 'body-parser'
import passport from './Config/passport'
import session from 'express-session'
import cors from 'cors'

import userRouter from "./Routes/user.routes";
import signupRouter from "./Routes/signup.routes";
import loginRouter from "./Routes/login.routes";
import authRouter from './Routes/auth.routes'

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

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
// app.use('/signup', signupRouter);
// app.use('/login', loginRouter);
app.use('/auth', authRouter)

app.listen(3000, () => {
    console.log('Application listening at http://localhost:3000');
});

export default app;