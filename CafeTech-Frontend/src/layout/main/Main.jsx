import React from "react";
import "./main.css";
import {
  About,
  Comment,
  Event,
  Footer,
  Guest,
  Header,
  Navbar,
  Segment,
} from "../../components";
import { useEffect, useState } from "react";

const Main = () => {
  // manages which nav is active
  const [navValue, setNavValue] = useState(0);

  // this useEffect have to manage start value of navValue
  // const values = {
  //   about: 2,
  //   ...
  // };
  useEffect(() => {
    // example
    // setNavValue(values[location])
  }, []);

  // func to handle sidebar gave it to sidebar btn
  // this function needs context api
  const valueHandler = (index) => {
    setNavValue(index);
  };

  return (
    <>
      <div className="relative main px-6 md:px-10 lg:px-14 xl:px-20">
        <Navbar value={navValue} valueHandler={valueHandler} />
        <Header />
        <About />
        <Segment />
        <Event />
        <Guest />
        <Comment />
        <Footer value={navValue} valueHandler={valueHandler} />

        {/* background images */}
        {/* top gray div for background */}
        <div className="bg-main-gray" />
        {/* middle oval div for background */}
        <div className="bg-main-oval" />
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
