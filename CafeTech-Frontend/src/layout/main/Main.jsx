import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/main/header/Header";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="relative mx-5 md:mx-10 lg:mx-16 xl:mx-20 mt-6">
        <Navbar />
        <Header />

        {/* laptop */}
        <div className="bg-laptop absolute bg-filter" />

        {/* trophy */}
        <div className="bg-trophy absolute bg-filter" />

        {/* yaro */}
        <div className="bg-yaro absolute bg-filter" />
      </div>
    </>
  );
};

export default Main;
