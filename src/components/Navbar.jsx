import { Button } from "antd";
import React from "react";
import Logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center px-6 h-16 shadow-md  ">
      <div className="logo ">
        <img src={Logo} alt="" />
      </div>
      <nav className="nav flex items-center gap-8">
        <NavLink to="/" className="text-gray-700 hover:text-green-500">
          Home
        </NavLink>
        <NavLink to="#" className="text-gray-700 hover:text-green-500">
          Shop
        </NavLink>
        <NavLink to="#" className="text-gray-700 hover:text-green-500">
          Plant Care
        </NavLink>
        <NavLink to="#" className="text-gray-700 hover:text-green-500">
          Blogs
        </NavLink>
      </nav>
      <div className="buttons flex items-center gap-4">
        <div className="cart-btn">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-badge">0</span>
        </div>
        <Button
          type="primary"
          icon={<LoginOutlined />}
          className="
    flex items-center gap-2 
    bg-green-500 hover:bg-green-600 
    border-none 
    rounded-full 
    px-6 
    h-9 
    text-sm 
    font-medium
  "
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
