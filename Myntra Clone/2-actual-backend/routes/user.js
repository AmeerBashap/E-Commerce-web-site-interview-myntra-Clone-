const {handleSingUp, handleAllUsers,handleGetUser,handleLogin}=require("../controllers/user")
const express = require('express');
const  Router=express.Router();

Router.post('/signup', handleSingUp);//create one user
Router.get('/allusers',handleAllUsers);//get all users 
Router.get('/:id',handleGetUser);//get one user by id 
Router.post('/login',handleLogin )//Login


module.exports=Router;