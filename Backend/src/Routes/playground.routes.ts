import { Router } from 'express'
import express, {NextFunction, Request, Response} from 'express'

import { getPlaygroundData } from "../Models/playgrounds.model";
import type { Playground } from "../Models/playgrounds.model";

const playgroundRouter: Router = Router();

playgroundRouter.get("/getAllPlaygrounds/:createdBy", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const createdBy: string = req.params.createdBy;
    const playgroundData: Playground[] = await getPlaygroundData(createdBy);
    res.send(playgroundData);
})

export default playgroundRouter;
