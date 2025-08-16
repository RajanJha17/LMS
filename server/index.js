import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import authRouter from './routes/authRoute.js';
import cookieParser from 'cookie-parser'
dotenv.config();


const app=express();
const port=process.env.PORT || 8000;

connectDb();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("Api starting")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

