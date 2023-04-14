import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connStr = "mongodb://localhost:27017/financialTrackerTwo";
    const conn = mongoose.connect(connStr);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
