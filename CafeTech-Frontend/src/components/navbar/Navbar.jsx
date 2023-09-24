import { useState } from "react";
import "./navbar.css";
import NavLink from "./NavLink";
import { linksData } from "./linksData";

const Navbar = () => {
  // manages which nav is active
  const [value, setValue] = useState(0);
  // this state manages sidebar to be open or close
  const [sidebar, setSidebar] = useState(false);

  // func to handle sidebar gave it to sidebar btn
  const valueHandler = (index) => {
    setValue(index);
  };

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
      <div className="hidden navs lg:flex items-center justify-around">
        {linksData.map((link, i) => (
          <NavLink
            key={i}
            {...link}
            value={value}
            valueHandler={valueHandler}
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
