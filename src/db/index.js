import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}