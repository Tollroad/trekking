import React from "react";
import About_card from "./About_card";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="w-full h-fit bg-aboutmain">
        <div className="md:w-[900px] h-full flex  flex-col items-start text-left justify-center mx-auto">
          <h1 className="md:text-5xl text-3xl md:px-0 px-4 font-bold text-white md:mb-4 mb-1">
            Your Adventure
          </h1>
          <h1 className="md:text-5xl text-3xl md:px-0 px-4 font-bold text-white">Awaits</h1>
          <p className="text-white mt-2 md:leading-6 leading-2 md:px-0 px-4 md:text-base text-xs">
            Acme Outdoors has everything you need to help <br /> you get started
            today. Check out our wonderful <br /> collection of gear that will
            make your next <br /> adventure complete.
          </p>
          <button
            className=" mx-4 md:mx-0 px-4 py-1 rounded-md text-sm border-[1px] border-slate-200 text-white mt-6 hover:bg-white hover:text-black
          hover:duration-300 font-semibold "
          >
            Shop merch
          </button>
        </div>
      </div>
      <div className="w-full h-fit text-[#222]">
        <div className="md:w-[900px] mx-auto h-fit flex justify-between flex-col items-center">
          <div className=" h-20 ml-8 mt-8 w-fit ">
            <p className="py-2 text-xs text-center">WHY ACME OUTDOORS?</p>
            <h1 className="text-3xl font-bold w-fit text-center">
              We’re the best in the business.
            </h1>
          </div>
          <div className="w-fit h-fit text-xs text-center md:pt-0 pt-6">
            <p className="leading-5">
              From more than 30 years, we’ve been leading the way across
              Oklahoma — creating the best possible customer experience since
              1989.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit my-6 text-[#222]">
        <div className="md:w-[900px] h-fit flex md:flex-row flex-col mx-auto ">
          <About_card />
          <About_card />
          <About_card />
          <About_card />
        </div>
      </div>
      <div className="w-full h-fit md:mt-24 text-white">
        <div className="md:w-[900px] h-fit mx-auto md:flex md:flex-row flex flex-col items-center">
          <div className=" bg-Aboutlogo md:w-96 md:h-80 w-64 h-44 md:relative md:my-auto md:left-9 md:rounded-l-lg rounded-lg"></div>
          <div className=" h-96 w-full rounded-lg md:bg-[#222] flex flex-col justify-center items-center md:py-0 md:text-white text-[#eb5757]">
            <h1 className="text-4xl m-2 font-bold">Meet the Owners.</h1>
            <p className="w-72 text-xs font-medium py-2 md:text-left text-center">
              We know that during COVID-19, a lot of folks around the city and
              state are feeling uneasy about the future - we’re not sure what
              the future holds either.
            </p>
            <p className="w-72 text-xs font-medium py-2 md:text-left text-center">
              That said: we know that we love making sure you have the gear you
              need for your adventures, and we’re going to keep doing that -
              with our team - until the city tells us we can’t.
            </p>
            <p className="w-72 text-xs font-medium py-2 md:text-left text-center">
              But as long as folks like yourself support small businesses around
              the city, then we’ll be here — every day, making sure your orders
              arrive on time.
            </p>
            <h1 className="text-left">-----</h1>
            <p className="text-xs font-semibold">Jane & John Doe</p>
            <h1 className="font-bold">Acme Outdoors</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-AboutEnd mt-6">
        <div className="md:w-[900px] h-full flex  flex-col items-start text-left justify-center mx-auto">
          <h1 className="md:text-5xl text-3xl md:px-0 px-4 font-bold text-white md:mb-4">Serving you</h1>
          <h1 className="md:text-5xl text-2xl md:px-0 px-4 font-bold text-white">since 1989</h1>
          <p className="text-white md:text-xl text-xs md:px-0 px-4 font-medium md:mt-2  leading-6">
            Acme Outdoors is an outdoor and adventure <br /> shop located in the
            Boathouse District in <br />
            Oklahoma City.
          </p>
          <button
            className="md:mx-0 mx-4 px-4 py-1 rounded-md text-sm border-[1px] border-slate-200 text-white mt-6 hover:bg-white hover:text-black
          hover:duration-300 font-semibold "
          >
            Shop merch
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
