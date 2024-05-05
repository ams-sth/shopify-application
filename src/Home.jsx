import React from "react";
import Types from "./components/landingpage/Types";
import Products from "./components/landingpage/Products";
import Reviews from "./components/landingpage/Reviews";
import Lookbook from "./components/landingpage/Lookbook";
import Search from "./components/landingpage/Search";
import Recommendation from "./components/landingpage/Recommendation";
import Brands from "./components/landingpage/Brands";
import Category from "./components/landingpage/Category";
import Shops from "./components/landingpage/Shops";
import Advertisement from "./components/landingpage/Advertisement";
import Footer from "./components/landingpage/Footer";
import Navbar from "./components/landingpage/Navbar";

import logoWhite from "../src/assets/images/logo/logo.svg";

const Home = () => {
  return (
    <div className="flex flex-col gap-40 bg-[#F7F8FC]">
      <Navbar
        bg="#1F78F0"
        border="none"
        logo={logoWhite}
        textColor="white"
        shadow="shadow-none"
      />
      <Advertisement />
      <Types />
      <Products />
      <Search />
      <Recommendation />
      <Category />
      <Brands />
      <Lookbook />
      <Reviews />
      <Shops />
      <Footer />
    </div>
  );
};

export default Home;
