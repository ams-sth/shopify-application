import React from "react";
import { useSelector } from "react-redux";

const Brands = () => {
  const {brands} = useSelector((state) => state.brands);
  return (
    <div className="container px-4">
      <div>
        <h1 className="text-4xl font-bold">Our Brands</h1>
        <p className="text-sm text-gray-500 py-2">
          Advanced product filter by vendors
        </p>
      </div>
      <div className="grid grid-cols-3  md:grid-cols-4 pt-8 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="bg-[#FFFF] shadow-xl overflow-hidden">
            <img src={brand.image} alt={brand.name} className="hover:scale-105 duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
