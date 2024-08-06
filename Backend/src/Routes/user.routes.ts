import { Router } from 'express';
import express, {NextFunction, Request, Response} from 'express'

import { getAllUsers } from "../Models/user.model";
import type { User } from "../Models/user.model";

const userRouter: Router = Router();

userRouter.get("/getAllUsers", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const users: User[] = await getAllUsers();
    res.send(users)
})

export default userRouter;
