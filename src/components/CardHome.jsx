import React from 'react'

function CardHome() {
  return (
   <>
    <div className=' md:m-2 flex flex-col justify-center items-center text-[#222]'>
         <div className='h-96 w-72 bg-center bg-cover bg-no-repeat rounded-md bg-tile'/>
         <h1 className='flex justify-center items-center mt-2 '>Gift Cards</h1>
         <p className='flex justify-center text-xs font-semibold'>$ 200.00 USD</p>
         <button className=' navColor rounded-md w-fit px-3 py-2 text-white text-sm font-medium hover:bg-black hover:duration-500 m-2'>Details</button>
     </div>
   </>
  )
}

export default CardHome;