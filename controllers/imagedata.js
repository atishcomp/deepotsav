
const User = require("../models/user")
const Imagedata = require("../models/imagedata")
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")
const crypt =require("crypto")
var axios = require("axios").default;
const {check,validationResult}=require("express-validator")


exports.createImagedata= (req,res)=>{   
    console.log(req.body)

   const imagedata= new Imagedata(req.body); // "" ""
   console.log(req.body)
   imagedata.save((err,values)=>{
       if(err || !values){
           return res.status(400).json({
               error:"ERROR IN IMAGE UPLOADING."
           });
       }
       res.send({
           "Message":"IMAGE UPLOADED SUCCESSFULLY"
       })

   });
}

exports.getImagedata=(req,res,next)=>{
    Imagedata.find().exec((err,imagedata)=>{   
        if(err || !imagedata){
             return res.status(400).json({
                 error:"SOME ERROR OCCURRED IN GETTING DATA"
             })
        }
      var imageData=[];
        for(var a=0;a<imagedata.length;a++){
            imageData[a]={image_data:imagedata[a].image_url,caption:imagedata[a].description,id:imagedata[a]._id,time:imagedata[a].createdAt,ghat:imagedata[a].ghat_no}
        }
       console.log(imagedata);
        res.json(imageData);
        
     
next();

   })
}
    
exports.deleteImagedata= async (req,res)=>{   
    console.log(req.params.id)
    try {
        const deleteDoc=await Imagedata.findByIdAndDelete(req.params.id)
         if(!req.params.id){
            return res.status(400).send()
         }
         res.send(deleteDoc)
    } catch (error) {
        res.status(500).send(error)
    }

}
     

    

   
