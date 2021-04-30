import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../Models/User'
import { Response, Request } from 'express';
class auth {
    public async attempt(email: string , password: string , res:Response): Promise<any>{
        try{
        const checkUser:any = await User.findOne({
            where : {
                email : email
            }
        })
        const comparePassword: boolean = await bcrypt.compare(password , checkUser.password)
        if(comparePassword){
            const token: string = await jwt.sign({id : checkUser.id} , 'zteArshmedisHashem')
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
            const {id}:any = await jwt.verify(req.token || '' , 'zteArshmedisHashem')
            const query = await User.findOne({
                where:{
                    id : id
                }
            })
        return query
        }
        catch(err){
            res.status(401).json({
                message : 'Unauthorized Access'
            })
        }
    }

}

export default new auth