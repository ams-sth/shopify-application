import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increase,
  decrease,
  removefromcart,
} from "../../redux/features/cart/cartSlice";
import { showInfoToast } from "../../utils/toast";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems, "cart items");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removefromcart(id));
  };

  const handleIncrease = (item) => {
    dispatch(increase(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decrease(item));
    } else {
      showInfoToast(`Quantity can't be less than 1`);
    }
  };

  return (
    <div className="container px-4">
      <h1 className="text-4xl font-bold text-start py-4">Shopping Cart</h1>
      <div className="flex flex-col justify-start md:justify-between gap-4 bg-[#FFFF] border-2 rounded-xl ">
        <div className="w-full">
          {cartItems.length === 0 ? (
            <div className="bg-white p-8">
              <p className="text-lg font-semibold text-gray-600">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 px-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4"
                >
                  <div>
                    <img
                      className="h-20 w-20 object-cover rounded-xl mx-auto"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                    <div>
                      <p className="font-semibold whitespace-nowrap text-lg text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">{item.size}</p>
                    </div>
                    <div>
                      <button
                        className="text-white hover:text-gray-700 bg-gray-500 rounded-full px-2"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2 text-xl font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        className="text-white hover:text-gray-700 bg-gray-500 rounded-full px-2"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </div>

                  <div>
                    <p className="text-4xl font-bold text-gray-900">
                      ${item.price}
                    </p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t-2 flex flex-col items-end gap-2 p-4">
          <span className="text-2xl font-bold">
            Total Price: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
          <button className="bg-blue-600 right-0 text-white rounded-md w-full p-2 md:w-[10%] text-center font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
