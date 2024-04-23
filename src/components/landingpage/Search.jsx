import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="container">
      <div className="relative rounded-xl bg-hidden bg-[#FFBB2E] md:bg-searchBg bg-no-repeat bg-cover h-[50vh] flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-2xl">Search for Style</h1>
        <p className="text-sm">Find your perfect look</p>
        <input
          type="text"
          placeholder="Search here"
          className="rounded-lg px-8"
        />
        <FaSearch className="absolute top-[60%] right-[40%] text-gray-400" />
      </div>
    </div>
  );
};

export default Search;
