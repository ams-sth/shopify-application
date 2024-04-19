import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const Reviews = () => {
  const feedbacks = useSelector((state) => state.reviews.reviews);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">What people say</h1>
        <p className="text-sm">Real customer reviews from themeforest.net</p>
      </div>
      <Slider className="pt-20" {...settings}>
        {feedbacks.map((review) => (
          <div
            key={review.id}
            className={`bg-[#FFFF] py-12 rounded-xl shadow-lg hover:shadow-xl mb-4`}
          >
            <div>
              <img
                src={review.image}
                alt={review.name}
                className={`rounded-full -translate-y-[50%] translate-x-[50%] md:translate-x-[100%]`}
              />
            </div>
            <h1 className="font-semibold text-xl">{review.name}</h1>
            <h1 className="text-xs">{review.title}</h1>
            <h1 className="pt-4">{review.content}</h1>
            <h1 className="pt-4">{review.place}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
