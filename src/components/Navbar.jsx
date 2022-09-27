import { useState } from "react";
import { Link } from "react-router-dom";
// import React from "react";
import logo from "../images/Logo.svg";
// import Cart from "../images/cart.svg";
// import { Link } from "react-router-dom";
// // import Sidebar from "./Sidebar";

// function Navbar() {
//   return (
<>
  {/* <div className="navColor flex justify-between items-center md:justify-between sticky z-50 top-0 md:w-full w-[100%]">
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
      </div>  */}
</>;
//   );
// }

// export default Navbar;

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full navColor shadow">
      <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <img src={logo} alt="" className=" cursor-pointer" />
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-y-0">
              <Link
                to="/"
                className="items-center block px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="block px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="/Shop1"
                className="block px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer"
              >
                Shop
              </Link>
              <Link
                to="/Donate"
                className="block px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer"
              >
                Donate
              </Link>
              <Link
                to="/Contact"
                className="block px-6 text-white text-sm hover:bg-black hover:text-white border-0 py-1 hover:rounded-lg hover:duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
