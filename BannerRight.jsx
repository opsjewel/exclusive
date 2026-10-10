import React from 'react'
import banner from '../../assets/banner.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const BannerRight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: false,
  }

  return (
    <div className="w-full min-w-0 md:ml-0 md:flex-1">
      <Slider {...settings}>
        {[1, 2, 3].map((item) => (
          <div key={item} className="outline-none">
            <div className="overflow-hidden rounded-md">
              <img
                src={banner}
                alt={`Exclusive promotional banner ${item}`}
                className="block h-[180px] w-full object-cover object-center sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerRight

