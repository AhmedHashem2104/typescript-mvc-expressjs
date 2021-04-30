import dotenv from 'dotenv'
import knex from 'knex'
dotenv.config()
const optionsConfig: any = {
  client : process.env.DB_CONNECTION,
  connection : {
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  }
}
const config = knex(optionsConfig)
export default config