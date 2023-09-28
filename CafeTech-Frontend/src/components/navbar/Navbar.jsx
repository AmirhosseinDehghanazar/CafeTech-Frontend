import { useState } from "react";
import "./navbar.css";
import NavLink from "./NavLink";
import { linksData } from "./linksData";

const Navbar = ({ value, valueHandler }) => {
  // this state manages sidebar to be open or close
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex text-white mt-6 lg:ms-10 justify-between items-center lg:flex-row-reverse mb-10">
      {/* sidebar btn */}
      <button
        onClick={() => setSidebar(!sidebar)}
        className="sidebar-btn lg:hidden"
      >
        <div className="sidebarBtn-svg bg-img" />
      </button>

      {/* account */}
      <a
        href="#"
        className=" hidden lg:flex items-center gap-3 bg-linear px-7 py-4 rounded-2xl "
      >
        <div className="nav-face" />
        <p className="text-lg font-semibold">حساب کاربری</p>
      </a>

      {/* navs */}
      <div className="hidden navs lg:flex items-center justify-around text-[18px] font-semibold">
        {linksData.map((link, i) => (
          <NavLink
            key={i}
            {...link}
            value={value}
            valueHandler={valueHandler}
            inactiveColor={"#8e8e93"}
          />
        ))}
      </div>

      {/* cafeTech */}
      <a
        href="/"
        className="flex items-end lg:items-center lg:relative rela gap-2 lg:flex-row-reverse"
      >
        <p className="font-bold text-2xl">کافه تک</p>
        <div className="cafe-svg lg:absolute" />
      </a>
    </div>
  );
};

export default Navbar;
