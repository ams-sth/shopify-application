import React from "react";

const FAQ = () => {
  return (
    <div className="container">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <button className="font-bold">ABOUT SHOPIFY</button>
          <button>PRE-PURCHASE</button>
          <button>LUMIA FEATURES</button>
          <button>SUPPORT</button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">
            Have a Question? Look here
          </h1>
          <input
            className="w-full h-[3rem] border border-gray-500 rounded-2xl"
            placeholder="Quick match search"
          />
        </div>
      </div>
      ;
    </div>
  );
};

export default FAQ;
