import express from "express";
import { insertUser } from "../models/user/UserModel.js";

const router = express.Router(); //now I can have any method to handle it

//create user router
router.post("/", async (req, res, next) => {
  //here in path I just gave "/",because everything else before that path of the url will be handle by server.js
  try {
    //inside here first lets get the incoming data:
    //our data will always come on req
    const userReceived = req.body;
    console.log(userReceived); // this console will show in terminal

    //call insertUser to insert into the database
    //now we know our req.body has data, we received the data, now lets call the insertUser function from userModel and pass the user object.
    const user = await insertUser(userReceived); //unless and untill we do not execute this line of code here, we not gonna see user table on mongoDB compass // and what is it returning is query, promise pending , untill we do not receive input from user, we should not execute this code. so async and await
    console.log(user);

    //once we insert our data into DB, we always going to get _id, so now we will use it to write condition as below:
    if (user?._id) {
      return res.json({
        status: "success",
        message: "User created successfully, you may login now",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create the user, please try again",
    });

    //do not forget to check the database (mongoDB compass)
  } catch (error) {
    //what happen if we try to send same data, duplication error, since we have make email as unique, so to handle this error:
    console.log(error.message);
    error.code = 500;
    next(error); // we going to forward this error to our global error handler, which we have created in server.js

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "There is already another user with this email, please use different email for your account";
    }
  }
});

//Remeber I need to import this file to server.js to redirect the request to this file so let's export the file

export default router;
