import React from "react";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";
import logoBlack from "./../assets/images/logo/logo black.svg";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-28">
      <Navbar
        bg="#FFFF"
        logo={logoBlack}
        shadow="0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)"
      />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
