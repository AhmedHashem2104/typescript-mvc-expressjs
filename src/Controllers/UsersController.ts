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
        let query:any = await User.findOrCreate({
            where : {
                id : 1
            },
            defaults : {
                ...data,
                user_type_id : 0
            }
        })
        if(!query[1]){
        query = await User.create({
             email : data.email,
             password : data.password,
             user_type_id : 1
            })
        res.status(201).json(query)
        }
        else
        res.status(201).json(query[0])
    }

    public async profile(req: Request , res: Response){
        const user = await auth.authenticate(req , res)
        res.status(200).json(user)
    }

    public async logout(req: Request , res: Response){
        const user = await auth.logout(req , res)
        if(user)
        res.status(200).json({
            message : `Logout successfully`
        })
        else
        res.status(400).json({
            message : `User does not exists`
        })
    }
    
}

export default new UsersController