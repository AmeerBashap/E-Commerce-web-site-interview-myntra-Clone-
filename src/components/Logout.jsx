import React from 'react'
import { useDispatch } from 'react-redux'
import { UserinfoActions } from '../store/UserinfoSlice'
import { Link } from 'react-router-dom'

const Logout = () => {
  const dispatch=useDispatch()
  const handleOnClick=()=>{
    dispatch(UserinfoActions.userLogout("user"));
    console.log("works")
    // alert("visit again")
    
  }

   
  return (
    <div className="Logincontainer " >
      <div className="LoginForm" id="logoutcontainer">
        <img
          src="images/Loginandsignup.jpg"
          alt=""
          className="Loginandsignupimg"
        />
        <div className="FormandHeading " id='logoutcontainer'>
         <button className="Submit logoutbtn" onClick={handleOnClick}>
              Logout
            </button>
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
  
}

export default Logout