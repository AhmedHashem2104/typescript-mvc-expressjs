import { Table, Column, Model, HasMany , PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, BeforeSave } from 'sequelize-typescript'

@Table({
    timestamps : true,
    tableName : 'tokens'
})
class Token extends Model{

    @Column
     user_id!: number

    @Column
     token!: string

    @CreatedAt
     createdAt!: Date

    @UpdatedAt
     updatedAt!: Date

    // public async encryptPassword (password: string){
    //     const salt = await bcrypt.genSalt(10)
    //     return bcrypt.hash(password , salt)
    //  }

    // public async validatePassword (password: string){
    //     return await bcrypt.compare(password , this.password)
    //  }
}

export default Token