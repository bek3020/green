import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/productSlice";

const Korzinka = () => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Sizning Karzinkangiz</h1>
      {cart.length === 0 ? (
        <p>Karzinka bo'sh</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 p-4 border rounded"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-green-600 font-bold">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 font-semibold hover:underline"
              >
                O'chirish
              </button>
            </div>
          ))}
          <div className="text-right mt-6 font-bold text-xl">
            Umumiy narx:{" "}
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Korzinka;
