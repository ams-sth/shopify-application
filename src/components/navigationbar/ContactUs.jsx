/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiPhone } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="flex flex-row justify-between gap-4">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4373193725523!2d-74.00332702450176!3d40.70838843783752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2355a4b96f%3A0xfb2676ee3604a0ff!2s254%20Front%20Street!5e0!3m2!1sen!2snp!4v1713421418869!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{
              border: "0",
              allowFullScreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }}
          />
          <div className="flex flex-row gap-20 pt-8 justify-center">
            <div className="flex flex-col">
              <IoLocationOutline size={48} />
              <h1 className="text-start text-xl font-semibold">Location:</h1>
              <p className="text-start">165th St, Jamaica, NY 11</p>
            </div>
            <div className="flex flex-col">
              <TfiEmail  size={48} />
              <h1 className="text-start text-xl font-semibold">Email:</h1>
              <p className="text-start">loremipsum@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <CiPhone size={48} />
              <h1 className="text-start text-xl font-semibold">Phone:</h1>
              <p className="text-start">+1-202-555-0158</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-left text-2xl font-bold ">Let’s Talk</h1>
          <p className="text-left max-w-md text-gray-500">
            To request a quote our products, contact us directly or fill out the
            form and we will get back to you promptly.
          </p>
          <h1 className="text-left">Name</h1>
          <input
            className="border-b border-gray-200"
            placeholder="Enter your Name Here"
          />
          <h1 className="text-left">Email</h1>
          <input
            className="border-b border-gray-200"
            placeholder="Enter your Email Here"
          />
          <h1 className="text-left">Phone number</h1>
          <input
            className="border-b border-gray-200"
            placeholder="Phone number"
          />
          <h1 className="text-left">Comment</h1>
          <input className="border-b border-gray-200" placeholder="Comment" />
          <button className="bg-blue-600 hover:bg-blue-900 rounded-2xl h-[2.5rem] w-[20%] text-white font-semibold">
            {" "}
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
