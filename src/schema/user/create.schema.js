import joi from "joi";

const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(8).max(20)
})

export default Schema