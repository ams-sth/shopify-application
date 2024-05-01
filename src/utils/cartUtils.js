import { addtocart } from "../redux/features/cart/cartSlice";
import { showSuccessToast } from "./toast";

export const handleAddToCart = (product, dispatch) => {
  if (!product) {
    return;
  }
  console.log("product.image:", product.image);
  console.log("product.multiImages:", product.multiImages);
  const cartItem = {
    id: product.id,
    name: product.productName || product.name,
    price: product.price,
    quantity: product.quantity,
    image: product.image[product.currentImageIndex || 0],
    color: product.color[product.currentColorIndex || 0],
    size: product.size[product.currentSizeIndex || 0],
    imageIndex: product.currentImageIndex || 0,
  };
  dispatch(addtocart(cartItem));
  showSuccessToast("Product Added Successfully");
};
