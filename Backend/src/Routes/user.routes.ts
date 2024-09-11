import { Router } from 'express';
import {NextFunction, Request, Response} from 'express'

import { getAllUsers, getUserInfoByID } from "../Models/user.model";
import type { User } from "../Models/user.model";
import { ensureAuthentication } from "../Middleware/auth.middleware";

const userRouter: Router = Router();

userRouter.get("/getAllUsers", ensureAuthentication, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const users: User[] = await getAllUsers();
    res.send(users)
})

userRouter.get("/getUserInfoById/:id", ensureAuthentication, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: string = req.params.id;
    const user: User | null = await getUserInfoByID(id);
    if (user == null) {
        res.status(400).json({ message: "User not found" })
    }
    else {
        res.status(200).json({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            user_id: user.user_id,
        });
    }
})

userRouter.get("/userInfo/:id", ensureAuthentication, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: string = req.params.id;
    const user: User | null = await getUserInfoByID(id);
    if (user == null) {
        res.status(400).json({ message: "User not found" })
    }
    else {
        res.status(200).json({message: "User found", user: user});
    }
})

export default userRouter;
