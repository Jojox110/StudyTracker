import getData from '../src/Database/test.database'
import express, {NextFunction, Request, Response} from 'express'

import { getPlaygroundData } from "./Database/playgrounds.model";

const app = express();

app.get('/', getData);

app.get("/playground/:createdBy", async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const createdBy: string = req.params.createdBy;
    const playgroundData = await getPlaygroundData(createdBy);
    res.send(playgroundData)
})

app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000")
})

