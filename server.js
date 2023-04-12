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

//for all the trafic
app.use("*", (req, res) => {
  res.json({
    message: "you are in the wrong place, go back !!",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
