import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/features/category/menSlice";

const Men = () => {
  const men = useSelector((state) => state.men.menClothes);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(increment(productId));
  };
  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  return (
    <div className="container">
      {/* {aboutMen.map((aboutMen, index) => (
        <div key={index} className="flex flex-col container">
          <Slider {...settings}>
            {aboutMen.image.map((images, index) => (
              <div key={index}>
                  <img
                    src={images}
                    alt="Not found"
                    className="border-2 rounded-full duration-300 hover:scale-105"
                  />
                <span>{aboutMen.name[index]}</span>
              </div>
            ))}
          </Slider>
          <p className="pt-8">{aboutMen.description}</p>
        </div>
      ))} */}

      <div className="flex flex-col gap-4 ">
        {men.map((clothes) => (
          <div key={clothes.id} className="bg-[#FFFF] rounded-xl shadow-xl">
            <div className="flex flex-row justify-between p-4">
              <h1 className="font-bold">{clothes.brand}</h1>
              <h1 className="font-bold text-xl">${clothes.price}</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <img
                src={clothes.image}
                alt={clothes.title}
                className="p-4 md:w-[30%] md:h-[80%]"
              />
              <div className="flex flex-col px-8">
                <h1 className="pt-4 text-start font-bold">{clothes.title}</h1>
                <h1 className="text-left text-md max-w-xl text-gray-400 pt-4">
                  {clothes.desc}
                </h1>
                <div className="flex flex-row gap-4 pt-4">
                  <div className="flex flex-row gap-2">
                    <label className="font-semibold">Color: </label>
                    <select className="border border-black rounded-md">
                      {clothes.color.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-row start gap-2">
                    <label className="font-semibold">Size: </label>
                    <select className="border border-black rounded-md">
                      {clothes.sizes.map((sizes) => (
                        <option value={sizes}>{sizes}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-4 pt-4 ">
                  <h1 className="font-semibold">Amount:</h1>
                  <button
                    className="text-xl"
                    onClick={() => handleDecrement(clothes.id)}
                  >
                    -
                  </button>
                  <h1 className="text-xl ">{clothes.quantity}</h1>
                  <button
                    className="text-xl"
                    onClick={() => handleIncrement(clothes.id)}
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-start py-4">
                  <button className="bg-blue-500 hover:bg-blue-900 p-2 rounded-xl text-white">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
