import { addtocart } from "../redux/features/cart/cartSlice";
import { showSuccessToast } from "./toast";

export const handleAddToCart = (product, dispatch) => {
  if (!product) {
    return;
  }
  const cartItem = {
    id: product.id,
    name: product.name || product.productName,
    price: product.price,
    quantity: product.quantity,
    image:
      product.image[product.currentImageIndex || 0] ||
      product.multiImages[product.currentImageIndex || 0], 
    size:
      product.size[product.currentSizeIndex || 0] ||
      product.sizes[product.currentSizeIndex || 0], 
    imageIndex: product.currentImageIndex || 0,
  };
  dispatch(addtocart(cartItem));
  showSuccessToast("Product Added Successfully");
};