export const incrementQuantity = (state, action) => {
  const productId = action.payload;
  const productToUpdate = state.find((p) => p.id === productId);
  if (productToUpdate) {
    productToUpdate.quantity++;
  }
};
export const decrementQuantity = (state, action) => {
  const productId = action.payload;
  const productToUpdate = state.find((p) => p.id === productId);
  if (productToUpdate && productToUpdate.quantity > 0) {
    productToUpdate.quantity--;
  }
};
