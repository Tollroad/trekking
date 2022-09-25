import React from 'react'

function TileHome(props) {
  return (
   <>
    <div className="md:w-fit md:h-fit mx-2">
              <div className="rounded-md text-white border-2 bg-[#222] md:w-full md:h-64">
                <h1 className="m-4 font-bold text-2xl">{props.serial}</h1>
                <p className="flex text-center justify-center items-center md:text-5xl text-3xl md:p-0 pb-8 font-semibold">
                  Shop
                  <br /> Products
                </p>
              </div>
              <h1 className="text-left text-xs p-8 md:font-normal font-bold">
                Our full product line is still available online here on our
                site! Getting outside and hiking is still something you can do.
                Get your gear now!
              </h1>
            </div>
   </>
  )
}

export default TileHome