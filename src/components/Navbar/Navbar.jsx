import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='pt-[42px] pb-4 border-b border-w-full border-b-black/30'>
     <Container>
    <div className='flex items-center'>
      <div className='w-[20%]'>
        <img src={logo} alt="" />
      </div>
      <div className='w-[45%]'>
        <ul className='flex items-center gap-x-[48px]'>
          <li className='font-primary'><Link to="/">Home</Link></li>
          <li className='font-primary'><Link to="/product">Product</Link></li>
          <li className='font-primary'><Link to="/contact">Contact</Link></li>
          <li className='font-primary'><Link to="/about">About</Link></li>
          <li className='font-primary'><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
      <div className='w-[35%] '>
<div className='flex justify-end items-center gap-x-6'>
          <div className='w-[273px] bg-[#F5F5F5] rounded relative'>
          <input className='w-full outline-0  py-[10px] pl-[20px] pr-[45px] placeholder:font-primary placeholder:text-[12px] placeholder:text-black/50' type="text" placeholder='What are you looking for?' />
          <CiSearch className='absolute top-[10px] right-[14px]' size={24}/>
        </div>
        <div className='flex gap-x-4'>
          <CiHeart size={24}/>
         <Link to="/cart">
          <FaOpencart size={24}/>
         </Link>
          <GoPerson size={24}/>
        </div>
</div>
      </div>
    </div>
    </Container> 
    </div>
  )
}

export default Navbar
