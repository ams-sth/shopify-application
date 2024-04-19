import { createSlice } from "@reduxjs/toolkit";

import Hanson from "../../../assets/images/reviews/Isabel Hanson.jpg";
import Sharpe from "../../../assets/images/reviews/Ewan Sharpe.jpg";
import Finch from "../../../assets/images/reviews/Alisha Finch.jpg";
import Demir from "../../../assets/images/reviews/Hasan Demir.jpg";

const initialState = {
  reviews: [
    {
      id: 1,
      name: "Isabel Hanson",
      title: "Designer",
      image: Hanson,
      content: `We had several questions and minor issues that we weren't aware of how to fix it. 
                Contacted support and they were super quick...`,
      place: "Louisville",
    },
    {
      id: 2,
      name: "Ewan Sharpe",
      title: "Developer",
      image: Sharpe,
      content: `By far one of the best developers we have worked with. 
                They were extremely knowledgeable with any question, comment, or concern we had and solved any issue in a timely manner. We highly recommend them for not only their quality products (themes & HTML templates) but their customer service as well..`,
      place: "Dallas",
    },
    {
      id: 3,
      name: "Alisha Finch",
      title: "SEO Manager",
      image: Finch,
      content: `The customer support is absolutely amazing.
                Every time I submitted an question, Bigsteps was able to provide an answer very fast..`,

      place: "Bradenton",
    },
    {
      id: 4,
      name: "Hasan Demir",
      title: "Marketing Manager",
      image: Demir,
      content: `Great theme with lots of options and great support. 
                Their support is awesome. Amazing communication and service!`,
      place: "Brandenton",
    },
  ],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
});

export default reviewSlice.reducer;
