import userRouter from './routes/user.router.js';
import express  from "express";
import {config} from 'dotenv';
export const app = express();


config({
    path: "./data/config.env",
})
//using middleware
app.use(express.json());

//add router
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("Server is running...");
})
