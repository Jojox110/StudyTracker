import express, {NextFunction, Request, Response} from 'express';
import { Pool, QueryResult } from 'pg';

const pool = new Pool({
    user: 'test',
    host: 'localhost',
    database: 'testDB',
    password: 'aa',
    port: 5432,
})

const getData = (request: Request, response: Response): void => {
    pool.query('SELECT * FROM test', (error: Error, results: QueryResult) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

export default getData;