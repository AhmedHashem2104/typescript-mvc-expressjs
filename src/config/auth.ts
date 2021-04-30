import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../Models/User'
import { Response, Request } from 'express';
import Token from '../Models/Token';
class Auth {
    public async attempt(email: string , password: string): Promise<any>{
        try{
        const checkUser:any = await User.query().where({
                email : email
        }).first()
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
        throw ({
            message : 'Unauthorized Access'
        })
    }
    catch(err){
        throw ({
            message : 'Unauthorized Access'
        })
    }

    }

    public async authenticate(req:Request, res: Response): Promise<any>{
        try{
            const {id , key}:any = await jwt.verify(req.token || '' , 'zteArshmedisHashem')
            console.log(id)
            const tokenQuery = await Token.query().where({
                    id : id
            }).andWhere({
                token : key
            }).first()
            const userQuery = await User.query().where({
                    id : tokenQuery?.user_id
            }).first()
        return userQuery
        }
        catch(err){
            throw ({
                message : 'Unauthorized Access'
            })
        }
    }

    public async logout(req:Request): Promise<any>{
        try{
            const {id}:any = await jwt.verify(req.token || '' , 'zteArshmedisHashem')
            const query = await Token.query().where({
                    id : id
            }).delete()
            if(query !== 0)
            return query
            else
            throw ({
                message : 'Unauthorized Access'
            })
        }
        catch(err){
            throw ({
                message : 'Unauthorized Access'
            })
        }
    }

}

export default new Auth