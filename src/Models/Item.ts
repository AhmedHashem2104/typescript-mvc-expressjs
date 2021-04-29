import { Table, Column, Model, HasMany , PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement } from 'sequelize-typescript'

@Table({
    timestamps : true,
    tableName : 'items'
})
class Item extends Model {

    @Column
     name!: string

    @CreatedAt
     createdAt!: Date

    @UpdatedAt
     updatedAt!: Date
}

export default Item