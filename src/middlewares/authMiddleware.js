import { userLogin } from "../models/user/UserModel.js";
import express from "express";

export const isAuth = async (req, res, next) => {
  // if valid user then return true otherwise false
  // this middleware we will have the capacity to responde too
  try {
    // lets get the authorization first
    const { authorization } = req.headers;
    //if this authorization valid then go to next middleware, if we do not do this, then client will get response from here as below and will not be able to go to next step, if we have intention to do so. Hence, lets streamline this:
    // to do that, so far we have got _id as authorization, now we going to query in DB to see if there is any user base on that _id or not, if valid then we will let the user to go to next middleware using next() and if someone send the invalid _id, then we going to pass a message: hey you are not authorized.
    const user = await userLogin({ _id: authorization }); // finding user,
    console.log(user);
    user?._id
      ? next()
      : res.jsson({
          status: "error",
          message: "Unauthorized",
        });
  } catch (error) {
    next(error);
  }
};

//This is simply a middleware and we are responding client back from here
//Import this middleware and simply put as an additional layer for authorization purpose.
//You can have as many middleware you want or required in future
//If all the routers method, going to use this isAuth middleware, then instead of passing individually in each method, we can straightly pass into the entry point which is server.js before redirecting to the transRouter.
