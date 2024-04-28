import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "./features/landingpage/recommendationSlice";
import typesReducer from "./features/landingpage/typesSlice";
import productReducer from "./features/landingpage/productSlice";
import brandReducer from "./features/landingpage/brandSlice";
import categoryReducer from "./features/landingpage/categorySlice";
import shopReducer from "./features/landingpage/shopSlice";
import womenReducer from "./features/category/womenSlice";
import menReducer from "./features/category/menSlice";
import accessoryReducer from "./features/category/accessorySlice";
import advertisementReducer from "./features/landingpage/advertisementSlice";
import blogReducer from "./features/navigationbar/blogSlice";
import cartReducer from "./features/cart/cartSlice";
import faqReducer from "./features/navigationbar/faqSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    recommendations: recommendationReducer,
    typesOfProduct: typesReducer,
    products: productReducer,
    brands: brandReducer,
    category: categoryReducer,
    shop: shopReducer,
    women: womenReducer,
    men: menReducer,
    accessory: accessoryReducer,
    advertisement: advertisementReducer,
    blogs: blogReducer,
    cart: persistedCartReducer,
    faq: faqReducer,
  },
});

export const persistor = persistStore(store);
