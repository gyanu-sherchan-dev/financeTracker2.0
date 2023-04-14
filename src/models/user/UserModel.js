import userSchema from "./userSchema.js";

//Create user
export const insertUser = (obj) => {
  return userSchema(obj).save();
};

//Login user
