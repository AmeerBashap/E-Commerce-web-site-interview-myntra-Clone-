import React from "react";
import { useSelector } from "react-redux";
import LoginAndSignup from "./LoginAndSignup";
import Logout from "./Logout";

const LogoutandLogin = () => {
  const { username } = useSelector((store) => store.user);
  console.log("s", username);
  return (
    <div>
      {username === "user" ? (
        <LoginAndSignup></LoginAndSignup>
      ) : (
        <Logout></Logout>
      )}
    </div>
  );
};

export default LogoutandLogin;
