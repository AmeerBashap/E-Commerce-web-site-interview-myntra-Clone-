import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserinfoActions } from "../store/UserinfoSlice";

const Login = () => {
  const dispatch=useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate=useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Handle successful login
      console.log('Login successful', response.data);
      setError("");
      // Redirect or navigate to another page on success
      // Example: redirect to dashboard
      // history.push('/dashboard');
      dispatch(UserinfoActions.userLogin(email));//
      navigate("/");
      alert("You Have successfully Login ");
      emailRef.current.value=""
      passwordRef.current.value=""
    } catch (error) {
      // Handle login error
      console.error('Error during login', error);
      setError("Invalid email or password");
      alert("Invalid email or password");
    }
  };

  return (
    <div className="Logincontainer">
      <div className="LoginForm">
        <img
          src="images/Loginandsignup.jpg"
          alt=""
          className="Loginandsignupimg"
        />
        <div className="FormandHeading">
          <h1>Login</h1>
          <form className="Form" onSubmit={handleLogin}>
            <input
              className="inputs"
              type="email"
              placeholder="Enter Email"
              ref={emailRef}
            />
            <input
              className="inputs"
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
            />
            <button type="submit" id="logoutbtn" className="Submit">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <p className="TermPtag">
            By continuing, I agree to the
            <Link to="/Terms" className="link">
              <b>Terms of Use</b>
            </Link>
            &nbsp;&
            <Link to="/Privacy" className="link">
              <b>Privacy Policy</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
