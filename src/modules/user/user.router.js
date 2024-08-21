import express from 'express'
import { checkEmailExist } from '../../middelware/checkEmailExist.js'
import { login, register } from './user.controlers.js'
import { regiValidation } from './user.validation.js'
import { validation } from '../../middelware/validation.js'

const userRouter = express.Router()


// user registeration
userRouter.post('/api/register',validation(regiValidation),checkEmailExist,register)

// login
userRouter.post('/api/login',login)


export {
    userRouter
}