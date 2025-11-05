import React, { useState } from 'react'
import Container from '../components/Layout/Container'
import ProductLeftPart from '../components/ProductPage/ProductLeftPart'
import ProductRightPart from '../components/ProductPage/ProductRightPart'

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("all") // default to "all"

  return (
    <div className='pt-[80px] pb-[104px]'>
      <Container>
        <div className='flex'>
          <ProductLeftPart
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductRightPart
            selectedCategory={selectedCategory}
          />
        </div>
      </Container>
    </div>
  )
}

export default Product
