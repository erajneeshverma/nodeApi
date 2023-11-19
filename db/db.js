import mongoose from "mongoose";

export const connectDB = () => { 
    mongoose.connect(process.env.MONGODB_URI,{
    dbName: "backend",
    }).then(()=> console.log("Database Connected..."))
    .catch((error)=>console.log("Connnection Error : ",error));
}