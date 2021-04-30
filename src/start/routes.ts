/**
 * Required External Modules and Interfaces
 */
import express from "express";
import BooksController from "../Controllers/BooksController";
import FavouritesController from "../Controllers/FavouritesController";
import UsersController from "../Controllers/UsersController";

/**
 * Router Definition
 */
 const Route = express.Router();
/**
 * Controller Definitions
 */

 Route.post("/login",  UsersController.login);

 Route.get("/books/:page",  BooksController.index);

 Route.post("/book",  BooksController.store);

 Route.delete("/book/:id",  BooksController.destroy);

 Route.post("/addToMyFavourite",  FavouritesController.addToMyFavourite);


 Route.get("/profile",  UsersController.profile);

 Route.get("/logout",  UsersController.logout);

 Route.post("/register",  UsersController.register);


 export default Route