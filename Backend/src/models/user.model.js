"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres', // database
'postgres.mrkoogyomjrogltlbwfl', // user
'tKNfmfDtPTN7006K', //password
{
    host: 'aws-0-ca-central-1.pooler.supabase.com',
    port: 5432,
    dialect: 'postgres'
});
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
