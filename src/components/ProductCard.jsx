import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card p-4 border rounded shadow-sm">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
