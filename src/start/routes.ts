/**
 * Required External Modules and Interfaces
 */
 import express from "express";
import UsersController from "../Controllers/UsersController";

/**
 * Router Definition
 */
 const Route = express.Router();
/**
 * Controller Definitions
 */

 Route.post("/login",  UsersController.login);

 Route.get("/profile",  UsersController.profile);

 Route.post("/register",  UsersController.register);


 export default Route