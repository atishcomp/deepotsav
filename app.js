var express =require("express");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
var express =require("express");
// var cookieParser= require("cookie-parser");
var cors = require("cors");
var bodyParser= require("body-parser");
const fileUpload= require("express-fileupload")
const cloudinary = require('cloudinary').v2
var app= express();
app.use(cors())
app.use(bodyParser.json())

const userRoutes = require("./routes/user")
const imagedataRoutes = require("./routes/imagedata")

app.get('/',(req,res)=>{
    res.send("HELLO TO TEST UPLOAD theatishyadav, UPDATED THE THINGS")
  })


  const CONNECTION_URL=`mongodb+srv://deepotsav75:deep9670110015@cluster0.dzhcm8c.mongodb.net/?retryWrites=true&w=majority`
  //TODO: use environmnet variable to secure the data
  //we are using cloud atlas database
  
  mongoose.connect(CONNECTION_URL,{
      
      useNewUrlParser:true,
      useUnifiedTopology:true,
      // useCreateIndex:true,
      // useFindAndModify: false
      }).then(()=>{
          console.log("DB CONNECTED") 
      }).catch((error)=>console.log(error.message))

      app.use("/",userRoutes);
    app.use("/",imagedataRoutes);

const port = process.env.PORT || 9000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })