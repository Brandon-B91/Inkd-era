import Header from "./Header";
import Footer from "./Footer"
import React from "react";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <>
    <link rel="stylesheet" 
    href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" 
    integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" 
    crossorigin="anonymous">
    </link>
      <Header></Header>
      <div className="container-fluid text-center" id="content">
        <div>
          {children}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
