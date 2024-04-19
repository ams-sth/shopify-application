import React from "react";

import Background from "../../assets/images/search/background.jpg";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="container bg-[#FFBE30] relative h-[45vh] rounded-xl">
      <img
        src={Background}
        className="w-full h-full absolute rounded-xl"
        alt="bg img"
      />
      <div className="flex flex-col gap-2 pt-20 absolute right-1/2 text-center top-8 translate-x-[5%]">
        <h1 className="font-bold text-2xl text-center">Search for Style</h1>
        <p className="text-xs">Find your perfect look</p>
      </div>
      <div className="pt-8 pb-20">
        <input
          type="text"
          placeholder="Search here"
          className="absolute px-2 right-[29%] top-[60%] rounded-xl h-[20%] w-[42%]"
        />
      </div>
      <FaSearch className="absolute right-[30.5%] top-[64%] text-gray-500" />
    </div>
  );
};

export default Search;
