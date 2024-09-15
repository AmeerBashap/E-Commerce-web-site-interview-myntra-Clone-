import React from 'react'
import { Link } from 'react-router-dom'

const LoginAndSignup = () => {
  return (
    <div className="LoginAndSignupContainer">
    <div className="LoginAndSignup">
      <h1>Welcome </h1>
      <center><h5>To access account and manage orders</h5></center>
     <button className="button"><Link to="/Loginpage" className="link">Login</Link>/<Link to="/Signuppage" className="link">Signup</Link></button>
     
    </div>
    </div>
  )
}

export default LoginAndSignup