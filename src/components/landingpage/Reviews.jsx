import React from "react";

import Hanson from "../../assets/images/reviews/Isabel Hanson.jpg";
import Sharpe from "../../assets/images/reviews/Ewan Sharpe.jpg";
import Finch from "../../assets/images/reviews/Alisha Finch.jpg";

const Reviews = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">What people say</h1>
        <p className="text-sm text-gray-500 py-2">
          Real customer reviews from themeforest.net
        </p>
      </div>
      <div className="container pt-16  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 md:px-0 gap-4">
        <div className="bg-[#FFFF] relative border rounded-xl shadow-lg ">
          <img
            src={Hanson}
            alt="Isabel Hanson"
            className="rounded-full object-contain w-24 absolute left-[35%]
                } -top-[10%]"
          />
          <div className="max-w-xs mx-auto py-20 px-8">
            <h1 className="font-semibold text-xl">Isabel Hanson</h1>
            <h1 className="text-sm">Designer</h1>
            <p className="pt-4">
              We had several questions and minor issues that we weren't aware of
              how to fix it. Contacted support and they were super quick...
            </p>
            <h1 className="absolute top-[24rem] left-[9rem]">Louisville</h1>
          </div>
        </div>
        <div className={`bg-[#FFFF] relative border rounded-xl shadow-lg`}>
          <img
            src={Sharpe}
            alt="Ewan Sharpe"
            className="rounded-full object-contain w-24 absolute left-[35%] -top-[10%]"
          />
          <div className="max-w-xl mx-auto py-20 px-8">
            <h1 className="font-semibold text-xl">Ewan sharpe</h1>
            <h1 className="text-sm">Developer</h1>
            <p className="pt-4">
              By far one of the best developers we have worked with. They were
              extremely knowledgeable with any question, comment, or concern we
              had and solved any issue in a timely manner. We highly recommend
              them for not only their quality products (themes & HTML templates)
              but their customer service as well..
            </p>
            <h1 className="absolute top-[24rem] left-[9rem]">Dallas</h1>
          </div>
        </div>
        <div className="bg-[#FFFF] relative border rounded-xl shadow-lg">
          <img
            src={Finch}
            alt="Alisha Finch"
            className="rounded-full object-contain w-24 absolute left-[35%]
                 -top-[10%]"
          />
          <div className="max-w-xs mx-auto py-20 px-8">
            <h1 className="font-semibold text-xl">Alisha Finch</h1>
            <h1 className="text-sm">SEO Manager</h1>
            <p className="pt-4">
              The customer support is absolutely amazing. Every time I submitted
              an question, Bigsteps was able to provide an answer very fast..
            </p>
            <h1 className="absolute top-[24rem] left-[9rem]">Bradenton</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
