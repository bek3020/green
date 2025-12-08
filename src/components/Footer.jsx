import React from "react";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import garden from "../assets/img/footer_card1.png";
import plant from "../assets/img/footer_card2.png";

const Footer = () => {
  return (
    <footer className="bg-[#f1f8f4] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        <div>
          <img src={garden} className="w-12 mx-auto lg:mx-0 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Garden Care</h3>
          <p className="text-gray-500 text-sm">
            We are online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        <div>
          <img src={plant} className="w-12 mx-auto lg:mx-0 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Plant Renovation</h3>
          <p className="text-gray-500 text-sm">
            We are online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        <div>
          <img src={plant} className="w-12 mx-auto lg:mx-0 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Watering Garden</h3>
          <p className="text-gray-500 text-sm">
            We are online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Would you like to join newsletters?
          </h3>
          <div className="flex">
            <Input placeholder="enter your email address..." />
            <Button type="primary" className="ml-2 bg-green-600">
              Join
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            We usually post offers and challenges in newsletter.
          </p>
        </div>
      </div>

      <div className="border-t bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <h2 className="font-bold text-green-600 text-xl">GREENSHOP</h2>
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          <p>contact@greenshop.com</p>
          <p>+88 01911 717 490</p>
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold mb-3">My Account</h4>
            <ul className="space-y-1 text-gray-500">
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Help & Guide</h4>
            <ul className="space-y-1 text-gray-500">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-1 text-gray-500">
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Social Media</h4>
            <div className="flex gap-3 text-xl text-green-600">
              <FacebookOutlined />
              <InstagramOutlined />
              <TwitterOutlined />
              <LinkedinOutlined />
            </div>

            <h4 className="font-semibold mt-6 mb-2">We accept</h4>
            <div className="flex gap-3 text-gray-500">
              <span>PayPal</span>
              <span>Visa</span>
              <span>Mastercard</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4 text-sm">
        © 2025 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
