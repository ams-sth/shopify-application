import React from "react";
import { useSelector } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs.articles);

  return (
    <div className="container">
      <div>
        <h1 className="text-4xl font-bold">News</h1>
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <div>
                <img src={blog.image} alt="Articles" className="rounded-2xl" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-lg text-left">{blog.title}</h1>
                <div className="flex flex-row justify-start">
                  <span className="font-semibold">Date: </span>
                  <span>{blog.date}</span>
                </div>
                <p className="max-w-xl text-left">{blog.description}</p>
                <button className="bg-blue-600 hover:bg-blue-800 rounded-2xl text-white h-[12%]">Read Article</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
