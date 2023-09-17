import React from "react";
import sidebarBtn from "../../assets/sidebarBtn.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:flex-row-reverse">
      {/* sidebar btn */}
      <div className="sidebar-btn">
        <div className="sidebarBtn-svg bg-img " src={sidebarBtn} />
      </div>
      {/* account */}
      <div></div>
      {/* navs */}
      <div></div>
      {/* cafeTech */}
      <div></div>
    </div>
  );
};

export default Navbar;
