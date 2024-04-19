import React from "react";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";
import logoBlack from "./../assets/images/logo/logo black.svg";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-40">
      <Navbar bg="white" logo={logoBlack} border="1px solid black" />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
