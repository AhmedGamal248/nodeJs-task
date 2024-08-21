import express from 'express'
import { addCompliment, getAllCompliments, getSpecificCompliment } from './compliment.controlers.js';
import { fileUpload } from '../../fileUpload/upload.js';

const complimentRourer = express.Router()



  // add compliment
  complimentRourer.post('/uplod', fileUpload('img'), addCompliment)


  //retrieve all compliments
  complimentRourer.get('/api/compliments',getAllCompliments)

  // retrieve a specific compliment
  complimentRourer.get('/api/compliments/:id',getSpecificCompliment)



  export {
    complimentRourer
  }