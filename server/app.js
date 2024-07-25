import express from "express";
export const app = express();
import cookieParser from "cookie-parser";

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true, limit:"50mb"}));
app.use(cookieParser());
import {userRouter} from "./routes/User.js";

app.use("/api/v1", userRouter);







