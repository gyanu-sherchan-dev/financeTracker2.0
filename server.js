import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all the incoming req information
app.use(helmet()); //setting default security headers to protect some attacks
app.use(cors()); // allow cross origin resources
app.use(express.json());

//mongodb connection
import { connectDB } from "./src/config/dbconfig.js";
connectDB();

//userRouter
//we have created the router, now we need to import it here, so that all the traffic which follows root url "/api/v1/user" must be redirect to UserRouter
import userRouter from "./src/routers/UserRouter.js";
app.use("/api/v1/user", userRouter);

//transRouter
import transRouter from "./src/routers/TransRouter.js";
app.use("/api/v1/transaction", transRouter);

//for all the trafic
app.use("*", (req, res, next) => {
  // res.json({
  //   message: "you are in the wrong place, go back !!",
  // });

  const error = {
    status: "error",
    message: "404 page not found",
  };
  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  console.log(error);
  try {
    const code = error.code || 500;
    res.status(code).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
