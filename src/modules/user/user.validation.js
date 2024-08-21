import joi from "joi";

const regiValidation = joi.object({
    userName: joi.string().trim().min(2).required(),
    email: joi.string().email().required(),
    password:joi.string().pattern(/^[A-Z][a-z0-9_]{10,30}$/).required(),
    role: joi.string().valid('user', 'admin')
})


export {
    regiValidation
}