import React from 'react'
import aboutstory from '../../assets/aboutstory.png'
import Container from '../Layout/Container'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import tom from '../../assets/tom.png'
import emma from '../../assets/emma.png'
import smith from '../../assets/smith.png'
import { CiTwitter } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

const AboutDetails = () => {
  return (
    <div>
    <Container>
      <div className='flex justify-end pt-[143px] pb-[140px]'>
      <div className='w-[525px] mr-[75px] mt-[137px]'>
        <h1 className='font-semibold font-secondary text-[54px]  '>Our Story</h1>
        <p className='w-[525px] font-primary leading-[26px] mt-[40px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p className='w-[505px] font-primary leading-[26px] mt-4'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <div>
        <img src={aboutstory} alt="" />
      </div>
    </div>
              <div className='flex justify-center items-center gap-x-[30px] mb-[140px]'>
          <div className='w-[270px] flex flex-col border border-black/30 rounded-4 py-[30px] px-[51px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service1} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] text-center mt-6'>10.5k</h3>
            <p className='font-primary text-[14px] mt-3'>Sallers active our site</p>
          </div>
          <div className='w-[270px] flex flex-col border border-black/30 rounded-4 py-[30px] px-[51px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service1} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] text-center mt-6'>10.5k</h3>
            <p className='font-primary text-[14px] mt-3'>Sallers active our site</p>
          </div>
          <div className='w-[270px] flex flex-col border border-black/30 rounded-4 py-[30px] px-[51px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service1} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] text-center mt-6'>10.5k</h3>
            <p className='font-primary text-[14px] mt-3'>Sallers active our site</p>
          </div>
          <div className='w-[270px] flex flex-col border border-black/30 rounded-4 py-[30px] px-[51px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service1} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] text-center mt-6'>10.5k</h3>
            <p className='font-primary text-[14px] mt-3'>Sallers active our site</p>
          </div>
        </div>
        <div className='pb-[196px] flex justify-between items-center'>
        <div>
          <div className='w-[370px] pt-[39px] px-[67px] bg-[#F5F5F5]'>
            <img src={tom} alt="" />
          </div>
          <div className='mt-[32px]'>
            <h3 className='font-secondary font-medium text-[32px]'>Tom Cruise</h3>
            <p className='font-primary mt-2'>Founder & Chairman</p>
            <div className='flex gap-x-4 mt-4'>
              <CiTwitter size={18}/>
              <FiInstagram size={18}/>
              <RiLinkedinLine size={18}/>
            </div>
          </div>
        </div>
        <div>
          <div className='w-[370px] pt-[39px] px-[38px] bg-[#F5F5F5]'>
            <img src={emma} alt="" />
          </div>
          <div className='mt-[32px]'>
            <h3 className='font-secondary font-medium text-[32px]'>Emma Watson</h3>
            <p className='font-primary mt-2'>Managing Director</p>
            <div className='flex gap-x-4 mt-4'>
              <CiTwitter size={18}/>
              <FiInstagram size={18}/>
              <RiLinkedinLine size={18}/>
            </div>
          </div>
        </div>
        <div>
          <div className='w-[370px] pt-[39px] px-[22px] bg-[#F5F5F5]'>
            <img src={smith} alt="" />
          </div>
          <div className='mt-[32px]'>
            <h3 className='font-secondary font-medium text-[32px]'>Will Smith</h3>
            <p className='font-primary mt-2'>Product Designer</p>
            <div className='flex gap-x-4 mt-4'>
              <CiTwitter size={18}/>
              <FiInstagram size={18}/>
              <RiLinkedinLine size={18}/>
            </div>
          </div>
        </div>
        </div>
                  <div className='flex justify-center items-center gap-x-[88px] pb-[140px]'>
                    <div className='flex flex-col w-[249px]'>
                      <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
                        <img className='h-[40px] p-[9px]' src={service1} alt="" />
                      </div>
                      <h3 className='font-primary font-semibold text-[20px] mt-6'>FREE AND FAST DELIVERY</h3>
                      <p className='font-primary text-[14px] text-center mt-2'>Free delivery for all orders over $140</p>
                    </div>
                    <div className='flex flex-col w-[262px]'>
                      <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
                        <img className='h-[40px] p-[9px]' src={service2} alt="" />
                      </div>
                      <h3 className='font-primary font-semibold text-[20px] mt-6'>24/7 CUSTOMER SERVICE</h3>
                      <p className='font-primary text-[14px] text-center mt-2'>Friendly 24/7 customer support</p>
                    </div>
                    <div className='flex flex-col w-[270px]'>
                      <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
                        <img className='h-[40px] p-[9px]' src={service3} alt="" />
                      </div>
                      <h3 className='font-secondary font-medium text-[20px] mt-6'>MONEY BACK GUARANTEE</h3>
                      <p className='font-primary text-[14px] text-center mt-2'>We reurn money within 30 days</p>
                    </div>
                  </div>
    </Container>
    </div>

  )
}

export default AboutDetails
