
var mongoose = require("mongoose");
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');
//const {ObjectID} = mongoose.Schema;

var userSchema=new mongoose.Schema({

user_id:{
    type:String,  
    trimm:true,
},
email:{
    type:String,
    unique:true,
    trimm:true,

},
phone:{
    type:Number,
    unique:true,
    trimm:true,

},

first_name:{
    type:String,
    trimm:true,

},
last_name:{
    trimm:true,
    type:String,
},

tokens:{
    type:String
},

encry_password:{
    type:String,
    trimm:true,
    required:true,
},

// password:{
//     type:String,
//     trimm:true
// },
salt:String,


},{timestamps:true})

userSchema.virtual("password")
.set(function(password){
    this._password=password
    this.salt=uuidv1();
    this.encry_password = this.securePassword(password)
})
.get(function(){
    return this._password
})


userSchema.methods={

authenticate:function(plainpassword){
  return this.securePassword(plainpassword)===this.encry_password
},

    securePassword:function(plainpassword){
        if(!plainpassword) return "";
        try{
        return crypto
        .createHmac("sha256",this.salt)
        .update(plainpassword)
        .digest("hex");

        }
        catch(error){
            return "";
        }
    }
};



module.exports = mongoose.model("User",userSchema)