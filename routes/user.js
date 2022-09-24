const express = require("express");
const router = express.Router();
const {check}=require('express-validator')

const {createUser} = require("../controllers/user.js")
const rateLimit = require('express-rate-limit')
// const router = require('express').Router();


// router.param("userid",getUser)

const limiter = rateLimit({
    max:5,
    windowMs:10000   
  })



router.post("/user/create",createUser)




module.exports= router;