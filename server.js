import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDb } from "./config/db.js";
import { usersModel } from "./config/dbModels.js";

// configure dotenv
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const mode = process.env.DEV_MODE;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
connectDb();

// create / initialize  DB model
const Users = mongoose.model("users", usersModel);

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${mode} mode on port ${PORT}`.bgBlue.white.bold
  );
});
