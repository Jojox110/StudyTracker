import express, { NextFunction, Request, Response } from "express";
import { Pool, QueryResult } from "pg";
import {stringify} from "node:querystring";

const pool = new Pool({
  user: "postgres.mrkoogyomjrogltlbwfl",
  host: "aws-0-ca-central-1.pooler.supabase.com",
  database: "postgres",
  password: "tKNfmfDtPTN7006K",
  port: 5432,
});

interface Row {
  id: string;
  description: string;
  created_at: string;
}

const getData = (request: Request, response: Response): void => {
  pool.query(
    "SELECT * FROM test",
    (error: Error, results: QueryResult<Row>) => {
      if (error) {
        throw error;
      }
      type innerMap = {
          [id: string]: string;
      }
      type outerMap = {
          [id: string]: innerMap
      }
      const dict : outerMap = {};
      let row;
      for (let i = 0; i < 3; i++) {
        console.log("two")
        row = results.rows[i];
        dict["test" + i] = {
          'id': row.id,
          'description': row.description,
          'created_at': row.created_at,
        };
      }
      console.log(dict)
      response.status(200).json(dict);
    }
  );
};

export default getData;
