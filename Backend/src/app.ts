import getData from './database/test.database'
import express, {NextFunction, Request, Response} from 'express'
import dailyReviewRouter from './routes/dailyReview.routes';

const app = express();

app.get('/', getData);
app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000")
})

app.use('/dailyReview', dailyReviewRouter)