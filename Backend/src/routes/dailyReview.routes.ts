import express, { Request, Response } from 'express'
const dailyReviewRouter = express.Router()

dailyReviewRouter.get('/', (req: Request, res: Response) => [
    res.send("main page for dailyReview")
])

dailyReviewRouter.get('/about', (req: Request, res: Response) => {
    res.send("about page for dailyReview")
})

export default dailyReviewRouter