// import path from "path";
import {app} from "./app.js";
import express from "express";
import dotenv from "dotenv";
import {connectDatabase} from "./config/database.js";
import cloudinary from 'cloudinary';
import fs from 'fs';

dotenv.config();
connectDatabase();

import path from "path";

app.use(cors({
    origin: process.env.CORES_ORIGIN || "http://localhost:5173",
    methods: 'DELETE, POST, GET, PUT',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'], 
    credentials: true,
}))

const __dirname = path.resolve();

const buildPath = path.join(__dirname, '../client/dist');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


// import cloudinary from "cloudinary"
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
});

const uploadOneCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("File not found");
            return; // Stop execution if file path is not provided
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // file upload successful
        console.log("File is uploaded on Cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlink(localFilePath, (err) => {
            if (err) console.error("Error deleting file:", err);
        }); // remove temporary file
        console.error("Error uploading file:", error);
    }
}

export { uploadOneCloudinary };

const PORT=process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is running on port: ${process.env.PORT}`);
});

