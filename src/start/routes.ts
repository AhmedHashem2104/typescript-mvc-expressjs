/**
 * Required External Modules and Interfaces
 */
 import express from "express";

 import ItemsController from '../Controllers/ItemsController'
/**
 * Router Definition
 */
 const Route = express.Router();
/**
 * Controller Definitions
 */

 Route.get("/", new ItemsController().index);

 export default Route