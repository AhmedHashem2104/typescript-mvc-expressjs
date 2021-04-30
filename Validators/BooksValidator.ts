import Joi from 'joi'

const BooksValidator: any = Joi.object({
    title: Joi.string()
    .required(),
    file: Joi.object()
    .required()
})

export default BooksValidator