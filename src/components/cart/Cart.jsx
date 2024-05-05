import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increase,
  decrease,
  removefromcart,
} from "../../redux/features/cart/cartSlice";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { calculateItemPrice } from "../../utils/cartUtils";
import { showInfoToast } from "../../utils/toast";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removefromcart(id));
  };

  const handleIncrease = (item) => {
    dispatch(increase(item));
  };

  const handleDecrease = (item, event) => {
    if (item.quantity > 1) {
      dispatch(decrease(item));
    } else {
      showInfoToast("Quantity cant be less than one");
      event.preventDefault();
    }
  };

  return (
    <div className="bg-[#F4F4F4] container px-4">
      <h1 className="text-4xl font-bold text-start py-4">Shopping Cart</h1>
      <div className="md:flex flex-row gap-4">
        <div className="md:w-[70%]">
          {cartItems.length === 0 ? (
            <div className="p-8">
              <p className="text-lg font-semibold text-gray-600 mb-4">
                Your cart is empty
              </p>
              <NavLink
                to="/"
                className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl p-3"
              >
                Go to Shopping
              </NavLink>
            </div>
          ) : (
            <div className="md:flex flex-col gap-2 py-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center font-semibold text-gray-900">
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Product
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Product Name
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Actual Price
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Quantity
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Price Per Quantity
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Action
                </p>
              </div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFF] grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-4 items-center pb-2 md:pb-0"
                >
                  <div className="p-4 mx-auto md:mx-0">
                    <img
                      className="object-cover w-32 rounded-xl"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <span className="md:hidden text-sm font-semibold">
                      Product Name:{" "}
                    </span>
                    <span className="text-sm">{item.name}</span>
                    <div className="md:text-start md:flex">
                      <span className="text-sm font-semibold text-gray-500">
                        Size:{" "}
                      </span>
                      <span className="text-sm text-gray-500">{item.size}</span>
                    </div>
                  </div>
                  <div>
                    <span className="md:hidden text-sm font-semibold">
                      Price:{" "}
                    </span>
                    <span className=" lg:text-xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                  </div>
                  <div>
                    <span className="md:hidden text-sm font-semibold">
                      Quantity: {" "}
                    </span>
                    <button
                      className={`text-white bg-blue-500 rounded-full p-0.5 lg:p-1
                    ${
                      item.quantity <= 1
                        ? "disabled bg-gray-500 text-gray-700"
                        : ""
                    }
                  `}
                      onClick={(e) => handleDecrease(item, e)}
                    >
                      <FaMinus />
                    </button>
                    <span className="px-2 lg:text-xl font-semibold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      className="text-white hover:text-blue-700 bg-blue-500 rounded-full p-0.5 lg:p-1"
                      onClick={() => handleIncrease(item)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div>
                    <span className="md:hidden text-sm font-semibold">
                      Price per Product:{" "}
                    </span>
                    <span className=" font-semibold lg:text-xl">
                      ${calculateItemPrice(item)}
                    </span>
                  </div>
                  <div>
                    <span className="md:hidden text-sm font-semibold">
                      Action:{" "}
                    </span>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className=" text-red-500 hover:text-red-700"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bg-[#FFFF] flex flex-col gap-2  p-4 md:w-[30%] h-full">
          <h1 className="font-semibold text-xl">Order Summary</h1>
          <div>
            <span className="text-sm font-semibold">Total Price: $</span>
            <span>
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <NavLink
            to="/checkout"
            className={`bg-blue-600 right-0 text-white rounded-md w-full p-2 text-center font-semibold
          ${cartItems.length === 0 ? "disabled bg-gray-500 text-gray-700" : ""}
        `}
            onClick={(e) => {
              if (cartItems.length === 0) {
                e.preventDefault();
                showInfoToast("Your Cart is Empty");
              }
            }}
          >
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
