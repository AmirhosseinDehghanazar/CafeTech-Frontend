import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/main/header/Header";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="relative main px-5 md:px-10 lg:px-16 xl:px-20 pt-6">
        <Navbar />
        <Header />

        <div className="-z-50 bg-web bg-img absolute" />
        {/* laptop */}
        <div className="-z-50 bg-laptop bg-img absolute bg-filter" />

        {/* trophy */}
        <div className="-z-50 bg-trophy bg-img absolute bg-filter" />

        {/* yaro */}
        <div className="-z-50 bg-yaro bg-img absolute bg-filter" />
      </div>
    </>
  );
};

export default Main;
