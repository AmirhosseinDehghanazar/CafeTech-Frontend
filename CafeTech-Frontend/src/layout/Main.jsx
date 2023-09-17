import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/main/header/Header";

const Main = () => {
  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-16 xl:mx-20 mt-6">
        <Navbar />
        <Header />
      </div>
    </>
  );
};

export default Main;
