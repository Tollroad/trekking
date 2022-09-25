import Logo from '../images/Logo.svg'
import Twitter from '../images/Twitter.svg'
import React from 'react'
import Facebook from '../images/Facebook.svg'
import Ig from '../images/Ig.svg'

function Footer() {
  return (
    <>
    <div className='bg-[#222] w-full h-36'>
        <div className='w-[100%] h-36 flex justify-around items-center'>
        <img src={Logo} alt="" />
        <a href="https://twitter.com"><img src={Twitter} alt="" className='w-10 h-10]'/></a>
        <a href="https://facebook.com"><img src={Facebook} alt="" className='w-10 h-10]'/></a>
        <a href="https://instagram.com"><img src={Ig} alt="" className='w-10 h-10]'/></a>
        </div>
    </div>
    </>
  )
}

export default Footer