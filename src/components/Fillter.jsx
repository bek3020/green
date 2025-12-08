// components/Filter.jsx

import React from "react";

const Fillter = () => {
  // 1. Statik Kategoriya Ma'lumotlari (Rasmdagi kabi)
  const categories = [
    { name: "House Plants", count: 33, active: true },
    { name: "Potter Plants", count: 12, active: false },
    { name: "Seeds", count: 65, active: false },
    { name: "Small Plants", count: 39, active: false },
    { name: "Big Plants", count: 23, active: false },
    { name: "Succulents", count: 17, active: false },
    { name: "Terrariums", count: 19, active: false },
    { name: "Gardening", count: 13, active: false },
    { name: "Accessories", count: 18, active: false },
  ];

  // 2. Statik O'lcham Ma'lumotlari (Rasmdagi kabi)
  const sizes = [
    { name: "Small", count: 119 },
    { name: "Medium", count: 86 },
    { name: "Large", count: 78 },
  ];

  return (
    // Sidebar uchun asosiy konteyner
    <div className="w-full p-6 bg-white rounded-xl shadow-md sticky top-4">
      {/* KATEGORIYALAR BO'LIMI */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Categories</h3>
      <ul className="space-y-2 mb-6">
        {categories.map((cat) => (
          <li
            key={cat.name}
            className={`flex justify-between text-sm cursor-pointer hover:text-green-600 ${
              cat.active ? "text-green-600 font-medium" : "text-gray-600" // Faol kategoriyani yashil rangda ko'rsatish
            }`}
          >
            <span>{cat.name}</span>
            <span className="text-gray-500">({cat.count})</span>
          </li>
        ))}
      </ul>

      <hr className="mb-6" />

      {/* NARX ORALIG'I BO'LIMI */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
      <div className="mb-4">
        {/* Narx oralig'i slayderining vizual ko'rinishi */}
        <div className="h-1 bg-gray-200 rounded-full relative">
          <div
            className="h-1 bg-green-600 rounded-full absolute"
            style={{ left: "5%", right: "10%" }}
          ></div>
          {/* Slider tugmalari uchun joy */}
          <div className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 bg-green-600 rounded-full"></div>
          <div
            className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 bg-green-600 rounded-full"
            style={{ right: "10%" }}
          ></div>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Price: <span className="font-semibold text-green-600">$39 – $1230</span>
      </p>

      {/* Filter tugmasi */}
      <button className="w-full py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 duration-200">
        Filter
      </button>

      <hr className="my-6" />

      {/* O'LCHAMLAR BO'LIMI */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Size</h3>
      <ul className="space-y-2">
        {sizes.map((size) => (
          <li
            key={size.name}
            className="flex justify-between text-sm text-gray-600 cursor-pointer hover:text-green-600"
          >
            <span>{size.name}</span>
            <span className="text-gray-500">({size.count})</span>
          </li>
        ))}
      </ul>

      <hr className="my-6" />

      {/* SUPER SALE Banneri (Rasmdagi eng pastki qism) */}
      <div className="bg-green-100 p-4 rounded-xl border-2 border-green-300 text-center">
        <h2 className="text-xl font-extrabold text-green-700">SUPER SALE</h2>
        <p className="text-base font-semibold text-green-600">UP TO 75% OFF</p>
        {/*  */}
      </div>
    </div>
  );
};

export default Fillter;
