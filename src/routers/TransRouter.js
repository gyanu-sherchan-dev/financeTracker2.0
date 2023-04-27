import express from "express";

const router = express();

//read
router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "get method to do",
    });
  } catch (error) {
    next(error);
  }
});
//create
router.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "post method to do",
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
