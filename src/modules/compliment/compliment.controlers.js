import { ComplimentModel } from "../../../database/models/complimentModel.js"



// add compliment
const addCompliment = async (req, res, next) => {

    req.body.imageUrl = req.file.filename
    
     const result = await ComplimentModel.insertMany(req.body)
    res.json({message:'success', result})
  }


//retrieve all compliments
const getAllCompliments = async(req,res)=> {
    const result = await ComplimentModel.find()
  
    res.json({message:'success' ,result})
}


// retrieve a specific compliment
const getSpecificCompliment = async(req,res)=> {
    const result = await ComplimentModel.findById(req.params.id)
        
    res.json({message:'success' ,result})
    
}

export {
    addCompliment,
    getAllCompliments,
    getSpecificCompliment
}