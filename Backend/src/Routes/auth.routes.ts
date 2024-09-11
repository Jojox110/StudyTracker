import { Router, NextFunction, Request, Response } from 'express'
import passport from "../Config/passport"

import { User } from "../Models/user.model"
import type { FrontendUserCreationAttributes } from "../Models/user.model";
import bcrypt from "bcrypt";

const authRouter: Router = Router()

authRouter.post("/login", async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
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

authRouter.post("/signup", async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const hashedPassword: string = await bcrypt.hash(password, 10);
        const newUser: User = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword,
        })
        const frontend_user: FrontendUserCreationAttributes = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            user_id: newUser.user_id
        }
        res.status(201).json({ message: 'User created', user: frontend_user });
    } catch (err) {
        // @ts-ignore
        // TODO what type is err?
        res.status(500).json({ message: "Error creating user", error: err.message })
    }
})

authRouter.post("/logout", async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    req.logout(function(err) {
        if (err) { return next(err) }
        res.status(200).json({ message: 'User logged out' })
    })
})

authRouter.get("/isLoggedIn", async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.isAuthenticated()) {
        res.status(201).json({ message: 'User is authenticated' })
    }
    else {
        res.status(401).json({message: 'User is not authenticated'})
    }
})

export default authRouter;