import React, { useState } from "react";
import { useSelector } from "react-redux";

const FAQ = () => {
  const [activeSection, setActiveSection] = useState("AboutShopify");
  const { AboutShopify, PrePurchase, LumiaFeatures, Support } = useSelector(
    (state) => state.faq
  );

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const getButtonClassName = (buttonName) => {
    return `px-6 py-2 hover:bg-blue-700 hover:text-white rounded-xl font-bold ${
      activeSection === buttonName ? "bg-blue-700 text-white" : ""
    }`;
  };

  return (
    <div className="container px-4">
      <h1 className="text-2xl font-bold pb-20">Have a Question ? Look here</h1>
      <div className="flex flex-col md:flex-row justify-center  md:justify-between gap-12">
        <div className="flex flex-col gap-4">
          <button
            className={getButtonClassName("AboutShopify]")}
            onClick={() => handleButtonClick("AboutShopify")}
          >
            ABOUT SHOPIFY
          </button>
          <button
            className={getButtonClassName("PrePurchase")}
            onClick={() => handleButtonClick("PrePurchase")}
          >
            PRE-PURCHASE
          </button>
          <button
            className={getButtonClassName("LumiaFeatures")}
            onClick={() => handleButtonClick("LumiaFeatures")}
          >
            LUMIA FEATURES
          </button>
          <button
            className={getButtonClassName("Support")}
            onClick={() => handleButtonClick("Support")}
          >
            SUPPORT
          </button>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {activeSection === "AboutShopify" && (
            <div className="flex flex-col gap-4 ">
              {AboutShopify.map((faq) => (
                <div key={faq.id} className="flex flex-col gap-4 text-start">
                  <h3 className="font-bold text-xl">{faq.question}</h3>
                  {faq.answer.map((answer, index) => (
                    <p key={index}>{answer}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
          {activeSection === "PrePurchase" && (
            <div className="flex flex-col gap-4">
              {PrePurchase.map((faq) => (
                <div key={faq.id} className="flex flex-col gap-4 text-start">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  {faq.answer.map((answer, index) => (
                    <p key={index}>{answer}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
          {activeSection === "LumiaFeatures" && (
            <div className="flex flex-col gap-4">
              {LumiaFeatures.map((faq) => (
                <div key={faq.id} className="flex flex-col gap-4 text-start">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  {faq.answer.map((answer, index) => (
                    <p key={index}>{answer}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
          {activeSection === "Support" && (
            <div className="flex flex-col gap-4">
              {Support.map((faq) => (
                <div key={faq.id} className="flex flex-col gap-4 text-start">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  {faq.answer.map((answer, index) => (
                    <p key={index}>{answer}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
