import React from "react";

import logo from "../../assets/images/logo/logo.svg";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0067FF]">
      <div className="py-8 container flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl max-w-md text-white font-semibold">
            Do you want to be among the first to know about sale time?
          </h1>

          <div className="pt-8 flex flex-row">
            <span>
              <input
                type="email"
                className="rounded-3xl w-full px-8 py-3"
                placeholder="Enter your email here"
              />
            </span>
            <span className="">
              <button className="text-white bg-black rounded-3xl px-8 py-3 -ml-10">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center px-4 gap-8">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-md max-w-md text-white text-start">
              Worldwide fashion store with wide collection of styles with over
              100 international fashion brands.
            </p>
            <div className="flex flex-row gap-2 pt-4">
              <FaInstagram size={32} className="text-white" />
              <FaFacebook size={32} className="text-white" />
              <FaTiktok size={32} className="text-white" />
              <FaXTwitter size={32} className="text-white" />
              <FaYoutube size={32} className="text-white" />
            </div>
          </div>
          <div className="border-b-2 md:border-none flex flex-col gap-4">
            <h1 className="text-start text-white text-xl font-bold">
              INFORMATION
            </h1>
            <div className="text-start flex flex-col gap-2">
              <h1 className="text-white">About us</h1>
              <h1 className="text-white">Search</h1>
              <h1 className="text-white">Contacts</h1>
              <h1 className="text-white">Our News</h1>
            </div>
          </div>
          <div className="border-b-2 md:border-none flex flex-col gap-4">
            <h1 className=" text-start text-white text-xl font-bold">
              GET SHOPPING
            </h1>

            <div className="text-start flex flex-col gap-2">
              <h1 className="text-white">Women</h1>
              <h1 className="text-white">Men</h1>
              <h1 className="text-white">Teenagers</h1>
              <h1 className="text-white">Accessories</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-start text-white text-xl font-bold">
              CONTACTS
            </h1>
            <div className="text-start flex flex-col gap-2">
              <h1 className="text-white"> Phone: +1-202-555-0158</h1>
              <h1 className="text-white">Email: loremipsum@gmail.com</h1>
              <h1 className="text-white ">Address: 165th St, Jamaica, NY 11</h1>
            </div>
          </div>
        </div>
        <div className="px-4">
          <p className="text-white pt-12">
            © 2024, Lumia Theme Powered by Bigsteps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
