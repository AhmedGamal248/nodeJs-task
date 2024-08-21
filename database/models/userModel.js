import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const schema = mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        require:true,
        minLength:[2,'user name is short the min length is 2 char']
    },
    email:{
        type:String,
        trim:true,
        require:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user',
        lowercase: true
    }
})

schema.pre('save', function() {
    this.password = bcrypt.hashSync(this.password,10)
})

export const userModel = mongoose.model('user',schema)