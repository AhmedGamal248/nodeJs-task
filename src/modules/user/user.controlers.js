import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { userModel } from "../../../database/models/userModel.js"
import dotenv from 'dotenv';
dotenv.config();


// register
const register = async(req,res)=>{
    let user = new userModel(req.body)

    let token = jwt.sign({userId:user._id,email:user.email,role:user.role},process.env.SECRET_KEY)

    await user.save()

    res.json({message:'success',token})
    
}

// login
const login = async(req,res)=>{
    const isFound = await userModel.findOne({email:req.body.email})

    if (isFound && bcrypt.compareSync(req.body.password,isFound.password)) {

        let token = jwt.sign({userId:isFound._id,email:isFound.email,role:isFound.role},process.env.SECRET_KEY)            
        res.json({message:"success",token})

    } else {
        res.json({message:"email or password is not true"})
    }
}


export {
    register,
    login
}