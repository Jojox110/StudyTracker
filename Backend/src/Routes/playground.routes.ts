import { Router } from 'express'
import express, {NextFunction, Request, Response} from 'express'

import { getAllUserPlaygrounds, createPlayground } from "../Models/playgrounds.model";
import type { Playground } from "../Models/playgrounds.model";

import { ensureAuthentication } from "../Middleware/auth.middleware";

const playgroundRouter: Router = Router();

playgroundRouter.get("/getAllUserPlaygrounds/:createdBy", ensureAuthentication, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("sadfjhklsadjfklsadjfklsadjfklasdjfsadf");
    const createdBy: string = req.params.createdBy;
    const playgroundData: Playground[] = await getAllUserPlaygrounds(createdBy);
    if (playgroundData.length > 0) {
        res.status(200).json(playgroundData);
    }
    else {
        res.status(400).json({ message: "Playground not found" });
    }
})

playgroundRouter.post("/createPlayground", ensureAuthentication, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { createdBy, playgroundName } = req.body;
    const success: boolean = await createPlayground(createdBy, playgroundName);
    if (success) {
        res.status(201).json({ message: "Playground created successfully" });
    }
    else {
        res.status(400).json({message: "You already created a playground with that name"})
    }
})

export default playgroundRouter;
