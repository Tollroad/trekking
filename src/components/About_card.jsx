import React from "react";
import IMageV from "../images/AboutCard.svg";

function About_card() {
  return (
    <>
    
      <div className="flex flex-col md:w-64 md:mx-2 w-96 items-center text-center">
          <img src={IMageV} alt="" className="w-10 h-10 mb-2" />
          <h1 className="py-2 font-bold">Lifetime Warranty</h1>
          <p className="text-xs md:py-0 py-2 md:px-0 px-16">
            All our products — whether we make them or not — are backed by our
            lifetime warranty.
          </p>
        </div>
    </>
  );
}

export default About_card;
