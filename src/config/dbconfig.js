import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connStr = process.env.MONGO_CLIENT;
    const conn = mongoose.connect(connStr);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
