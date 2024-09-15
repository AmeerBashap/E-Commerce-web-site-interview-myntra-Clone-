import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";

const App = () => {
   
  return (
    <>
      <Header/>
    <FetchItem/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;
