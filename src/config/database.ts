import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()
const optionsConfig:any = {
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_CONNECTION,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  models: [__dirname + '/../Models/*.ts'], // or [Player, Team],
  logging: false
}
const config = new Sequelize(optionsConfig)

export default config