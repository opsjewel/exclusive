import React from 'react'
import Container from '../Layout/Container'
import aboutstory from '../../assets/aboutstory.png'
const AboutStory = () => {
  return (
    <div className='mt-[143px]'>
<div className=''>
        <Container>
        <div className=''>
      <h1 className='font-semibold font-secondary text-[54px]  '>Our Story</h1>
      <p className='w-[525px] font-primary leading-[26px] mt-[40px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
      <p className='w-[505px] font-primary leading-[26px] mt-4'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>
      </Container>
</div>
      <div className='flex justify-end'>
        <img src={aboutstory} alt="" />
      </div>
    </div>
  )
}

export default AboutStory
