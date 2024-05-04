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
      <div className="grid grid-cols-2 gap-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              className="border p-3 w-full rounded-lg"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm text-left">{errors.email}</p>
            )}
            <div className="flex flex-row gap-2">
              <div className="w-full">
                <input
                  className="border p-3 w-full rounded-lg"
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  className="border p-3 w-full rounded-lg"
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
            <input
              className="border p-3 w-full rounded-lg"
              placeholder="Address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm text-left">{errors.address}</p>
            )}
            <div className="flex gap-4">
              <div>
                <input
                  className="border p-3 w-full rounded-lg"
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.city}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="border p-3 w-full rounded-lg"
                  placeholder="State"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.state}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="border p-3 w-full rounded-lg"
                  placeholder="Zip Code"
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.zipCode}
                  </p>
                )}
              </div>
            </div>
            <div className="bg-[#F4F4F4] p-4 flex flex-col gap-4">
              <input
                className="border p-3 w-full rounded-lg"
                placeholder="Card Number"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm text-left">
                  {errors.cardNumber}
                </p>
              )}
              <div className="flex flex-row gap-2">
                <div className="w-full">
                  <input
                    className="border p-3 w-full rounded-lg"
                    placeholder="Expiration Date(MM / YY)"
                  />
                  {errors.expirationDate && (
                    <p className="text-red-500 text-sm text-left">
                      {errors.expirationDate}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    className="border p-3 w-full rounded-lg"
                    placeholder="Security Code"
                  />
                  {errors.securityCode && (
                    <p className="text-red-500 text-sm text-left">
                      {errors.securityCode}
                    </p>
                  )}
                </div>
              </div>
              <input
                className="border p-3 w-full rounded-lg"
                placeholder="Name on card"
              />
              {errors.cardName && (
                <p className="text-red-500 text-sm text-left">
                  {errors.cardName}
                </p>
              )}
            </div>
            <button className="rounded-lg w-full p-4 bg-blue-600 hover:bg-blue-800 text-white">
              Pay Now
            </button>
          </div>
        </form>

        <div className>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-center gap-8 items-center"
              >
                <div className="p-4">
                  <img
                    className="object-cover w-32 rounded-xl"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <h1 className="rounded-full px-2 text-white bg-gray-600 -ml-16 -mt-32">
                  {item.quantity}
                </h1>
                <h1 className=" text-lg text-gray-900">{item.name}</h1>
                <span className=" text-xl">$ {calculateItemPrice(item)}</span>
              </div>
            ))}
            <div className="flex justify-center">
              <h1 className="translate-x-8">Total:</h1>
                <h1 className="text-xl translate-x-40">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Checkout;
