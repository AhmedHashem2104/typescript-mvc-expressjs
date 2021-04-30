import config from '../config/database'

class User{

    public query(){
        return config.from('users').select('*')
    }

    public create(data:any){
        return config.insert(data).returning('id').into('users').then((id) => {
            return this.query().where('id' , id).first()
        }).catch(() => false)
    }

}

export default new User