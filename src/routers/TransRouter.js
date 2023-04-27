import express from "express";
import {
  getUserAllTransactions,
  insertTrans,
} from "../models/transactions/TransactionModel.js";

const router = express();

//read
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers; // receiving data from headers for authorization purpose
    //here you know the authorization is that id, which will going to be filter obj in our model. so when we are sending it to DB by calling transModel as below: we will send it in object format: ie: userId:"hfkldjfldjf123"

    //passing userId to DB
    const trans = await getUserAllTransactions({
      userId: authorization, //now this becomes our filter
    });
    console.log(trans);
    res.json({
      status: "success",
      message: "get method to do",
      trans,
    });
  } catch (error) {
    next(error);
  }
});
//create
router.post("/", async (req, res, next) => {
  try {
    const transData = req.body; // receiving data from FE or thunderclient.
    const { authorization } = req.headers; // receiving or grabing userId from header

    //sending data to DB
    const result = await insertTrans({ ...transData, userId: authorization }); //here we need to await to response to come // and sending userId with transData together to DB using spreed operator

    result?._id
      ? res.json({
          status: "success",
          message: "Transaction added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add transaction, try again",
        });
  } catch (error) {
    next(error);
  }
});
//delete
router.delete("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "delete method to do",
    });
  } catch (error) {
    next(error);
  }
});

export default router; // lets import it to server.js to redirect or connect this router.
