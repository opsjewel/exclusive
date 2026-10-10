import React from 'react'
import Container from '../Layout/Container'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
  return (
    <div className='pt-10'>
    <Container>
     <div className='flex flex-col gap-5 md:flex-row md:gap-6'>
       <BannerLeft/>
      <BannerRight/>
     </div>
    </Container>
    </div>
  )
}

export default Banner
