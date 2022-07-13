import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import roomsRouter from './routes/rooms.js';
import hotelsRouter from './routes/hotels.js';


const app = express()
dotenv.config()

const connect = async () => {
try{
    await mongoose.connect(process.env.MONGO);
    console.log("mongoDB work")
} catch (error) {
    throw error;
}
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/hotels", hotelsRouter)
app.use("/api/rooms", roomsRouter)
app.use("/api/users", userRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen(8888, () =>{
    connect()
    console.log("Connected to backend....")
})