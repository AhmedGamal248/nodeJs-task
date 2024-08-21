import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import { appError } from "../utils/appError.js";

export const fileUpload = (fieldName)=> {


const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename:  (req, file, cb) => {
      
      cb(null, uuidv4() + '-' + file.originalname)
    }
  })

  function fileFilter (req, file, cb) {

      // To accept the file pass `true`, like so:
      if(file.mimetype.startsWith('image')) {
          cb(null, true)
        } 
        
        
       // To reject this file pass `false`, like so:
       else {
        cb(new appError('images only',401), false)
       }
  
  }
  
  const upload = multer({ storage , fileFilter })

  return upload.single(fieldName)

}