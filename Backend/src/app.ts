import express, {Express} from 'express'
import bodyParser from 'body-parser'
import passport from './Config/passport'
import session from 'express-session'
import cors from 'cors'

import userRouter from "./Routes/user.routes";
import authRouter from './Routes/auth.routes'
import playgroundRouter from './Routes/playground.routes'

import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

const secret: string | undefined = process.env.SESSION_SECRET;
if (secret === undefined) {
    console.log("Secret was not found in .env")
}

app.use(session({
    secret: secret as string,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/auth', authRouter)
app.use('/playground', playgroundRouter)

app.listen(3000, () => {
    console.log('Application listening at http://localhost:3000');
});

export default app;