import getData from '../src/Database/test.database'
import express, {NextFunction, Request, Response} from 'express'

const app = express();

app.get('/', getData);
app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000")
})