import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
// import { Item } from "../Interfaces/Item";
import User from '../Models/User'
import auth from '../config/auth';

class UsersController {
    public async login(req: Request, res: Response){
        const data: any = req.body
            const token = await auth.attempt(data.email , data.password , res)
            res.status(200).json(token);
    }

    public async register(req: Request , res: Response){
        const data: any = req.body
        data.password = await bcrypt.hash(data.password , 10)
        const query = await User.create({
            email : data.email,
            password : data.password
        })
        res.status(201).json(query)
    }

    public async profile(req: Request , res: Response){
        const user = await auth.authenticate(req , res)
        res.status(200).json(user)
    }
}

export default new UsersController