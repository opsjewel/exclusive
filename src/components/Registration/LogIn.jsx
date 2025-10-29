import React from 'react'
import signupimg from '../../assets/signupimg.png'

const LogIn = () => {
  return (
    <div className='flex pt-[60px] pb-[140px]'>
      <div className=''>
        <img src={signupimg} alt="" />
      </div>
      <div className='mt-[125px] ml-[129px]'>
        <h3 className='font-secondary fonr-medium text-[36px]'>Log in to Exclusive</h3>
        <p className='font-secondary mt-6'>Enter your details below</p>
        <div className='mt-[48px]'>
          <div>
          <div className='mt-[40px]'>
            <input className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type="email" placeholder='Email or Phone Number' />
          </div>
          <div className='mt-[40px]'>
            <input className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type="password" placeholder='Password' />
          </div>
        </div>
        <div className='flex justify-between items-center mt-[40px]'>
          <button className='py-4 px-[48px] bg-primary text-white rounded-[4px]'>Log In</button>
          <p className='font-primary text-primary'>Forget Password?</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LogIn
