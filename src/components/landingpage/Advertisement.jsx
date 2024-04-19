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
  const ads = useSelector((state) => state.advertisement.ads);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="relative">
      <div className="absolute w-full ">
        <Navbar
          bg="transparent"
          border="none"
          logo={logoWhite}
          textColor="white"
        />
      </div>
      <div className="bg-[#FFFF]">
        <Slider {...settings}>
          {ads.map((about) => (
            <div key={about.id} className="relative top-[-1rem]">
              <img
                src={about.image}
                alt="Advertisement.jpg"
                className="rounded-none md:rounded-b-[20%] "
              />

              <div className="hidden md:flex flex-col gap-10 w-fit translate-y-[-70vh] translate-x-[55vw]">
                <h1 className="text-sm md:text-6xl hidden lg:block font-bold max-w-xs text-yellow-300 text-left">
                  {about.title}
                </h1>

                <p className="text-xs  max-w-xs text-white text-left">
                  {about.description}
                </p>

                <button className="rounded-3xl bg-white w-[30%] py-2">
                  {about.button}
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pt-20 gap-20">
          <div className="grid grid-cols-2">
            <img
              src={FreeDelivery}
              alt="Free Delivery"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1>Free Shipping</h1>
              <h1 className="text-sm">When you spend $100+</h1>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img
              src={ProductReturn}
              alt="Product Return"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1 className>Free Returns</h1>
              <h1 className="text-sm">Within 14 days</h1>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img
              src={CreditCard}
              alt="Secured Payments"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1>Secured Payments</h1>
              <h1 className="text-sm">We are officially registered</h1>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img
              src={Support}
              alt="24/7 hours support"
              className="object-contain"
            />
            <div className="flex flex-col justify-start">
              <h1>Support 24/7</h1>
              <h1 className="text-sm">Ready to help our clients</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
