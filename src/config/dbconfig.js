import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connStr = "mongodb://localhost:27017/ft2.0";
    const conn = mongoose.connect(connStr);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
