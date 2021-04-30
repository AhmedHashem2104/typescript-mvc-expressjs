import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../Models/User'
import { Response, Request } from 'express';
import Token from '../Models/Token';
import { token } from 'morgan';
class auth {
    public async attempt(email: string , password: string , res:Response): Promise<any>{
        try{
        const checkUser:any = await User.findOne({
            where : {
                email : email
            }
        })
        const tokenCheck: any = await Token.create({
            user_id : checkUser.id,
            token : await bcrypt.hash(checkUser.password , 10)
        })
        const comparePassword: boolean = await bcrypt.compare(password , checkUser.password)
        if(comparePassword){
            const token: string = await jwt.sign({id : tokenCheck.id , key : tokenCheck.token} , 'zteArshmedisHashem')
            return {
                token: token
            }
        }
        res.status(401).json({
            message : 'Unauthorized Access'
        })
    }
    catch(err){
        res.status(401).json({
            message : 'Unauthorized Access'
        })
    }
    }

    public async authenticate(req:Request, res: Response): Promise<any>{
        try{
            const {id , key}:any = await jwt.verify(req.token || '' , 'zteArshmedisHashem')
            console.log(id , key)
            const tokenQuery = await Token.findOne({
                where:{
                    id : id,
                    token : key
                }
            })
            const userQuery = await User.findOne({
                where:{
                    id : tokenQuery?.user_id
                }
            })
        return userQuery
        }
        catch(err){
            res.status(401).json({
                message : 'Unauthorized Access'
            })
        }
    }

    public async logout(req:Request, res: Response): Promise<any>{
        // try{
            const {id , key}:any = await jwt.verify(req.token || '' , 'zteArshmedisHashem')
            const query = await Token.destroy({
                where:{
                    id : id,
                    token : key
                }
            })
        return query
        // }
        // catch(err){
        //     res.status(401).json({
        //         message : 'Unauthorized Access'
        //     })
        // }
    }

}

export default new auth