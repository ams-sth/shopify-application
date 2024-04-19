import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Add TO CART",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addtocart: (state, action) => {
      const itemtoAdd = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === itemtoAdd.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...itemtoAdd, quantity: 1 }],
        };
      }
    },
  },
});

export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;
