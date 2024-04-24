import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../assets/images/authentication/authentication.jpg";
import { showErrorToast, showInfoToast, showSuccessToast } from "../../utils/toast";

const Login = () => {
  const [FormData, setFormData] = useState({
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  });

  const handleInputChange = (event) => {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {

    // Validate form fields
    if (
      !FormData.email ||
      !FormData.password
    ) {
      // Handle incomplete form
      showInfoToast("Please fill in all fields");
      return;
    }
    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if storedUserData exists
    if (!storedUserData) {
      showErrorToast("No registered user found. Please register first.");
      return;
    }

    // Check if the entered email and password match the stored user data
    if (
      FormData.email === storedUserData.email &&
      FormData.password === storedUserData.password
    ) {
      showSuccessToast("Login successful!");
      // Redirect to dashboard or any other action
      
    } else {
      showErrorToast("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="hidden md:flex md:flex-1">
          <img src={login} alt="Login" className="rounded-l-xl" />
        </div>
        <div className="flex-1 bg-[#F7F8FC] items-center content-center rounded-r-xl p-12">
          <h1 className="text-6xl font-bold mb-5">Welcome</h1>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl text-start">Email</h1>
            <input
              name="email"
              value={FormData.email}
              type="email"
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
              type="password"
              onChange={handleInputChange}
              className="border-b-2 p-3 rounded-t-xl mb-5"
              placeholder="Enter your Password here"
            />
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-12 rounded-xl"
          >
            Login
          </button>
          <div className="flex flex-col md:flex-row gap-1 justify-center p-3">
            <h1>Don't have an account ?</h1>
            <NavLink to="/register" className="text-blue-500">
              Register Here
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
