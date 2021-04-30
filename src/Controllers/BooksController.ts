import { Request, Response } from "express";
// import { Item } from "../Interfaces/Item";
import Book from '../Models/Book'
import auth from '../config/auth';
import BooksValidator from "../../Validators/BooksValidator";
class BooksController {
    public async index(req: Request, res: Response){
        var page: any = req.params.page || 1;
        if (page < 1) page = 1;
        var offset = (page - 1) * 10;
        const query = await Book.query().offset(offset).limit(10)
        if(query.length === 0)
        res.status(400).json({
            message : `No Data Found`
        })
        res.status(200).json(query)
    }

    public async store(req: Request, res: Response){
        try{
        const user = await auth.authenticate(req , res)
        const data: any = req.body
        await BooksValidator.validateAsync(data)
        if(user.user_type_id === 0){
        const query = await Book.create({
            title : data.title,
            file : data.file.path,
            user_id : user.id
        })
        res.status(200).json(query)
    }
    else{
        res.status(400).json({
            message : `Access Denied`
        })
    }
    }
    catch(err){
        res.status(400).send(err)
    }
    }

    public async destroy(req: Request, res: Response){
        try{
        const user = await auth.authenticate(req , res)
        if(user.user_type_id === 0){
        const query = await Book.query().where('id' , req.params.id).delete()
        if(query)
        res.status(200).json({
            message : `Book deleted successfully`
        })
        else
        res.status(400).json({
            message : `Book does not exists`
        })
    }
    else{
        res.status(400).json({
            message : `Access Denied`
        })
    }
    }
    catch(err){
        res.status(400).send(err)
    }
    }
    
}

export default new BooksController