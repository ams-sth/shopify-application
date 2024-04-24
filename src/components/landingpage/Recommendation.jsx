import React, { useState } from "react";
// import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { changeImageIndex } from "../../redux/features/landingpage/recommendationSlice";

const Recommendation = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { recommend } = useSelector((state) => state.recommendations);

  const dispatch = useDispatch();

  const handleImageChange = (imageId, newIndex) => {
    dispatch(changeImageIndex({ imageId, newIndex }));
  };

  const handleSeeMore = (productId) => {
    setShowFullDescription({
      ...showFullDescription,
      [productId]: !showFullDescription[productId] || false,
    });
  };

  return (
    <div className="px-4">
      <div>
        <h1 className="font-bold text-4xl">Recommended For You</h1>
        <p className="text-sm text-gray-500 py-2">
          The number of goods in stock is limited
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 gap-12">
        {recommend.map((items) => (
          <div className="shadow-sm rounded-2xl bg-[#FFFF]" key={items.id}>
            <div className="flex flex-row justify-between px-4">
              <h1 className="font-bold text-gray-800 text-xs text-start p-4 translate-y-[1.5rem]">
                {items.company}
              </h1>
              <div className="flex flex-row translate-y-[2rem]">
                <h1 className="text-sm font-semibold translate-y-3">$</h1>
                <h1 className="font-semibold text-2xl">{items.price}</h1>
              </div>
            </div>
            <div className="flex flex-row px-4 py-6">
              <div className="w-fit">
                <img
                  src={items.image[items.currentImageIndex || 0]}
                  alt="Not found"
                  className="rounded-2xl"
                />
                <div className="flex flex-row gap-4 pt-4 justify-center">
                  {items.image.map((images, index) => (
                    <div key={index} className="w-[30%]">
                      <img
                        src={images}
                        alt="Not found"
                        onClick={() => handleImageChange(items.id, index)}
                        className="cursor-pointer rounded-xl object-contain"
                        style={{
                          border:
                            index === (items.currentImageIndex || 0)
                              ? "2px solid blue"
                              : "2px solid gray",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex flex-col gap-2 px-2">
                <p className="font-bold text-xl text-start text-gray-700">
                  {items.productName}
                </p>
                <div className="flex flex-col">
                  {showFullDescription[items.id] ? (
                    <div className="full-description">
                      <p className="max-w-lg text-md text-left text-gray-500">
                        {items.fullDescription}
                      </p>
                    </div>
                  ) : (
                    <p className="max-w-lg text-md text-left text-gray-500">
                      {items.lessDescription}
                    </p>
                  )}
                  <button
                    onClick={() => handleSeeMore(items.id)}
                    className="maxw-w-xl text-sm text-left text-blue-500 hover:text-blue-700"
                  >
                    {showFullDescription[items.id] ? "See Less" : "See More"}
                  </button>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-left text-sm">Product:</h1>
                  <h1 className="text-left text-sm">{items.ProductType}</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-left text-sm">SKU: </h1>
                  <h1 className="text-left text-sm">{items.SKU}</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-left text-sm">Weight:</h1>
                  <h1 className="text-left text-sm">{items.Weight} KG</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
