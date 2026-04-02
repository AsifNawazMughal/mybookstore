import mongoose from "mongoose";


export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/my_blogs", {
       
        });
        console.log("MongoDB connected successfully");  
    }
    catch(error){
        console.log("Error connecting to MongoDB:", error);
    }

}