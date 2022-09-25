import React from 'react'

function Card(prop) {
  return (
   <>
     <div className='m-2 flex flex-col justify-center items-center'>
         <div className='h-64 w-52 bg-center bg-cover bg-no-repeat rounded-md bg-tile'/>
         <h1 className='flex justify-center items-center mt-2 '>Gift Cards</h1>
         <p className='flex justify-center text-xs font-semibold'>$ 200.00 USD</p>
         <button className=' navColor rounded-md w-fit px-3 py-2 text-white text-sm font-medium hover:bg-black hover:duration-500 m-2'>Details</button>
     </div>
   </>
  )
}

export default Card