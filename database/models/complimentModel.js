import mongoose from "mongoose";

const schema = mongoose.Schema({
    title:{
        type:String,
        trim:true,
        require:true
    },
    description:{
        type:String,
        trim:true,
        require:true
    },
    imageUrl:String,
    latitude: { 
        type: Number,
        require:true
    },
    longitude: { 
        type: Number,
        require:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }

},{timestamps:true})


schema.post('init', (ele) =>{
        ele.imageUrl = process.env.BASE_URL + ele.imageUrl;  
});


export const ComplimentModel = mongoose.model('Compliment',schema)