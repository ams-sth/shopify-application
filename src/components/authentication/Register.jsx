import React, { useState } from "react";
import register from "../../assets/images/authentication/authentication.jpg";
import { NavLink } from "react-router-dom";
import { validateRegisterForm } from "../../utils/validationUtils";
import { showSuccessToast } from "../../utils/toast";

const Register = () => {
  const [errors, setErrors] = useState({});

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const { errors: validationErrors, isValid } =
      validateRegisterForm(formData);
    setErrors(validationErrors);
    if (isValid) {
      try {
        localStorage.setItem("formData", JSON.stringify(formData));
        showSuccessToast("Account Created SuccessFully");
        
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    } else {
      console.log("Saving to LocalStoage Failed", formData);
    }
  };

  return (
    <div className="container px-4">
      <div className="flex flex-row">
        <div className="hidden md:flex md:flex-1">
          <img
            src={register}
            alt="Register"
            className="rounded-l-xl h-full object-cover"
          />
        </div>
        <div className="flex-1 bg-[#F7F8FC] items-center content-center rounded-r-xl md:rounded-r-xl p-12">
          <h1 className="text-4xl font-bold ">Register Here</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl text-left">First Name</h1>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border-b-2 p-3 md:rounded-t-xl "
                  placeholder="Enter your First Name here"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl text-start">Last Name</h1>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border-b-2 p-3 rounded-t-xl"
                  placeholder="Enter your Last Name here"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm text-start">
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl text-start">Email</h1>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-b-2 p-3 rounded-t-xl"
                  placeholder="Enter your E-mail here"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-start">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl text-start">Password</h1>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-b-2 p-3 rounded-t-xl "
                  placeholder="Enter your Password here"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm text-start">
                    {errors.password}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-12 rounded-xl"
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex flex-col md:flex-row gap-1 justify-center p-3">
            <h1>Already have an account ?</h1>
            <NavLink to="/login" className="text-blue-500">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
