import React from "react";

const NavLink = ({ path, value, index, text, valueHandler, inactiveColor }) => {
  const navStyle = {
    color: index === value ? "white" : inactiveColor,
  };

  return (
    <a onClick={() => valueHandler(index)} href={path} style={navStyle}>
      {text}
    </a>
  );
};

export default NavLink;
