import React from "react";
// import Home2 from "../images/Home2.jpg";
import Card from "./Card";
import Tile1 from '../images/Tile1.jpg'
import Tile2 from '../images/Tile2.jpg'
import Tile3 from '../images/Tile3.jpg'
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <h1 className="bg-[#222] text-white p-8 text-4xl font-bold">
          Shop Our Products
        </h1>
      </div>
      <div className=" flex justify-center p-4" data-aos="fade-up">
        <div className=" bg-shop w-full h-[250px] md:w-[900px] rounded-md " />
        <div className="absolute top-[194px] md:right-[70px] right-[30px]">
          <button className=" text-black text-sm bg-white rounded-md px-4 py-1 ">
            Features Items
          </button>
        </div>
        <div className="absolute md:top-[370px] md:left-[80px] top-[380px] left-[30px] text-white">
          <h1 className="text-xl font-medium py-[2px]">White Tent</h1>
          <p className="text-xs">$ 200.00 USD</p>
        </div>
      </div>
      {/* <br /> */}
      {/* <br /> */}
      <div className=" md:mx-auto md:flex-row flex flex-col justify-evenly md:w-[900px] md:items-start items-center w-full" data-aos="flip-left">
         <div className="flex flex-col">
             <h1 className="pb-2 font-medium text-md">Shop By Category</h1>
             <button className="border-[1px] m-1 px-6 text-xs font-medium border-black  rounded-md py-1 hover:bg-black hover:text-white hover:duration-300 w-48 text-left">Gift Cards</button>
             <button className="border-[1px] m-1 px-6 text-xs font-medium border-black  rounded-md py-1 hover:bg-black hover:text-white hover:duration-300 w-48 text-left ">Tents</button>
             <button className="border-[1px] m-1 px-6 text-xs font-medium border-black  rounded-md py-1 hover:bg-black hover:text-white hover:duration-300 w-48 text-left ">Accessories</button>
             <button className="border-[1px] m-1 px-6 text-xs font-medium border-black  rounded-md py-1 hover:bg-black hover:text-white hover:duration-300 w-48 text-left ">Packs</button>
         </div>
         <div className="flex md:w-[900px] flex-wrap justify-evenly">
             <Card image={Tile1}/>
             <Card image={Tile2}/>
             <Card image={Tile3}/>
             <Card image={Tile3}/>
         </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
