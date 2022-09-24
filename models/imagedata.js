
var mongoose = require("mongoose");

//const {ObjectID} = mongoose.Schema;

var imagedataSchema=new mongoose.Schema({


image_url:{
    type:String
},
description:{
    type:String
},
cloudinary_id:{
    type:String
},
given_time:{
    type:String
},
ghat_no:{
    type:Number
},
username:{
    type:String
}


},{timestamps:true})

module.exports = mongoose.model("Imagedata",imagedataSchema)