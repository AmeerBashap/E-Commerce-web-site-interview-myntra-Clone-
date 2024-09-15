const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
// const { getStoredItems } = require('./data/items');
const app = express();
const mongoose=require("mongoose");
const userRouter=require("./routes/user")
const itemsRouter=require("./routes/item")
const connectMongoDb=require("./connection")
const cors=require("cors");

/***********middleware****************************/

app.use(cors());           //Use cors middleware for allow cross-origin requests.
app.use(bodyParser.json());//Use body-parser middleware to parse JSON bodies   

/************mongodb connects************/
connectMongoDb("mongodb://127.0.0.1:27017/Myntra_database")

/**************ROUTES*****************/

app.use('/items', itemsRouter);//itemsRouter
app.use("/api/users",userRouter)//userRouter


app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
