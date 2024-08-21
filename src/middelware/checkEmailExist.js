import { userModel } from "../../database/models/userModel.js"


export const checkEmailExist = async (req,res,next)=> {
    const isFound = await userModel.findOne({email:req.body.email})

    if (isFound) return  res.json({message:'email is already exist'})

     next()
   
}