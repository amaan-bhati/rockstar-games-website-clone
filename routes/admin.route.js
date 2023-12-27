const express=require('express')
const adminRouter=express.Router()
const bcrypt=require("bcrypt")
const Adminmodel = require("../models/admin.model")
const jwt=require("jsonwebtoken")
require("dotenv").config()
adminRouter.post("/register",(req,res)=>{
    let {username,email,password}=req.body
    bcrypt.hash(password, 5,async function(err, hash) {
        if(err){
            console.log(err);
        }else{
            let rdata=Adminmodel({username,email,password:hash})
            await rdata.save()
            res.send("Admin registered successfully")
        }
    });
})


module.exports=adminRouter