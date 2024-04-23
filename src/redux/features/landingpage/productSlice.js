import { createSlice } from "@reduxjs/toolkit";

import Shorts from "../../../assets/images/products/Shorts.jpg";

import MenSmoothJacket from "../../../assets/images/products/Men Smooth Jacket.jpg";
import MenSmoothJacketTwo from "../../../assets/images/products/Men Smooth Jacket 2.jpg";
import MenSmoothJacketThree from "../../../assets/images/products/Men Smooth Jacket 3.jpg";
import MenSmoothJacketFour from "../../../assets/images/products/Men Smooth Jacket 4.jpg";

import LoosePaddedJacket from "../../../assets/images/products/Loose Padded Jacket.jpg";
import LoosePaddedJacket2 from "../../../assets/images/products/Loose Padded Jacket 2.jpg";
import LoosePaddedJacket3 from "../../../assets/images/products/Loose Padded Jacket 3.jpg";
import LoosePaddedJacket4 from "../../../assets/images/products/Loose Padded Jacket 4.jpg";

import SatinpaddedJacket from "../../../assets/images/products/Satin Padded Jacket.jpg";
import SatinpaddedJacket2 from "../../../assets/images/products/Satin Padded Jacket 2.jpg";
import SatinpaddedJacket3 from "../../../assets/images/products/Satin Padded Jacket 3.jpg";
import SatinpaddedJacket4 from "../../../assets/images/products/Satin Padded Jacket 4.jpg";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../shared_reducers/sharedReducers";

const initialState = {
  products: [
    {
      id: 1,
      company: "CLAYTAN",
      price: 5,
      currentImageIndex: 0,
      image: Shorts,
      multiImages: [Shorts, Shorts, Shorts, Shorts],
      name: "Short demin shorts",
      color: "Dark Blue",
      sizes: ["XS", "S", "M", "M/L", "L"],
      currentSizeIndex: 0,
      quantity: 1,
    },
    {
      id: 2,
      company: "CANVERSE",
      currentImageIndex: 0,
      multiImages: [
        MenSmoothJacket,
        MenSmoothJacketTwo,
        MenSmoothJacketThree,
        MenSmoothJacketFour,
      ],
      name: "Men's Smooth Jacket",
      description: `A sweater or pullover also called a jersey or jumper, is a piece of clothing, 
      typically with long sleeves, made of knitted or crocheted material, 
      that covers the upper part of the body. When sleeveless, 
      the garment is often called a slipover, tank top, or sweater vest.`,
      type: "Sweater",
      sku: "M75009BL1",
      weight: "0.65 kg",
      color: ["Black", "Green"],
      sizes: ["XS", "S", "M", "M/L", "L"],
      currentSizeIndex: 0,
      price: 47,
      quantity: 1,
      tag: ["collection-hand-muffs", "men", "new"],
    },
    {
      id: 3,
      company: "COLVIN KLEIN",
      price: 53,
      currentImageIndex: 0,
      multiImages: [
        LoosePaddedJacket,
        LoosePaddedJacket2,
        LoosePaddedJacket3,
        LoosePaddedJacket4,
      ],
      name: "Loose padded Jacket",
      color: "Brown",
      sizes: ["XS", "S", "M", "M/L", "L"],
      currentSizeIndex: 0,
      quantity: 1,
    },
    {
      id: 4,
      company: "COLVIN KLEIN",
      price: 29,
      currentImageIndex: 0,

      multiImages: [
        SatinpaddedJacket,
        SatinpaddedJacket2,
        SatinpaddedJacket3,
        SatinpaddedJacket4,
      ],
      name: "Satin Padded Jacket",
      color: "Cyan",
      sizes: ["XS", "S", "M", "M/L", "L"],
      currentSizeIndex: 0,
      quantity: 1,
    },
  ],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    increase(state, action) {
      incrementQuantity(state.products, action);
    },
    decrease(state, action) {
      decrementQuantity(state.products, action);
    },
    changeImage(state, action) {
      const { productId, newIndex } = action.payload;
      const productToChange = state.products.find((p) => p.id === productId);
      if (
        productToChange &&
        newIndex >= 0 &&
        newIndex < productToChange.multiImages.length
      ) {
        productToChange.currentImageIndex = newIndex;
      }
    },
    changeSize(state, action) {
      const { productId, newIndex } = action.payload;
      const sizeToChange = state.products.find((p) => p.id === productId);
      if (
        sizeToChange &&
        newIndex >= 0 &&
        newIndex < sizeToChange.sizes.length
      ) {
        sizeToChange.currentSizeIndex = newIndex;
      }
    },
  },
});

export const { increase, decrease, changeImage, changeSize } =
  productSlice.actions;
export default productSlice.reducer;
