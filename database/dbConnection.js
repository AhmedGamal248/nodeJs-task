import mongoose from 'mongoose'

export const dbConnection = ()=> {
    mongoose.connect('mongodb://127.0.0.1:27017/nodejs_task').then(()=>{
        console.log('database connected successfuly...')
    }).catch((err)=>{
        console.log('err connection',err);
    })
}