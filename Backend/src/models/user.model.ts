import { Sequelize } from 'sequelize'
const sequelize = new Sequelize(
    'postgres', // database
    'postgres.mrkoogyomjrogltlbwfl', // user
    'tKNfmfDtPTN7006K', //password
    {
        host: 'aws-0-ca-central-1.pooler.supabase.com',
        port: 5432,
        dialect: 'postgres'
    }

)

async function test() {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }}

  test()