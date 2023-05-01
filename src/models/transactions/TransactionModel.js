import TransactionSchema from "./TransactionSchema.js";

//CRUD

//insert
export const insertTrans = (obj) => {
  return TransactionSchema(obj).save();
};

//Read all transaction, @filter must be an object{}
export const getUserAllTransactions = (filter) => {
  return TransactionSchema.find(filter); // we will pass userId as filter to query, so that user only gets its transaction.
  // return TransactionSchema.findById(_id) And only this query that has findById, you can just pass _id as a string otherwise, every other query you need to deal with obj
  //but in our case we are using userId instead of _id, hense it must be an object, basically where the userId matches only return transaction for that.
  //we just use filter as a variable, but what its going to have, we going to declare in our router.
};

//update

//delete



