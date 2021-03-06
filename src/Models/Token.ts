import config from '../config/database'

class Token{

    public query(){
        return config.from('tokens').select('*')
    }

    public create(data:any){
        return config.insert(data).returning('id').into('tokens').then((id) => {
            return this.query().where('id' , id).first()
        }).catch(() => false)
    }
    
}

export default new Token