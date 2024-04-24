import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Types = () => {
  const {typesOfProduct} = useSelector((state) => state.typesOfProduct);
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
      {typesOfProduct.map((type) => (
        <div
          key={type.id}
          className="rounded-xl bg-[#FFFF] shadow-lg hover:shadow-xl lg:hover:text-blue-700">
          <NavLink to={type.path}>
            <div className="overflow-hidden px-2">
            <img
              src={type.image}
              alt={type.title}
              className="rounded-xl duration-300 lg:hover:scale-105"
            />
            </div>
          </NavLink>
          <h1 className="text-white text-2xl font-semibold -translate-y-[3rem]">
            {type.title}
          </h1>
          <div className="flex flex-row justify-center gap-8 translate-y-[-1rem]">
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg">{type.newItemCount}</h1>
              <h1 className="text-xs">{type.newItem}</h1>
            </div>
            <div className="border-l-2"></div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg">{type.saleItemCount}</h1>
              <h1 className="text-xs">{type.saleItem}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Types;
