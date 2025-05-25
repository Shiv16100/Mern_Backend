import {v2 as cloudinary} from "cloudinary"
import fs from 'fs'

import dotenv from 'dotenv';

dotenv.config();

// Automatically configures using CLOUDINARY_URL from .env
cloudinary.config(); 


const uploadOnCloudnary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response =  await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File is Upoaded Cloudnary", response.url);
        return response
        

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudnary}