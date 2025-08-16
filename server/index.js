import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
dotenv.config();


const app=express();
const port=process.env.PORT || 8000;

connectDb();

app.get("/",(req,res)=>{
    res.send("Api starting")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

