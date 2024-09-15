import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleOnSubmission = async (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signup"
        ,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your_token_here', // Replace with your actual token if needed
          },
        }
      );
      emailRef.current.value="";
      passwordRef.current.value="";
      confirmPasswordRef.current.value="";
      // Handle the response as needed
      console.log('Signup successful', response.data);
    } catch (error) {
      // Handle the error as needed
      console.error('Error during signup', error);
    }
  };

  return (
    <div className="Logincontainer">
      <div className="LoginForm">
        <img
          src="images/Loginandsignup.jpg"
          alt="Login and Signup"
          className="Loginandsignupimg"
        />
        <div className="FormandHeading">
          <h1>Sign up</h1>
          <form className="Form" onSubmit={handleOnSubmission}>
            <input
              className="inputs"
              type="email"
              placeholder="Enter Email"
              ref={emailRef}
              required
            />
            <input
              className="inputs"
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
              required
            />
            <input
              className="inputs"
              type="password"
              placeholder="Re-Enter password"
              ref={confirmPasswordRef}
              required
            />
            <button type="submit" className="Submit">
              Signup
            </button>
          </form>
          <p className="TermPtag">
            By continuing, I agree to the
            <Link to="/Terms" className="link">
              <b>Terms of Use</b>
            </Link>
            &amp;
            <Link to="/Privacy" className="link">
              <b>Privacy Policy</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
