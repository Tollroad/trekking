import React from 'react'
import Footer from './Footer';

function Donate() {
  return (
    <>
     <div className="w-full h-fit bg-Donate text-white">
        <div className="md:w-[900px] h-full flex  flex-col items-center text-center justify-center mx-auto">
             <h1 className='text-4xl font-bold py-2'>Here at Acme Outdoors</h1>
             <p className='text-2xl pb-2'>every dollar counts</p>
             <p className='text-xs w-8/12'>Acme Outdoors is more than just a company, we're a community of people who care for one <br /> another and for our city. During this time, due to shelter in place orders, only a select few of our <br /> staff are able to work. Any donations you make to Acme will help make sure our employees are <br /> cared for and can stay safe in these uncertain times.</p>
        </div>
      </div>
      <div className='w-full h-fit mt-6 mb-6'>
          <div className='md:w-[450px] h-fit flex justify-center items-center mx-auto md:border-black border-none border-2 flex-col text-center p-2 rounded-lg'>
                <div className='hover:bg-black hover:text-white cursor-pointer hover:duration-300 rounded-lg text-white border-red-600 md:w-96 w-64 p-2 md:mx-0 text-2xl font-bold my-3 bg-[#eb5757]'>
                    <h1>Donate 5$</h1>
                </div>
                <div className='hover:bg-black hover:text-white cursor-pointer hover:duration-300 rounded-lg text-white border-red-600 w-64 md:w-96 p-2 text-2xl font-bold my-3 bg-[#eb5757]'>
                    <h1>Donate 10$</h1>
                </div>
                <div className='hover:bg-black hover:text-white cursor-pointer hover:duration-300 rounded-lg text-white border-red-600 w-64 md:w-96 p-2 text-2xl font-bold my-3 bg-[#eb5757]'>
                    <h1>Donate 15$</h1>
                </div>
                <div className='hover:bg-black hover:text-white cursor-pointer hover:duration-300 rounded-lg text-white border-red-600 w-64 md:w-96 p-2 text-2xl font-bold my-3 bg-[#eb5757]'>
                    <h1>Donate 20$</h1>
                </div>
                <div className='hover:bg-black hover:text-white cursor-pointer hover:duration-300 rounded-lg text-white border-red-600 w-64 md:w-96 p-2 text-2xl font-bold my-3 bg-[#eb5757]'>
                    <h1>Donate 25$</h1>
                </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Donate;