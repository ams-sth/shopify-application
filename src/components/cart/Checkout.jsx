import React, { useState } from "react";
import { useSelector } from "react-redux";
import { calculateItemPrice } from "../../utils/cartUtils";
import { ValidateCheckoutForm } from "../../utils/validationUtils";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [errors, setErrors] = useState({});

  const [formData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { errors: validationErrors, isValid } =
      ValidateCheckoutForm(formData);
    setErrors(validationErrors);
    if (isValid) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  };
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-4">
            <input className="border p-3 rounded-lg" placeholder="Email" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
              <input
                className="border p-3 rounded-lg w-full"
                placeholder="First name"
              />
              <input
                className="border p-3 rounded-lg w-full"
                placeholder="Last name"
              />
            </div>
            <input className="border p-3 rounded-lg" placeholder="Address" />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <input
                className="border p-3 rounded-lg w-full"
                placeholder="City"
              />
              <input
                className="border p-3 rounded-lg w-full"
                placeholder="State"
              />
              <input
                className="border p-3 rounded-lg w-full"
                placeholder="Zip Code"
              />
            </div>
            <div className="bg-[#F4F4F4] p-4 flex flex-col gap-4">
              <input
                className="border p-3 rounded-lg"
                placeholder="Card Number"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">{errors.cardNumber}</p>
              )}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                <input
                  className="border p-3 rounded-lg w-full"
                  placeholder="Expiration Date(MM / YY)"
                />
                <input
                  className="border p-3 rounded-lg w-full"
                  placeholder="Security Code"
                />
              </div>
              <input
                className="border p-3 rounded-lg"
                placeholder="Name on card"
              />
              {errors.cardName && (
                <p className="text-red-500 text-sm">{errors.cardName}</p>
              )}
            </div>
            <button className="rounded-lg p-4 bg-blue-600 hover:bg-blue-800 text-white w-full">
              Pay Now
            </button>
          </div>
        </form>

        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 items-center"
            >
              <div className="p-4 border-2">
                <img
                  className="relative object-cover w-32 rounded-xl"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h1 className="absolute rounded-full px-2 text-white bg-gray-600 top-0 right-[10rem] -translate-x-[1rem] md:-ml-16 md:-mt-32">
                {item.quantity}
              </h1>
              <div className="flex flex-col">
                <h1 className="text-lg text-gray-900">{item.name}</h1>
                <span className="text-xl">${calculateItemPrice(item)}</span>
              </div>
            </div>
          ))}
          <div>
            <span className="mt-4 sm:mt-0 sm:mr-4">Total:</span>
            <span className="text-xl sm:ml-0">
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
