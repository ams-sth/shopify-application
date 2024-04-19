import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ bg, textColor }) => {
  return (
    <div
      className="left-0 fixed"
      style={{
        background: bg,
        color: textColor,
      }}
    >
      <div className="flex flex-col">
        <NavLink to="/" className={`block px-4 py-2 ${textColor}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={`block px-4 py-2 ${textColor}`}>
          About us
        </NavLink>
        <NavLink to="/contact-us" className={`block px-4 py-2 ${textColor}`}>
          Contact us
        </NavLink>
        <NavLink to="/faq" className={`block px-4 py-2 ${textColor}`}>
          FAQ
        </NavLink>
        <NavLink to="/blogs" className={`block px-4 py-2 ${textColor}`}>
          Blogs
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
