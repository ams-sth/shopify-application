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
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 order-1 md:order-2">
            <img src={About} alt="About-01.jpg" />
          </div>
          <div className="bg-[#F7F8FC] px-8 content-center md:max-w-xs max-w-lg border-2 rounded-xl w-full h-[60vh] order-2 md:order-1 md:translate-x-[20%] md:translate-y-[10%]">
            <FaQuoteLeft />
            <p className=" font-georgia italic">
              We are glad to present you our most perfect Shopify theme, which
              supports Sections Everywhere, very high metric scores by google
              page speed insight. This is the most mobile-oriented theme that
              will be convenient on any of your devices.
            </p>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <span className="pt-20 text-left text-xs font-semibold">
                  Jack
                </span>
                <span className="pt-20 text-left text-xs font-semibold">
                  Donowon
                </span>
              </div>
              <div className="translate-y-[50%]">
                <img
                  src={Signature}
                  alt="Signature"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-8 mx-auto content-center">
          <div className="flex flex-col">
            <CiDeliveryTruck size={96} />
            <h1 className="text-start text-sm">FREE WORLDWIDE DELIVERY</h1>
          </div>

          <div className="flex flex-col">
            <CiDiscount1 size={96} />
            <h1 className="text-start text-sm">
              PROMOTIONS, BONUSES AND DISCOUNTS
            </h1>
          </div>

          <div className="flex flex-col">
            <CiCreditCard1 size={96} />
            <h1 className="text-start text-sm">FREE SECRET REWARD CARD </h1>
          </div>

          <div className="flex flex-col">
            <CiGift size={96} />
            <h1 className="text-sm text-start">PRESENTS TO OUR CUSTOMERS </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-12">
        <h1 className="font-bold text-xl">A few words about us</h1>
        <p className="text-start md:mx-auto">
          Our web company consists of web programmers and designers with
          extensive experience in the web market. Each of us worked as hired
          worker to create templates for Magento, Shopify, Wordpress and others.
          We decided to unite our forces and to do projects such as we would
          like them to be in accordance to our experience in customer support.
        </p>
        <div className="flex">
          <iframe
            width="1148"
            height="643"
            src="https://www.youtube.com/embed/HiByPPj7SWg"
            title="Lumia theme -  Manually Update"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-12">
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
