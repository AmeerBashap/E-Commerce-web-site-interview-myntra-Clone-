const User = require("../models/user");
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env file
const jwt=require("jsonwebtoken")

const { JWT_SECRET } = process.env; 


const handleSingUp = async (req, res) => {
  const body = req.body;
  const bcrypt = require('bcrypt');

// Example: Hashing password before storing
const hashedPassword = await bcrypt.hash(body.password, 10); // 10 is the salt rounds


  if (!body || !body.email || !body.password) {
    res.status(400).json({ msg: "all fields are required" });
  }
  console.log(req.body); // Log the parsed body
  const userObj = await User.create({
    email: body.email,
    password: hashedPassword, // Store the hashed password
  });
  
  res.status(201).json({ message: "Form submitted successfully yes" });
};

const handleAllUsers = async (req, res) => {
  const allusers = await User.find({});
  res.status(200).json({ message: "users got ", allusers });
};

const handleGetUser = async (req, res) => {
  const singleUserbyid = await User.findById(req.params.id);
  res.status(200).json({ message: "users got ", singleUserbyid });
};

// login

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If passwords match, return a success message or user data
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};



// module.exports = router;
module.exports = {
  handleSingUp,
  handleAllUsers,
  handleGetUser,
  handleLogin,
};
