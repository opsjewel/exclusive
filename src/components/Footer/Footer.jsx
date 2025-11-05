import React from 'react'
import Container from '../Layout/Container'
import { LuSendHorizontal } from "react-icons/lu";
import footerlogo from '../../assets/footerlogo.png'
import qrcode from '../../assets/qrcode.png'
import playstore from '../../assets/playstore.png'
import apple from '../../assets/apple.png'
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import CopyRight from './CopyRight';

const Footer = () => {
  return (
    <div className='bg-black'>
      <Container>
        <div className='pt-[60px] pb-[80px]  flex justify-between text-white'>
          <div>
            <h3>
              <img src={footerlogo} alt="" />
            </h3>
            <h4 className='font-primary font-medium text-[20px] mt-6'>Subscribe</h4>
            <p className='font-primary mt-6'>Get 10% off your first order</p>
            <div className='relative flex w-[217px] mt-4'>
              <input className='w-full rounded  outline-0 py-3 pl-4 pr-11 border placeholder:font-primary placeholder:text-[#646464] ' placeholder='Enter your email' type="text" />
              <LuSendHorizontal size={20} className='absolute top-[15px] right-[14px]' />
            </div>
          </div>
          <div>
            <h3 className='font-primary font-medium text-[20px]'>Support</h3>
            <p className='w-[175px] leading-[24px] font-primary mt-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className='font-primary mt-4'>exclusive@gmail.com</p>
            <p className='font-primary mt-4'>+88015-88888-9999</p>
          </div>
          <div>
            <h3 className='font-primary font-medium text-[20px]'>Account</h3>
            <p className='font-primary mt-6'>My Account</p>
            <p className='font-primary mt-4'>Login / Register</p>
            <p className='font-primary mt-4'>Cart</p>
            <p className='font-primary mt-4'>Wishlist</p>
            <p className='font-primary mt-4'>Shop</p>
          </div>
          <div>
            <h3 className='font-primary font-medium text-[20px]'>Quick Link</h3>
            <h4 className='font-primary mt-6'>Privacy Policy</h4>
            <p className='font-primary mt-4'>Terms Of Use</p>
            <p className='font-primary mt-4'>Terms Of Use</p>
            <p className='font-primary mt-4'>FAQ</p>
            <p className='font-primary mt-4'>Contact</p>
          </div>
          <div>
            <h3 className='font-primary font-medium text-[20px]'>Download App</h3>
            <h4 className='font-primary font-medium text-[12px] mt-6'>Save $3 with App New User Only</h4>
            <div className='flex mt-4'>
              <div>
                <img src={qrcode} alt="" />
              </div>
              <div className='ml-2'>
                <div>
                  <img src={playstore} alt="" />
                </div>
                <div className='mt-3'>
                  <img src={apple} alt="" />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-6 mt-6'>
              <FaFacebookF size={24} />
              <LuTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
          </div>
        </div>
      </Container>
      <CopyRight />
    </div>
  )
}

export default Footer
