export const incrementQuantity = (state, action) => {
  const productId = action.payload;
  const foundProduct = state.find((product) => product.id === productId);
  if (foundProduct) {
    foundProduct.quantity++;
  }
};
export const decrementQuantity = (state, action) => {
  const productId = action.payload;
  const foundProduct = state.find((product) => product.id === productId);
  if (foundProduct) {
    foundProduct.quantity--;
  }
};
