import { Request, Response } from "express";
// import { Item } from "../Interfaces/Item";
import auth from '../config/auth';
import FavouritesValidator from "../../Validators/FavouritesValidator";
import Favourite from "../Models/Favourite";
import Book from "../Models/Book";
class FavouritesController {
    public async addToMyFavourite(req: Request, res: Response){
        try{
        const user = await auth.authenticate(req , res)
        const data: any = req.body
        await FavouritesValidator.validateAsync(data)
        const checkQuery = await Book.query().where('id' , data.book_id)
        if(checkQuery.length > 0){
        const query = await Favourite.create({
            user_id : user.id,
            book_id : data.book_id
        })
        res.status(200).json(query)
    }
    else{
        res.status(400).json({
            message : `Book does not exists`
        })
    }
    }
    catch(err){
        res.status(400).send(err)
    }
    }
    
}

export default new FavouritesController