import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

// configure dotenv
dotenv.config();

const MONGO_URI = process.env.MongoDb_URI;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully".bgGreen.white.bold);
  } catch (error) {
    console.log("Database connection failed".bgRed.white.underline);
    console.log(error);
  }
};
