import React from "react";

import logo from "../../assets/images/logo/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#0067FF]">
      <div className="pt-20 container flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-xl text-center text-white font-semibold">
            Do you want to be among the first to know about sale time?
          </h1>

          <div className="pt-8 flex flex-row justify-center ">
            <span>
              <input
                type="email"
                className="rounded-3xl w-full px-8 py-4"
                placeholder="Enter your email here"
              />
            </span>
            <span className="translate-x-[-40%]">
              <button className="text-white bg-black rounded-3xl px-8 py-4">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-12">
          <div className>
            <img src={logo} alt="logo" />
            <p className="pt-4 text-md max-w-md text-white text-left">
              Worldwide fashion store with wide collection of styles with over
              100 international fashion brands.
            </p>
          </div>
          <div className="border-b-2 md:border-none flex flex-col">
            <h1 className="text-left text-white text-xl font-bold">
              INFORMATION
            </h1>
            <div className="text-left pt-0 md:pt-8">
              <h1 className="text-white">About us</h1>
              <h1 className="text-white">Search</h1>
              <h1 className="text-white">Contacts</h1>
              <h1 className="text-white">Our News</h1>
            </div>
          </div>
          <div className="border-b-2 md:border-none flex flex-col gap-8">
            <span className="flex">
              <h1 className=" text-left text-white text-xl font-bold">GET</h1>
              <h1 className=" pl-2 text-white text-xl font-bold">SHOPPING</h1>
            </span>

            <div className="text-left ">
              <h1 className="text-white">Women</h1>
              <h1 className="text-white">Men</h1>
              <h1 className="text-white">Teenagers</h1>
              <h1 className="text-white">Accessories</h1>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-left text-white text-xl font-bold">CONTACTS</h1>
            <div className="text-left">
              <h1 className="text-white"> Phone: +1-202-555-0158</h1>
              <h1 className="text-white">Email: loremipsum@gmail.com</h1>
              <h1 className="text-white ">Address: 165th St, Jamaica, NY 11</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
