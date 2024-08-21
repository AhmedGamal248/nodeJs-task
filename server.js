import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import { userRouter } from './src/modules/user/user.router.js'
import { complimentRourer } from './src/modules/compliment/compliment.router.js'

const app = express()
const port = 3000


app.use(express.json())
app.use(express.static('uploads'));
app.use(userRouter)
app.use(complimentRourer)

dbConnection()
app.listen(port,()=>{
    console.log(`server is running on port ${port}...`)
})

