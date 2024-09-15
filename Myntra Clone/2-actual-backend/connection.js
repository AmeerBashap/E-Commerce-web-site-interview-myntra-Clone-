const mongoose=require("mongoose");
//mongo connection

async function connectMongoDb(url){
  return mongoose.connect(url)
}
module.exports=connectMongoDb;