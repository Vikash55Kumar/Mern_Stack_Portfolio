// import {app} from "./servers.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDatabase} from "./config/database.js";
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import path from "path";
import {userRouter} from "./routes/User.js";

// import express from "express"
export const app = express();
import cookieParser from "cookie-parser";

app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true, limit:"10mb"}));
app.use(cookieParser());

dotenv.config();

app.use(cors({
    // origin: "http://localhost:5173",
    origin: ['https://mernportfoliovikash.netlify.app', process.env.CORES_ORIGIN],
    methods: 'DELETE, POST, GET, PUT',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'], 
    credentials: true,
}))

// import cloudinary from "cloudinary"
cloudinary.config({
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
        const response = await cloudinary.uploader.upload(localFilePath, { folder: "portfolio" });
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

const PORT=process.env.PORT || 4000
const startServer = async () => {
    try {
      await connectDatabase();
      app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
      });
    } catch (err) {
      console.log("Database connection failed", err);
    }
  };
  
  startServer();

//Api router
app.use("/api/v1", userRouter);

// Serve frontend static files
const __dirname = path.resolve();
const buildPath = path.join(__dirname, "../client/dist");
app.use(express.static(buildPath, {
    maxAge: '1d',
    etag: false,
}));

// Fallback to index.html for frontend routes
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

export { uploadOneCloudinary };
