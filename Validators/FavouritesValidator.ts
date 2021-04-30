import Joi from 'joi'

const FavouritesValidator: any = Joi.object({
    book_id: Joi.number()
    .required()
})

export default FavouritesValidator