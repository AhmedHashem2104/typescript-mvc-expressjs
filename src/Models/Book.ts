import config from '../config/database'

class Book{

    public query(){
        return config.from('books').select('*')
    }

    public create(data:any){
        return config.insert(data).returning('id').into('books').then((id) => {

            return this.query().where('id' , id).first()
        }).catch(() => false)
    }

}

export default new Book