import userSchema from "./UserSchema.js";

//Create user
export const insertUser = (obj) => {
  return userSchema(obj).save();
};

//Login user
export const userLogin = (filter) => {
  return userSchema.findOne(filter);
};
