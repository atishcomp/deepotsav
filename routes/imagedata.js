const express = require("express");
const router = express.Router();
const {check}=require('express-validator')
const {createImagedata,getImagedata,deleteImagedata} = require("../controllers/imagedata.js")
const rateLimit = require('express-rate-limit')
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")
const User = require("../models/user")
const Imagedata = require("../models/imagedata")



const limiter = rateLimit({
    max:4,
    windowMs:10000   
  })




router.post('/uploadimage',upload.single('image'),async (req,res)=>{
    try {
        console.log(req.body)
        const result = await cloudinary.uploader.upload(req.file.path)
        // res.json(result)
       console.log(req.body.username)
        
        
        var curr_time=Date.now();
        console.log(result)
       let imagedata = new Imagedata({
        image_url:result.secure_url,
        cloudinary_id:result.public_id,
        description:req.body.caption,
        // given_time:curr_time,
        ghat_no:req.body.ghat_no,
        username:req.body.username
       })
         await imagedata.save();
         res.json(imagedata)

    } catch (error) {
        console.log(error)
    }
})

router.get("/imagedata/get",limiter,getImagedata);
router.delete("/imagedata/delete/:id",deleteImagedata);

// router.post("/imagedata/create",createImagedata)






module.exports= router;