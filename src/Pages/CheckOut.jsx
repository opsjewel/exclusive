import React from 'react'
import Container from '../components/Layout/Container'

const CheckOut = () => {
  return (
    <div className='pt-[80px] pb-[140px]'>
      <Container>
        <div className='flex items-center'>
          <div className='w-1/2'>
            <div className='mt-[48px]'>
              <h3 className='font-secondary font-medium text-[36px]'>Billing Details</h3>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>First Name*</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>Company Name</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>Street Address*</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>Apartment, floor, etc. (optional)</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>Town/City*</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>Phone Number*</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>Email Address*</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
              <p className='font-primary text-base text-[#999999]'>First Name*</p>
              <div className='mt-2'>
                <input
                type="text"
                className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[440px]'
              />
              </div>
            </div>
                       <div className='flex items-center gap-x-4 mt-6'>
            <input type="checkbox"/>
             <p className='font-primary'>Save this information for faster check-out next time</p>
           </div>
            </div>

          </div>
          <div className='w-1/2'>sds</div>
        </div>
      </Container >
    </div >
  )
}

export default CheckOut
