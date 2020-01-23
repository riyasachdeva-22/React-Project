const jwt=require('jsonwebtoken');
require('dotenv').config()
const expressJwt=require('express-jwt');
const User=require("../models/user");

exports.signup = async(req,res)=>{
    const userExists=await User.findOne({email:req.body.email})
    if(userExists) return res.status(403).json({
        error:"User already exist"
    })
    const user = await new User(req.body)
    await user.save()
    res.status(200).json({message:'user created Successsfully! Login to continue'})
};

exports.requireSignin=expressJwt({
    secret:process.env.JWT_SECRET,
    userProperty:"auth"
});