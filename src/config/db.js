import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://examen5:MetYrUb6khvRHVJ4@cluster0.15hnfr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connect mongoDB");
    }catch (err){
        console.log(err);
    }
};
