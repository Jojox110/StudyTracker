import express, {NextFunction, Request, Response} from 'express';
import { Pool, QueryResult } from 'pg'; // Import QueryResult from pg
const app = express();

const pool = new Pool({
    user: 'test',
    host: 'localhost',
    database: 'testDB',
    password: 'aa',
    port: 5432,
})
interface Row {
    // Define the structure of your database table rows
    // Adjust these types according to your actual table structure
    column1: number;
    // Add more columns as needed
}
const getUsers = (request: Request, response: Response): void => {
    pool.query('SELECT * FROM test', (error: Error, results: QueryResult<Row>) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};


app.use(express.json()) // Middleware

// app.get('/', (req, res) => {
//     // return res.json({
//     //     test1: true,
//     //     test2: false
//     // })
//     return res.redirect('http://localhost:3000/api/all')
// })
//
// app.post('/api/data', (req: Request, res: Response) => {
//     console.log(req.body)
//     return res.sendStatus(200)
// })
//
// app.all('/api/all', (req: Request, res: Response)  => {
//     return res.sendStatus(200)
// })

// app.route('/')
//     .get((req: Request, res: Response) => {
//         return res.send("You made a GET request");
//     })
//     .post((req: Request, res: Response) => {
//         return res.send("You made a POST request");
//     })
//     .put((req: Request, res: Response) => {
//         return res.send("You made a PUT request");
//     })
//     .all((req: Request, res: Response) => {
//         return res.send("The request you made doesn't exist. 404")
//     })

function handleGetBook(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);

    next()
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
    console.log('second handler');

    return res.send(req.params);
}

function middleware(req: Request, res: Response, next: NextFunction) {
    // @ts-ignore
    res.locals.name = "potato"
    next();
}

// app.get('/api/books/:bookId', [handleGetBook, handleGetBookTwo]);
app.get('/api/books/:bookId', middleware, (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals.name = "potato")
    next();
    // @ts-ignore
    res.send(res.locals.name = "potato");
})


app.get('/users', getUsers)
app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000")
})