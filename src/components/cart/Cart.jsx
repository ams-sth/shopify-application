import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increase,
  decrease,
  removefromcart,
} from "../../redux/features/cart/cartSlice";
import { showInfoToast } from "../../utils/toast";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removefromcart(id));
  };

  const handleIncrease = (item) => {
    dispatch(increase(item));
  };

  const handleDecrease = (item) => {
    console.log(item);
    if (item.quantity > 1) {
      dispatch(decrease(item));
    } else {
      showInfoToast(`Quantity can't be less than 1`, `green`);
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
            <div className=" md:flex flex-col gap-4 py-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFF] grid grid-cols-1 md:grid-cols-4 items-center"
                >
                  <div className="p-4 mx-auto md:mx-0">
                    <img
                      className="object-cover w-32 rounded-xl"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p className="font-semibold whitespace-nowrap text-lg text-gray-900">
                      {item.name}
                    </p>
                    <div>
                      <span className="text-sm font-semibold text-gray-500">
                        Size:
                      </span>
                      <span className="text-sm text-gray-500">{item.size}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <MdDelete />
                    </button>
                  </div>

                  <p className="mb-8 text-xl font-bold text-gray-900">
                    ${item.price}
                  </p>
                  <div className="mb-8">
                    <button
                      className="text-white hover:text-gray-700 bg-gray-500 p-1"
                      onClick={() => handleDecrease(item)}
                    >
                      <FaMinus />
                    </button>
                    <span className="px-2 text-xl font-semibold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      className="text-white hover:text-gray-700 bg-gray-500 p-1"
                      onClick={() => handleIncrease(item)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bg-[#FFFF] flex flex-col gap-2 p-4 md:w-[30%] h-full my-4 ">
          <h1 className="font-semibold text-xl">Order Summary </h1>
          <div>
            <span className="text-sm font-semibold">Total Price: $</span>
            <span>
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <button className="bg-blue-600 right-0 text-white rounded-md w-full p-2 text-center font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
