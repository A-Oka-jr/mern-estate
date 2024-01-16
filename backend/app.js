import express from "express";
import * as dotenv from "dotenv";
import dbConnection from "./db/config.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});

dbConnection();
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
