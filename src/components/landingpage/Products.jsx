import React from "react";
import ReactStars from "react-stars";
import { useSelector, useDispatch } from "react-redux";
import {
  changeImage,
  changeSize,
  decrease,
  increase,
} from "../../redux/features/landingpage/productSlice";
import { addtocart } from "../../redux/features/cart/cartSlice";
import { NavLink } from "react-router-dom";
import { showInfoToast, showSuccessToast } from "../../utils/toast";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleIncrease = (productId) => {
    dispatch(increase(productId));
  };
  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      dispatch(decrease(product.id));
    } else {
      showInfoToast(`Quantity can't be less than 1`);
    }
  };

  const handleImageChange = (productId, newIndex) => {
    dispatch(changeImage({ productId, newIndex }));
  };
  const handleSizeChange = (productId, newIndex) => {
    dispatch(changeSize({ productId, newIndex }));
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      image: product.multiImages[product.currentImageIndex || 0],
      size: product.sizes[product.currentSizeIndex || 0],
      imageIndex: product.currentImageIndex || 0,
    };
    dispatch(addtocart(cartItem));
    showSuccessToast("Product Added Successfully");
  };

  return (
    <div className="container px-4">
      <div>
        <h1 className="text-4xl font-bold">Check out products of the day</h1>
        <p className="text-sm text-gray-500 py-2">
          Admin panel allows you to add, delete, edit subtitles
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col rounded-2xl bg-[#FFFF] shadow-lg overflow-hidden flex-1"
          >
            <div className="p-4">
              <div className="flex flex-row justify-between flex-1 pt-4">
                <h1 className="font-bold text-xs">{product.company}</h1>
                <div className="flex gap-1 translate-y-[-0.5rem]">
                  <h1 className="translate-y-[0.4rem]">$</h1>
                  <h1 className="font-semibold text-2xl">{product.price}.00</h1>
                </div>
              </div>
              <img
                src={product.multiImages[product.currentImageIndex || 0]}
                alt="Not found"
                className="h-[65%] object-cover rounded-xl"
              />
              <div className="translate-y-[-9rem] lg:translate-y-[1.5rem] hover:translate-y-[-9rem] duration-500 bg-[#FFFF] flex flex-col">
                <div className="flex flex-row gap-4 pt-4 justify-center">
                  {product.multiImages.map((multiImages, index) => (
                    <div key={index} className="rounded-xl w-fit">
                      <img
                        src={multiImages}
                        alt="Not found"
                        onClick={() => handleImageChange(product.id, index)}
                        className="cursor-pointer"
                        style={{
                          border:
                            index === (product.currentImageIndex || 0)
                              ? "2px solid blue"
                              : "2px solid gray",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <h1 className="pt-4">{product.name}</h1>
                <div className="pt-2 mx-auto">
                  <ReactStars
                    count={5}
                    size={24}
                    half={true}
                    color1={"#333"}
                    color2={"#f4c10f"}
                    edit={true}
                  />
                </div>
                <h1 className="pt-4">Size: </h1>
                <div className="flex flex-row gap-2 pt-4 justify-center">
                  {product.sizes.map((size, index) => (
                    <div
                      key={index}
                      className="border-2 px-2 rounded-md cursor-pointer"
                      onClick={() => handleSizeChange(product.id, index)}
                      style={{
                        border:
                          index === (product.currentSizeIndex || 0)
                            ? "2px solid blue"
                            : "2px solid gray",
                      }}
                    >
                      {size}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row gap-4 justify-center pt-4">
                  <h1 className="font-semibold">Amount:</h1>
                  <button onClick={() => handleDecrease(product)}>-</button>
                  <h1>{product.quantity}</h1>
                  <button onClick={() => handleIncrease(product.id)}>+</button>
                </div>
                <div className="flex justify-center py-4">
                  <NavLink
                    to="/cart"
                    onClick={() => handleAddToCart(product)}
                    className={`bg-blue-600 hover:bg-blue-950 py-2 w-[90%] rounded-xl font-bold text-white `}
                  >
                    Add to Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
