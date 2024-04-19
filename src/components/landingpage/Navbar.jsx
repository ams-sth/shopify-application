import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = ({logo, bg, border, textColor}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={`relative border-b py-4 z-20 border-4 border-black`}
    style={{
      background:bg,
      border:border,
      color:textColor
    }}
    >
      <div className="container sticky top-0  gap-20">
        <div className="flex flex-row justify-between px-10 translate-y-[50%]">
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
                <NavLink to="/" className={`block px-4 py-2 ${textColor}`} >
                  Home
                </NavLink>
                <NavLink to="/about" className={`block px-4 py-2 ${textColor}`}>
                  About us
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={`block px-4 py-2 ${textColor}`}
                >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
