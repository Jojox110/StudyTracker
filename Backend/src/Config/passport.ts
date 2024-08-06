// src/config/passport.ts
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from "../Models/user.model";

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email: string, password: string, done: Function): Promise<any> => {
    try {
        console.log("checkpoint")
        const user: User | null = await User.findOne({ where: { email: email } });
        if (!user) {
            return done(null, false, { message: 'Incorrect username or password' });
        }

        const passwordMatch: boolean = await bcrypt.compare(password, user.password);
        console.log("HERE");
        console.log("password: " + password);
        console.log("user.password: " + user.password);
        if (!passwordMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// @ts-ignore
passport.serializeUser((user: User, done: Function) => {
    process.nextTick(() => {
        done(null, { id: user.user_id, email: user.email });
    });
});

passport.deserializeUser((user: User, done: Function) => {
    process.nextTick(() => {
        done(null, user);
    });
});

export default passport;
