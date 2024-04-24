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
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="relative">
      <div className="absolute w-full">
        <Navbar
          bg="gray-900 md:transparent md:bg-opacity-0 "
          border="none"
          logo={logoWhite}
          textColor="white"
          shadow="shadow-none"
        />
      </div>
      <div className="bg-[#FFFF]">
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
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center px-4 md:px-0 py-20 md:py-8">
          <div>
            <img src={FreeDelivery} alt="Free Delivery" />
            <div className="flex flex-col justify-start">
              <h1 className="text-start font-semibold">Free Shipping</h1>
              <h1 className="text-sm text-start">When you spend $100+</h1>
            </div>
          </div>

          <div>
            <img
              src={ProductReturn}
              alt="Product Return"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1 className="text-start font-semibold">Free Returns</h1>
              <h1 className="text-sm text-start">Within 14 days</h1>
            </div>
          </div>

          <div>
            <img
              src={CreditCard}
              alt="Secured Payments"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1 className="font-semibold text-start"> Secured Payments </h1>
              <h1 className="text-sm text-start">
                We are officially registered
              </h1>
            </div>
          </div>

          <div>
            <img
              src={Support}
              alt="24/7 hours support"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1 className="text-start font-semibold">Support 24/7</h1>
              <h1 className="text-sm text-start">Ready to help our clients</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
