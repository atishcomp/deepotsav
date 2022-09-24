
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")
const crypt =require("crypto")
var axios = require("axios").default;
const {check,validationResult}=require("express-validator")


exports.createUser= (req,res)=>{   
    console.log(req.body)

   const user= new User(req.body); // "" ""
   console.log(req.body)
   user.save((err,values)=>{
       if(err || !values){
           return res.status(400).json({
               error:"UNABLE TO CREATE USER IN DB"
           });
       }
       res.send({
           "Message":"USER SUCCESSFULLY CREATED"
       })

   });
}

 
    
 
     

    

   
