import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useSelector } from "react-redux";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  const cartItemsCount = useSelector((state) =>
    state.product.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div className="navbar flex justify-between items-center px-6 h-16 shadow-md">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="nav flex items-center gap-8">
        <NavLink to="/" className="text-gray-700 hover:text-green-500">
          Home
        </NavLink>
        <NavLink to="/shop" className="text-gray-700 hover:text-green-500">
          Shop
        </NavLink>
        <NavLink to="#" className="text-gray-700 hover:text-green-500">
          Plant Care
        </NavLink>
        <NavLink to="/blog" className="text-gray-700 hover:text-green-500">
          Blogs
        </NavLink>
      </nav>
      <div className="buttons flex items-center gap-4">
        <IoIosSearch className="cart-icon" size={20} />
        <NavLink to="/korzinka" className="cart-btn relative">
          <FaShoppingCart className="cart-icon" size={20} />
          <span className="cart-badge absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-1 text-xs">
            {cartItemsCount}
          </span>
        </NavLink>
        <Button
          type="primary"
          icon={<LoginOutlined />}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 border-none rounded-full px-6 h-9 text-sm font-medium"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
