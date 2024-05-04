import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiCrossShield, GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = ({ logo, bg, shadow, textColor }) => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = !!localStorage.getItem("formData");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const getNavLinkClassName = (navData) => {
    return navData.isActive
      ? "m-2 mb-0 border-b-2 border-black pb-2"
      : "m-2 mb-0";
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/faq", text: "FAQ" },
    { to: "/blogs", text: "Blogs" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <div
      className={`sticky w-[100%] z-[30]`}
      style={{ background: bg, color: textColor, boxShadow: shadow }}
    >
      <div className="container px-4 top-0">
        <div className="flex flex-row justify-between py-[2rem]">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-row items-center">
            <div
              className={`hidden md:flex md:items-center md:w-auto w-full ${
                showMenu ? "hidden" : "block"
              }`}
            >
              <div className="flex flex-row gap-8">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    className={getNavLinkClassName}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-auto w-full flex flex-row justify-end items-center gap-3">
            <FaSearch className="cursor-pointer" />
            <NavLink to="/cart">
              <FaCartShopping className="cursor-pointer" />
            </NavLink>
            {isLoggedIn ? (
              <NavLink to="/profile">
                <CgProfile className="cursor-pointer" />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <CgProfile className="cursor-pointer" />
              </NavLink>
            )}

            <div className="md:hidden">
              <button
                type="button"
                className=" focus:outline-none"
                onClick={toggleMenu}
              >
                {showMenu ? <GiCrossShield /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
          <div
            className={`md:hidden fixed top-0 left-0 h-full w-full bg-[#1F78F0] z-30 transition-all duration-300 ease-in-out ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center mt-20">
              <IoMdClose
                onClick={() => {
                  handleClose();
                }}
                className="absolute top-[10%] right-[10%]"
              />
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={getNavLinkClassName}
                  onClick={toggleMenu}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
