/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 import Route from "./src/start/routes";
 import { errorHandler } from "./src/Middleware/Middleware";
 import { notFoundHandler } from "./src/Middleware/NotFound";
 import http from 'http';
 import dbConfig from "./src/config/database";
 dotenv.config();
/**
 * App Variables
 */
 if (!process.env.PORT) {
    process.exit(1);
 }
 const app = express();
 const server = new http.Server(app)
/**
 *  App Configuration
 */
 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 app.use("/", Route);

 app.use(errorHandler);
 app.use(notFoundHandler);
/**
 * Server Activation
 */

 try {
     dbConfig.authenticate();
  } catch (error) {
      console.log(`Database Connection Error`)
  }

  server.listen(process.env.PORT, () => {
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
  });

