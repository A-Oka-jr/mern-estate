import express from "express";
import * as dotenv from "dotenv";
import dbConnection from "./db/config.js";
const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});

dbConnection();
