/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express, { Application } from "express";
 import cors from "cors";
 import helmet from "helmet";
 import Route from "./src/start/routes";
 import { errorHandler } from "./src/Middleware/Middleware";
 import { notFoundHandler } from "./src/Middleware/NotFound";
 import http from 'http';
 import dbConfig from "./src/config/database";
 import morgan from 'morgan'
 import formData from 'express-form-data'
 import bearerToken from 'express-bearer-token'


 dotenv.config();

 const options:object = {
  uploadDir: __dirname + '/uploads/',
  // autoClean: true
};
/**
 * App Variables
 */
 if (!process.env.PORT) {
    process.exit(1);
 }
 const app : Application = express();
 const server = new http.Server(app)
/**
 *  App Configuration
 */
 app.use(express.urlencoded({ extended : true }));
 app.use(express.json());
 app.use(bearerToken());
 app.use(formData.parse(options));
 // delete from the request all empty files (size == 0)
 app.use(formData.format());
 // change the file objects to fs.ReadStream 
 app.use(formData.stream());
 // union the body and the files
 app.use(formData.union());
 app.use(helmet());
 app.use(cors());
 app.use(morgan('dev'))
 app.use("/", Route);

 app.use(errorHandler);
 app.use(notFoundHandler);
/**
 * Server Activation
 */

 try {
     dbConfig.authenticate().then(res => {}).catch(err => {});
  } catch (error) {
      console.log(`Database Connection Error`)
  }

  server.listen(process.env.PORT, () => {
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
  });

