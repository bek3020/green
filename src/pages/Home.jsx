import React from "react";
import Banner from "../assets/img/Banner.png";
import Banner2 from "../assets/img/banner2.png";
import { Button } from "antd";
import Cart from "./Cart";
import Blogs from "./Blogs";
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="home-page flex justify-center items-center">
        <div className="flex flex-col items-start w-1/2 p-8">
          <p className="font-medium text-[14px] leading-[16px] tracking-[0.1em] uppercase text-[#3D3D3D]  mb-4">
            Welcome to GreenShop
          </p>
          <h1 className="text-[70px] font-bold mb-6 leading-tight">
            Let’s Make a Better <i className="text-green-500">Planet</i>
          </h1>
          <p className="text-[16px] leading-[24px] text-[#3D3D3D] mb-8">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <Button
            type="primary"
            className="bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600"
          >
            SHOP NOW
          </Button>
        </div>
        <div className=" w-1/2 flex jaustify-center items-end">
          <img
            className="w-[135px] h-[135px] top-[388px]  mb-[40px] mr-[-150px] z-10"
            src={Banner2}
            alt=""
          />
          <img src={Banner} alt="" />
        </div>
      </div>
      <Cart />
      <Blogs />
    </div>
  );
};

export default Home;
