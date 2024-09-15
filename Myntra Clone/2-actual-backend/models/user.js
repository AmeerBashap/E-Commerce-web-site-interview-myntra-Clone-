const mongoose=require("mongoose");


//mongo Schema
const userSchema= new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
})
//model
const  User=mongoose.model("user",userSchema)// user is the collections 

module.exports=User;