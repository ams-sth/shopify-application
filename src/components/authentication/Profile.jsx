import React from "react";
import { useSelector } from "react-redux";
import { calculateItemPrice } from "../../utils/cartUtils";
import { TbDoorExit } from "react-icons/tb";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("formData"));

  const { cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  if (data) {
    // Do something with the data
    console.log("Data found:", data);
  } else {
    console.log("No data found for the specified key");
  }
  return (
    <div className="container px-4">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-semibold mb-4">Account</h1>
        <div onClick={handleLogout} className="flex gap-2">
          <TbDoorExit className="text-[#0067FF] translate-y-1" />
          <h1 className="text-[#0067FF]">Log Out</h1>
        </div>

        <div className="w-[50%] flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-start">Order History</h1>
          {cartItems.length === 0 ? (
            <div className="bg-[#FFFFFF] border p-8">
              <p>You haven't placed any orders yet.</p>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div>
                  <div
                    key={item.id}
                    className="flex flex-row  gap-8 items-center"
                  >
                    <div className="p-4">
                      <img
                        className="object-cover w-8 rounded-xl"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <h1 className="rounded-full px-2 text-white bg-gray-600 -ml-16 -mt-32">
                      {item.quantity}
                    </h1>
                    <h1 className=" text-lg text-gray-900">{item.name}</h1>
                    <span className=" text-xl">
                      $ {calculateItemPrice(item)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-[50%] flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-start">Account details</h1>
          <div className="bg-[#FFFFFF] border rounded-xl p-4">
            <div className="flex gap-2">
              <h1 className="text-lg font-semibold">First Name: </h1>
              <h2>{data.firstName}</h2>
            </div>
            <div className="flex gap-2">
              <h1 className="text-lg font-semibold">Last Name:</h1>
              <h2>{data.lastName}</h2>
            </div>
            <div className="flex gap-2">
              <h1 className="text-lg font-semibold">Email:</h1>
              <h2 className="text-lg">{data.email}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
