import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

import { removefromcart } from "../../redux/features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems, "cart items");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removefromcart(id));
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Shopping Cart</h1>

      <div className="flex justify-between mt-8">
        <div className="w-3/4 pr-8">
          {cartItems.length === 0 ? (
            <div className="bg-white shadow-lg rounded-xl p-8">
              <p className="text-lg text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          className="h-20 w-20 object-cover rounded-xl"
                          src={item.image}
                          alt={item.name}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${item.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="w-1/4">
          <div className="bg-gray-100 rounded-xl p-6">
            <div className="text-lg font-semibold mb-4">Total Price</div>
            <div className="text-2xl font-bold">
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </div>
            <button className="bg-blue-600 text-white rounded-md px-4 py-2 mt-6 block w-full text-center font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
