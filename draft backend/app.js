import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import userRoute from "./routes/userRoute.js";
import { errorHandler, notFound } from "./middleWares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(express.json());
app.use(cors());

// DB connection
dbConnect();

// Server Routings
app.use("/api/users", userRoute);

// error handler should go under all routes
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
