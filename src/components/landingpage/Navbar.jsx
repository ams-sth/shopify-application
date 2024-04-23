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

  const getNavLinkClassName = (navData) => {
    return navData.isActive
      ? "m-2 mb-0 border-b-2 border-black pb-2"
      : "m-2 mb-0";
  };
  return (
    <div
      className={`relative z-20`}
      style={{ background: bg, color: textColor, boxShadow: shadow }}
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
                <NavLink to="/" className={getNavLinkClassName}>
                  Home
                </NavLink>
                <NavLink to="/about" className={getNavLinkClassName}>
                  About
                </NavLink>
                <NavLink to="/faq" className={getNavLinkClassName}>
                  FAQ
                </NavLink>
                <NavLink to="/blogs" className={getNavLinkClassName}>
                  Blogs
                </NavLink>
                <NavLink to="/contact" className={getNavLinkClassName}>
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
