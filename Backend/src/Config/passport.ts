import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from "../Models/user.model";

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

passport.serializeUser((user: any, cb: Function): void => {
    process.nextTick(() => {
        cb(null, { id: user.user_id, email: user.email });
    });
});

passport.deserializeUser(async (user: any, cb: Function): Promise<void> => {
    process.nextTick(function() {
        return cb(null, user);
    });
});

export default passport;
