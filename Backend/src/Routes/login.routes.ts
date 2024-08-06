import {Router} from 'express'
import {NextFunction, Request, Response} from 'express'
import passport from '../Config/passport'


import {getUserInfoAfterLogin} from "../Models/user.model";
import type {User} from "../Models/user.model";

const loginRouter: Router = Router();

loginRouter.get("/userInfo/:email", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const email: string = req.params.email;
    const userInfo: User | null = await getUserInfoAfterLogin(email);
    if (userInfo == null) {
        // TODO is 500 the right status here?
        res.sendStatus(500)
    }
    res.send(userInfo);
})

// loginRouter.post("/password/", passport.authenticate('local', {
//     successRedirect: 'http://localhost:5173/playgrounds',
//     failureRedirect: 'http://localhost:5173/signup',
// }))

loginRouter.post("/password", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    passport.authenticate("local", (err: Error | null, user: User | false, info: { message: string }) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err)
            }
            return res.status(200).json({ message: 'Authentication successful' })
        })
    })(req, res, next);
})

export default loginRouter;
