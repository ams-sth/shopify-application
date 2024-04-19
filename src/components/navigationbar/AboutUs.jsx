import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import About from "../../assets/images/about us/About.jpg";
import Signature from "../../assets/images/about us/Signature.jpg";

import Shops from "../..//components/landingpage/Shops";

const AboutUs = () => {
  return (
    <div className="container flex flex-col gap-12">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#F7F8FC] px-8 content-center max-w-xs border-2 rounded-xl translate-x-[0%] md:translate-x-[15%] order-2">
          <FaQuoteLeft />
          <p className=" font-georgia italic">
            We are glad to present you our most perfect Shopify theme, which
            supports Sections Everywhere, very high metric scores by google page
            speed insight. This is the most mobile-oriented theme that will be
            convenient on any of your devices.
          </p>
          <div className="flex flex-row">
            <div className="flex flex-row gap-1">
              <span className="pt-20 text-left text-xs font-semibold">
                Jack
              </span>
              <span className="pt-20 text-left text-xs font-semibold">
                Donowon
              </span>
            </div>
            <div className="translate-y-[50%]">
              <img src={Signature} alt="Signature" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <img src={About} alt="About-01.jpg" />
        </div>
      </div>
      <div className="flex flex-col gap-8 mx-auto">
        <h1 className="font-bold text-xl">A few words about us</h1>
        <p className="max-w-lg">
          Our web company consists of web programmers and designers with
          extensive experience in the web market. Each of us worked as hired
          worker to create templates for Magento, Shopify, Wordpress and others.
          We decided to unite our forces and to do projects such as we would
          like them to be in accordance to our experience in customer support.
        </p>
        <h1 className="font-bold text-xl">Why Choose Us</h1>
        <p className="max-w-lg">
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
