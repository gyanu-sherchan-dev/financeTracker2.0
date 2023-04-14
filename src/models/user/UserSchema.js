import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1, //for fast sorting purpose, if you give 1 it will sort in acending order and -1 in decending order
    },
    pin: {
      type: Number,
      min: 1000, // if you want 4 digit value, start from 1000 and end 9999
      max: 9999,
    },
  },
  {
    timestamps: true, // helps us to have that added and updated date as per your database changes
  }
);

//now our schema is ready, if we need anything else in futre, we will added later, for now
//lets use this Schema and convert to the model or tabel:

export default mongoose.model("UserFT2.0", userSchema); //userft2.0 will convert in lowercase
