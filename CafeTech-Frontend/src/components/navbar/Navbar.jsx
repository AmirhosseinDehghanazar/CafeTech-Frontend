import { useState } from "react";
import "./navbar.css";
import NavLink from "./NavLink";
import { linksData } from "./linksData";

const Navbar = () => {
  const [value, setValue] = useState(0);

  const valueHandler = (index) => {
    setValue(index);
  };

  return (
    <div className="flex text-white justify-between items-end lg:flex-row-reverse">
      {/* sidebar btn */}
      <div className="sidebar-btn lg:hidden">
        <div className="sidebarBtn-svg bg-img" />
      </div>

      {/* account */}
      <a
        href="#"
        className=" hidden lg:flex items-center gap-3 bg-linear px-7 py-4 rounded-2xl"
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
      <div className="flex items-end gap-2 lg:flex-row-reverse">
        <p className="font-bold text-2xl">کافه تک</p>
        <div className="cafe-svg" />
      </div>
    </div>
  );
};

export default Navbar;
