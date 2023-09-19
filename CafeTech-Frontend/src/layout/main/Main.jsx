import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/main/header/Header";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="relative main">
        <Navbar />
        <Header />

        {/* background images */}
        {/* web */}
        <div className="-z-50 bg-web absolute" />
        {/* laptop */}
        <div className="-z-50 bg-laptop bg-img absolute bg-filter" />

        {/* trophy */}
        <div className="-z-50 bg-trophy bg-img absolute bg-filter" />

        {/* yaro */}
        <div className="-z-50 bg-yaro bg-img absolute bg-filter" />
        {/* background images end here */}
      </div>
    </>
  );
};

export default Main;
