import { Table, Column, Model, HasMany , PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, BeforeSave } from 'sequelize-typescript'

@Table({
    timestamps : true,
    tableName : 'users'
})
class User extends Model{

    @Column
     email!: string

    @Column
     password!: string

    @Column
     user_type_id!: number

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

export default User