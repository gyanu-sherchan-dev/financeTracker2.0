import mongoose from "mongoose";

const transSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "true",
    },
    type: {
      type: String,
      required: "true",
    },
    amount: {
      type: Number,
      required: "true",
      min: 1,
    },
    userId: {
      // we need to know, who this belongs, base on this we will makesure from frontend, nobody can access other transaction details
      type: mongoose.Types.ObjectId, //get _id from mongooseDB, in mongoose, these _id are obj types
      required: true,
      ref: "User", // this ref refer to the table, where you getting this userId.
      //   unique:"true", no unique true required, if you do unique true in whole database, one transaction can have one unique id, but one user can have multiple transaction, hence, no unique true.
    },
  },

  { timestamps: true }
);

// now our Schema is ready, lets convert into tabel and export as well.

export default mongoose.model("Trans-v-ii", transSchema);
