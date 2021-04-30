import config from '../config/database'

class Favourite{

    public query(){
        return config.from('favourites').select('*')
    }

    public create(data:any){
        return config.insert(data).returning('id').into('favourites').then((id) => {
            
            return this.query().where('id' , id).first()
        }).catch(() => false)
    }

    // public async encryptPassword (password: string){
    //     const salt = await bcrypt.genSalt(10)
    //     return bcrypt.hash(password , salt)
    //  }

    // public async validatePassword (password: string){
    //     return await bcrypt.compare(password , this.password)
    //  }
}

export default new Favourite