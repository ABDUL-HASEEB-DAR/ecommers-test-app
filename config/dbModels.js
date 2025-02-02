import mongoose from "mongoose";

export const usersModel = {
  key: { type: String, required: true },
  name: String,
  email: String,
  password: String,
  timestamp: { type: Date, default: Date.now },
};
