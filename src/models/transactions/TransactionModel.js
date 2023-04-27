import TransactionSchema from "./TransactionSchema.js";

//CRUD

//insert
export const insertTrans = (obj) => {
  return TransactionSchema(obj).save();
};

//Read all transaction
export const getUserAllTransactions = (_id) => {
  return TransactionSchema.findById(_id); // we will pass userId as filter to query, so that user only gets its transaction.
  //And only this query that has findById, you can just pass _id as a string otherwise, every other query you need to deal with obj
};

//update

//delete
