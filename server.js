import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;
// console.log(process.env.MONGO_CLIENT); // we got that monogo string to connect our cloud database.

//middlewares
app.use(morgan("dev")); // logs all the incoming req information
app.use(helmet()); //setting default security headers to protect some attacks
app.use(cors()); // allow cross origin resources
app.use(express.json());

const __dirname = path.resolve(); // to get the absoulte path of the system untill this root directory
app.use(express.static(path.join(__dirname, "/client/build")));
// console.log(__dirname);

//mongodb connection
import { connectDB } from "./src/config/dbconfig.js";
connectDB();

//userRouter
//we have created the router, now we need to import it here, so that all the traffic which follows root url "/api/v1/user" must be redirect to UserRouter
import userRouter from "./src/routers/UserRouter.js";
app.use("/api/v1/user", userRouter);

//transRouter
import transRouter from "./src/routers/TransRouter.js";
import { isAuth } from "./src/middlewares/authMiddleware.js";
app.use("/api/v1/transaction", isAuth, transRouter);

//redirecting a direct request to dashboard on serverside
//always use it before, root url, that's how express work
app.get("/dashboard", (req, res) => {
  res.redirect("/");
});

//serving react file on serverside as static content.
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.js"));
});

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
  console.log(error.message);
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
