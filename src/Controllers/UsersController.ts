import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import User from '../Models/User'
import auth from '../config/auth';
import RegisterValidator from '../../Validators/RegisterValidator';
import LoginValidator from '../../Validators/LoginValidator';
class UsersController {
    public async login(req: Request, res: Response){

        try{
        const data: any = req.body
        const {email , password} = await LoginValidator.validateAsync(data)
            const token = await auth.attempt(email , password)
            res.status(200).json(token);
        }
        catch(err){
            res.status(400).json(err)
        }
    }

    public async register(req: Request , res: Response){
        try{
        const data: any = req.body
        const validate = await RegisterValidator.validateAsync(data)
        validate.password = await bcrypt.hash(validate.password , 10)
        const query: any = await User.query().where('id' , 1)
        if(query.length === 0){
         await User.query().insert({
             email : validate.email,
             password : validate.password,
             user_type_id : 0
            }).into('users')
        
        }
        else{
            await User.query().insert({
                email : validate.email,
                password : validate.password
               }).into('users')
        }
        res.status(201).json({
            message : 'User registered successfully'
        })
        }
        catch(err){
            res.status(400).json(err)
        }
        
    }

    public async profile(req: Request , res: Response){
        try{
        const user = await auth.authenticate(req , res)
        res.status(200).json(user)
        }
        catch(err){
            res.status(400).json(err)
        }
    }

    public async logout(req: Request , res: Response){
        try{
        await auth.logout(req)
        res.status(200).json({
            message : `Logout successfully`
        })
    }
    catch(err){
        res.status(400).json(err)
    }
    }
    
}

export default new UsersController