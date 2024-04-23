import React from "react";
import Footer from "../components/landingpage/Footer";
import Types from "../components/landingpage/Types";
import Products from "../components/landingpage/Products";
import Reviews from "../components/landingpage/Reviews";
import Lookbook from "../components/landingpage/Lookbook";
import Search from "../components/landingpage/Search";
import Recommendation from "../components/landingpage/Recommendation";
import Brands from "../components/landingpage/Brands";
import Category from "../components/landingpage/Category";
import Shops from "../components/landingpage/Shops";
import Advertisement from "../components/landingpage/Advertisement";

const pages = () => {
  return (
    <div className="flex flex-col gap-24 bg-[#F7F8FC]">
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

export default pages;
