import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "../features/landingpage/recommendationSlice";
import reviewReducer from "../features/landingpage/reviewSlice";
import typesReducer from "../features/landingpage/typesSlice";
import productReducer from "../features/landingpage/productSlice";
import brandReducer from "../features/landingpage/brandSlice";
import categoryReducer from "../features/landingpage/categorySlice";
import shopReducer from "../features/landingpage/shopSlice";
import womenReducer from "../features/category/womenSlice";
import menReducer from "../features/category/menSlice";
import accessoryReducer from "../features/category/accessorySlice";
import advertisementReducer from "../features/landingpage/advertisementSlice";
import blogReducer from "../features/navigationbar/blogSlice";

export const store = configureStore({
  reducer: {
    recommendations: recommendationReducer,
    reviews: reviewReducer,
    typesOfProduct: typesReducer,
    products: productReducer,
    brands: brandReducer,
    category: categoryReducer,
    shop: shopReducer,
    cart: categoryReducer,
    women: womenReducer,
    men: menReducer,
    accessory: accessoryReducer,
    advertisement: advertisementReducer,
    blogs: blogReducer,
  },
});
