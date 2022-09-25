import React from "react";
import logo from "../images/Logo.svg";
import Cart from "../images/cart.svg";
import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <>
      <div className="navColor flex justify-between items-center md:justify-between sticky z-50 top-0 md:w-full w-[100%]">
        <img src={logo} alt="" className="p-4 cursor-pointer" />
        <ul className="md:flex p-4 justify-end items-center hidden">
          <Link to="/" className="px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer">Home</Link>
          <Link to="/About" className="px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer">About</Link>
          <Link to="/Shop1"  className="px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer">Shop</Link>
          <Link to="/Donate" className="px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer">Donate</Link>
          <Link to="/Contact" className="px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer">Contact</Link>
          <div className="bg-[#222] px-2 rounded-lg w-12 flex justify-center"> 
          <div className="mx-1">
            <img src={Cart} alt="" className="w-[20px] h-7"/>
          </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
