import React from "react";
import Blog1 from "../assets/img/blog1.png";
import Blog2 from "../assets/img/blog2.png";
import Blog3 from "../assets/img/blog3.png";
import Blog4 from "../assets/img/blog4.png";
import { Button } from "antd";
const Blogs = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col justify-center items-center text-3xl font-semibold text-gray-500">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[#000] font-[700] text-[30px] leading-[16px] tracking-[0] text-center ">
          Our Blog Posts
        </h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="flex justify-center gap-4 items-center mt-10">
        <div
          className="w-[268px] bg-white rounded-xl overflow-hidden shadow-md 
                  hover:shadow-xl transition duration-300 
                  hover:-translate-y-1 cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={Blog1}
              alt=""
              className="w-full h-[180px] object-cover 
                   hover:scale-110 transition duration-500"
            />
          </div>

          <div className="flex flex-col items-start p-4 gap-2">
            <h2
              className="font-[700] text-[20px] leading-[26px] tracking-[0] text-[#000]
                     hover:text-green-600 transition"
            >
              Cactus & Succulent Care Tips
            </h2>

            <p className="font-[400] text-[14px] leading-[22px] tracking-[0] text-[#666666]">
              Cacti are succulents are easy care plants for any home or patio.
            </p>

            <Button
              type="primary"
              className="bg-green-600 mt-2 hover:!bg-green-700 transition"
            >
              Read More
            </Button>
          </div>
        </div>
        <div
          className="w-[268px] bg-white rounded-xl overflow-hidden shadow-md 
                  hover:shadow-xl transition duration-300 
                  hover:-translate-y-1 cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={Blog2}
              alt=""
              className="w-full h-[180px] object-cover 
                   hover:scale-110 transition duration-500"
            />
          </div>

          <div className="flex flex-col items-start p-4 gap-2">
            <h2
              className="font-[700] text-[20px] leading-[26px] tracking-[0] text-[#000]
                     hover:text-green-600 transition"
            >
              Cactus & Succulent Care Tips
            </h2>

            <p className="font-[400] text-[14px] leading-[22px] tracking-[0] text-[#666666]">
              Cacti are succulents are easy care plants for any home or patio.
            </p>

            <Button
              type="primary"
              className="bg-green-600 mt-2 hover:!bg-green-700 transition"
            >
              Read More
            </Button>
          </div>
        </div>
        <div
          className="w-[268px] bg-white rounded-xl overflow-hidden shadow-md 
                  hover:shadow-xl transition duration-300 
                  hover:-translate-y-1 cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={Blog3}
              alt=""
              className="w-full h-[180px] object-cover 
                   hover:scale-110 transition duration-500"
            />
          </div>

          <div className="flex flex-col items-start p-4 gap-2">
            <h2
              className="font-[700] text-[20px] leading-[26px] tracking-[0] text-[#000]
                     hover:text-green-600 transition"
            >
              Cactus & Succulent Care Tips
            </h2>

            <p className="font-[400] text-[14px] leading-[22px] tracking-[0] text-[#666666]">
              Cacti are succulents are easy care plants for any home or patio.
            </p>

            <Button
              type="primary"
              className="bg-green-600 mt-2 hover:!bg-green-700 transition"
            >
              Read More
            </Button>
          </div>
        </div>
        <div
          className="w-[268px] bg-white rounded-xl overflow-hidden shadow-md 
                  hover:shadow-xl transition duration-300 
                  hover:-translate-y-1 cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={Blog4}
              alt=""
              className="w-full h-[180px] object-cover 
                   hover:scale-110 transition duration-500"
            />
          </div>

          <div className="flex flex-col items-start p-4 gap-2">
            <h2
              className="font-[700] text-[20px] leading-[26px] tracking-[0] text-[#000]
                     hover:text-green-600 transition"
            >
              Cactus & Succulent Care Tips
            </h2>

            <p className="font-[400] text-[14px] leading-[22px] tracking-[0] text-[#666666]">
              Cacti are succulents are easy care plants for any home or patio.
            </p>

            <Button
              type="primary"
              className="bg-green-600 mt-2 hover:!bg-green-700 transition"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
