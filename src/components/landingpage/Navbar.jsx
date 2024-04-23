import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaPerson } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = ({ logo, bg, shadow, textColor }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className={`relative z-20`}
      style={{
        background: bg,
        color: textColor,
        boxShadow: shadow,
      }}
    >
      <div className="container top-0">
        <div className="grid grid-cols-3 py-[2rem]">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-row items-center">
            <div className="md:hidden">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div
              className={`${
                showMenu ? "block" : "hidden"
              } md:flex md:items-center md:w-auto w-full`}
            >
              <div className="flex flex-row gap-8">
                <NavLink to="/" className={` ${textColor}`}>
                  Home
                </NavLink>
                <NavLink to="/about" className={`${textColor}`}>
                  About
                </NavLink>
                <NavLink to="/faq" className={`${textColor}`}>
                  FAQ
                </NavLink>
                <NavLink to="/blogs" className={`${textColor}`}>
                  Blogs
                </NavLink>
                <NavLink to="/contact" className={`${textColor}`}>
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="md:w-auto w-full hidden md:flex flex-row justify-end md:items-center gap-4">
            <FaSearch className="cursor-pointer" />
            <NavLink to="/cart">
              <FaCartShopping className="cursor-pointer" />
            </NavLink>
            <FaPerson className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
