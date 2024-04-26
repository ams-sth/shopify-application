import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import About from "../../assets/images/about us/About.jpg";
import Signature from "../../assets/images/about us/Signature.jpg";

import Shops from "../..//components/landingpage/Shops";

import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";

const AboutUs = () => {
  return (
    <div className="container px-4 md:px-0 flex flex-col gap-16">
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse  items-center md:px-4 lg:px-0">
          <div className="lg:w-[40%] lg:-mr-12 z-[999] bg-white rounded-2xl">
            <div className="border border-gray-300 shadow-md rounded-2xl p-12">
              <FaQuoteLeft />
              <i className="text-xl font-light font-georgia">
                We are glad to present you our most perfect Shopify theme, which
                supports Sections Everywhere, very high metric scores by google
                page speed insight. This is the most mobile-oriented theme that
                will be convenient on any of your devices.
              </i>
              <div className="flex items-center pt-5">
                <div className="flex-1">
                  <p>Jack Donowan</p>
                </div>
                <div className="flex-1">
                  <img src={Signature} alt="sign img" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80vh] mb-7 lg:mb-0">
            <img
              src={About}
              alt="About-01.jpg"
              className="rounded-2xl h-full object-cover"
            />
          </div>
        </div>
        <div className="md:flex justify-between w-[90%] mx-auto my-12 ">
          <div className="pb-5 lg:pb-0">
            <CiDeliveryTruck size={96} className="w-[100%] mx-auto" />
            <h1 className=" text-sm w-[70%] mx-auto text-center">FREE WORLDWIDE DELIVERY</h1>
          </div>

          <div className="pb-5 lg:pb-0">
            <CiDiscount1 size={96} className="w-[100%] mx-auto" />
            <h1 className=" text-sm w-[70%] mx-auto text-center">
              PROMOTIONS, BONUSES AND DISCOUNTS
            </h1> 
          </div>

          <div className="pb-5 lg:pb-0">
            <CiCreditCard1 size={96} className="w-[100%] mx-auto" />
            <h1 className=" text-sm w-[70%] mx-auto text-center">FREE SECRET REWARD CARD </h1>
          </div>

          <div className="pb-5 lg:pb-0">
            <CiGift size={96} className="w-[100%] mx-auto" />
            <h1 className="text-sm  w-[70%] mx-auto text-center">PRESENTS TO OUR CUSTOMERS </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <h1 className="font-bold text-xl ">A few words about us</h1>
        <p className="mx-auto text-center w-[70%]">
          Our web company consists of web programmers and designers with
          extensive experience in the web market. Each of us worked as hired
          worker to create templates for Magento, Shopify, Wordpress and others.
          We decided to unite our forces and to do projects such as we would
          like them to be in accordance to our experience in customer support.
        </p>
        <div className="flex w-[90%] mx-auto">
          <iframe
            width="100%"
            height="643"
            src="https://www.youtube.com/embed/HiByPPj7SWg"
            title="Lumia theme -  Manually Update"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{borderRadius:"20px"}}
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 py-12">
        <h1 className="font-bold text-xl">Why Choose Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          <div className="border-8 border-[#0067FF] content-center rounded-full h-[13rem] w-[13rem] p-8">
            <h1 className="text-[#0067FF] text-4xl font-bold">95%</h1>
            <h1 className=" text-[#0067FF] text-2xl font-bold">
              of excellent reviews
            </h1>
          </div>
          <div className="border-8 border-[#E6055B] rounded-full content-center h-[13rem] w-[13rem]">
            <h1 className="text-[#E6055B] font-bold text-4xl"> 2k</h1>
            <h1 className="text-[#E6055B] font-bold text-2xl"> More Sales</h1>
          </div>
          <div className="border-8 border-[#FFC427] rounded-full content-center h-[13rem] w-[13rem]">
            <h1 className="text-[#FFC427] font-bold text-4xl"> 100%</h1>
            <h1 className="text-[#FFC427] font-bold text-2xl">
              Happy Customers
            </h1>
          </div>
        </div>
        <p className="max-w-lg mx-auto text-left">
          We like Shopify because it provides variety of tools to help you set
          up and run your business. You can find everything you need to showcase
          your products online, to process payments, and to make your store work
          for you
        </p>
      </div>
      <Shops />
    </div>
  );
};

export default AboutUs;
