import React from "react";
import Slider from "react-slick";

import logoWhite from "../../assets/images/logo/logo.svg";

import FreeDelivery from "../../assets/icons/advertisement/free-delivery.png";
import ProductReturn from "../../assets/icons/advertisement/product-return.png";
import CreditCard from "../../assets/icons/advertisement/credit-card.png";
import Support from "../../assets/icons/advertisement/24-hours-support.png";

import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Advertisement = () => {
  const { ads } = useSelector((state) => state.advertisement);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#FFFF]">
      <div className="absolute w-full">
        <Navbar
          bg="gray-900 md:transparent md:bg-opacity-0 "
          border="none"
          logo={logoWhite}
          textColor="white"
          shadow="shadow-none"
        />
      </div>
        <Slider {...settings}>
          {ads.map((about) => (
            <div
              key={about.id}
              className="relative top-[-1rem] bg-[#1F78F0] lg:bg-firstSlideBg bg-no-repeat bg-cover h-[100vh]"
            >
              <div className="absolute top-[30%] right-[10%] flex flex-col gap-4 px-4 text-left">
                <h1 className="text-6xl font-bold max-w-xs text-yellow-300">
                  {about.title}
                </h1>
                <p className="text-md  max-w-md text-white text-left">
                  {about.description}
                </p>

                <button className="rounded-3xl bg-white w-[30%] py-2">
                  {about.button}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      <div className="container bg-[#FFFF]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-20 md:py-8">
          <div>
            <img src={FreeDelivery} alt="Free Delivery" className="mx-auto" />
            <h1 className="font-semibold">Free Shipping</h1>
            <h1 className="text-sm">When you spend $100+</h1>
          </div>

          <div>
            <img
              src={ProductReturn}
              alt="Product Return"
              className="mx-auto"
            />
            <h1 className="font-semibold">Free Returns</h1>
            <h1 className="text-sm">Within 14 days</h1>
          </div>

          <div>
            <img
              src={CreditCard}
              alt="Secured Payments"
              className="mx-auto"
            />
            <h1 className="font-semibold"> Secured Payments </h1>
            <h1 className="text-sm ">We are officially registered</h1>
          </div>

          <div>
            <img
              src={Support}
              alt="24/7 hours support"
              className="mx-auto"
            />
            <h1 className="font-semibold">Support 24/7</h1>
            <h1 className="text-sm">Ready to help our clients</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
