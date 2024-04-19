import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Category = () => {
  const category = useSelector((state) => state.category.category);
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container px-4 py-12 gap-8">
        {category.map((group, index) => (
          <div key={index}>
            <NavLink to={group.path}>
              <img
                src={group.image}
                alt={group.name}
                className="rounded-full hover:scale-105 duration-300"
              />
            </NavLink>
            <h1 className="pt-4 text-xl">{group.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
