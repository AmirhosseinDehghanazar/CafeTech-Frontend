import React from "react";

const NavLink = ({ path, value, index, text, valueHandler }) => {
  return (
    <a
      onClick={() => valueHandler(index)}
      href={path}
      className={`${index === value ? "text-gray-200" : "inactive"} navlink`}
    >
      {text}
    </a>
  );
};

export default NavLink;
