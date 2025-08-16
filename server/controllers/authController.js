import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from 'bcryptjs';
import genToken from "../config/token.js";

export const signup=async(req,res)=>{
    try {
        const {name,email,password,role}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({
                success:false,
                message:"Invalid email"
            })
        }
        if(password.length<8){
            return res.status(400).json({
                success:false,
                message:"Enter strong password"
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,
            password:hashedPassword,
            role
        })

        let token=await genToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*60*1000
        })

        return res.status(201).json({
            success:true,
            message:"User registered successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Internal Server Error: ${error}`,
            
        })
        
    }
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        const isMatch=bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }

        let token=await genToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*60*1000
        })

        return res.status(201).json({
            success:true,
            message:"User login successfully",
            user
        })
    } catch (error) {

        return res.status(500).json({
            success:true,
            message:`Internal Server Error: ${error}`,
            
        })
        
    }
}

export const logout=async(req, res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success:true,
            message:"User logged out successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Internal Server Error: ${error}`,

        })

    }
}