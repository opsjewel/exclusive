import React from 'react'
import Container from '../components/Layout/Container'
import phone from "../assets/phone.png"
import inbox from "../assets/inbox.png"

const Contact = () => {
  return (
    <div className='pt-[181px] pb-[140px]'>
      <Container>
        <div className='flex'>
          <div className='w-[40%]'>
            <div className='w-[340px] pb-[51px] px-[35px] shadow-[0_35px_35px_rgba(0,0,0,0.05)]'>
            <div className='mb-[32px] '>
              <div className='flex items-center'>
                <div className='w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center text-white'>
                  <img src={phone} alt="" />
                </div>
                <h3 className='font-primary font-medium ml-4'>Call To Us</h3>
              </div>
              <h3 className='font-primary text-[14px] mt-6'>We are available 24/7, 7 days a week.</h3>
              <p className='font-primary text-[14px] mt-4'>Phone: +8801611112222</p>
            </div>
            <div className='border-t-2 border-black/30'></div>
            <div className=' mt-[32px]'>
              <div className='flex items-center'>
                <div className='w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center text-white'>
                  <img src={inbox} alt="" />
                </div>
                <h3 className='font-primary font-medium ml-4'>Write To US</h3>
              </div>
              <h3 className='font-primary text-[14px] leading-[21px] mt-6'>Fill out our form and we will contact you within 24 hours.</h3>
              <p className='font-primary text-[14px] mt-4'>Emails: customer@exclusive.com</p>
              <p className='font-primary text-[14px] mt-4'>Emails: support@exclusive.com</p>
            </div>
          </div>
          </div>
          <div className='w-[60%] shadow-[0_35px_35px_rgba(0,0,0,0.05)]'>
            <div className=''>
              <div className='flex gap-x-4'>
                <input className='w-[235px] bg-[#F5F5F5] pl-4 py-2 focus:outline-0' type="text" placeholder='Your Name *' />
                <input className='w-[235px] bg-[#F5F5F5] pl-4 py-2 focus:outline-0' type="email" placeholder='Your Email *' />
                <input className='w-[235px] bg-[#F5F5F5] pl-4 py-2 focus:outline-0' type="password" placeholder='Your Phone *' />
              </div>
              <div className='mt-[32px]'>
                <input className='w-[737px] bg-[#F5F5F5] pt-[13px] pl-6 pb-[170px] focus:outline-0' type="text" placeholder='Your Massage' />
              </div>
            </div>
            <div className='flex justify-end mt-[32px]'>
              <button className='py-4 px-[48px] bg-primary text-white rounded-[4px]'>Send Massage</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
