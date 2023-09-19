import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/main/header/Header";
import "./main.css";
import Segment from "../../components/main/segment/Segment";

const Main = () => {
  return (
    <>
      <div className="relative main px-6 md:px-10 lg:px-14 xl:px-20">
        <Navbar />
        <Header />
        <Segment />

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
