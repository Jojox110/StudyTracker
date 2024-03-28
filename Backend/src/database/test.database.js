"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres.mrkoogyomjrogltlbwfl",
    host: "aws-0-ca-central-1.pooler.supabase.com",
    database: "postgres",
    password: "tKNfmfDtPTN7006K",
    port: 5432,
});
const getData = (request, response) => {
    pool.query("SELECT * FROM test", (error, results) => {
        if (error) {
            throw error;
        }
        const dict = {};
        let row;
        for (let i = 0; i < 3; i++) {
            console.log("two");
            row = results.rows[i];
            dict["test" + i] = {
                'id': row.id,
                'description': row.description,
                'created_at': row.created_at,
            };
        }
        console.log(dict);
        response.status(200).json(dict);
    });
};
exports.default = getData;
