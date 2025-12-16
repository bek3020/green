import React, { useEffect, useState } from "react";
import axios from "axios";
import Fillter from "../components/Fillter";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice"; // to‘g‘ri yo‘l bilan

const Cart = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://69302203778bbf9e006ff787.mockapi.io/gul")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-10 bg-gray-50 min-h-screen flex space-x-8">
      <div className="w-1/4">
        <Fillter />
      </div>

      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[180px] object-contain mb-4"
              />

              <h3 className="text-[15px] font-medium text-gray-800 mb-1">
                {item.name}
              </h3>

              <p className="text-green-600 font-bold text-[16px]">
                ${item.price}
              </p>

              <button
                onClick={() => dispatch(addToCart(item))}
                className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Savatchaga qo'shish
              </button>
            </div>
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center mt-10 text-gray-500">
            Mahsulotlar topilmadi.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
