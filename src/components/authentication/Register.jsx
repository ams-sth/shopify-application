import React, { useState } from "react";
import register from "../../assets/images/authentication/authentication.jpg";
import { NavLink } from "react-router-dom";
import { showErrorToast, showInfoToast, showSuccessToast } from "../../utils/toast";

const Register = () => {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
  };

  const handleRegister = () => {
    // Validate form fields
    if (
      !FormData.firstName ||
      !FormData.lastName ||
      !FormData.email ||
      !FormData.password
    ) {
      // Handle incomplete form
      showInfoToast("Please fill in all fields");
      return;
    }

    // Check if user already exists
    const existingUserData = JSON.parse(localStorage.getItem("userData"));
    if (existingUserData && existingUserData.email === FormData.email) {
        showErrorToast("User with this email already exists");
      return;
    }

    // Save new user data to localStorage
    localStorage.setItem("userData", JSON.stringify(FormData));
    showSuccessToast("Registered successfully!");
    // Redirect to login page or any other action
  };
  return (
    <div>
      <div className="container px-4">
        <div className="flex flex-row">
          <div className="hidden md:flex md:flex-1">
            <img src={register} alt="Register" className="rounded-l-xl h-full object-cover" />
          </div>
          <div className="flex-1 bg-[#F7F8FC] items-center content-center rounded-xl p-12">
            <h1 className="text-4xl font-bold mb-5">Register Here</h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl text-start">First Name</h1>
              <input
                name="firstName"
                value={FormData.firstName}
                onChange={handleInputChange}
                className="border-b-2 p-3 rounded-t-xl mb-5"
                placeholder="Enter your First Name here"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl text-start">Last Name</h1>
              <input
                name="lastName"
                value={FormData.lastName}
                onChange={handleInputChange}
                className="border-b-2 p-3 rounded-t-xl mb-5"
                placeholder="Enter your Last Name here"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl text-start">Email</h1>
              <input
                name="email"
                value={FormData.email}
                onChange={handleInputChange}
                className="border-b-2 p-3 rounded-t-xl mb-5"
                placeholder="Enter your E-mail here"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl text-start">Password</h1>
              <input
                name="password"
                value={FormData.password}
                onChange={handleInputChange}
                className="border-b-2 p-3 rounded-t-xl mb-5"
                placeholder="Enter your Password here"
              />
            </div>
            <button
              onClick={handleRegister}
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-12 rounded-xl"
            >
              Register
            </button>
            <div className="flex flex-col md:flex-row gap-1 justify-center p-3">
              <h1>Already have an account ?</h1>
              <NavLink to="/login" className="text-blue-500">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
