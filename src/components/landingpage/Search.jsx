import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="container">
      <div className="relative rounded-xl bg-hidden bg-[#FFBB2E] md:bg-searchBg bg-no-repeat bg-cover h-[50vh] flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-2xl">Search for Style</h1>
        <p className="text-sm">Find your perfect look</p>
        <div className="relative w-[40%]">
        <input
          type="text"
          placeholder="Search here"
          className="rounded-full px-8 py-4 w-full "
        />
        <FaSearch className="absolute right-5 top-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Search;
