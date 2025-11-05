import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import ProductRating from './ProductRating';
import { Link } from 'react-router';

const ProductRightPart = ({ selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productData, setProductData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const productPerPage = 6;

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProductData(data.products))
  }, [])

  // Filter by category
  useEffect(() => {
    if (selectedCategory && selectedCategory !== "all") {
      setFilteredProducts(productData.filter(p => p.category === selectedCategory))
    } else {
      setFilteredProducts(productData)
    }
    setCurrentPage(1) // Reset page when category changes
  }, [selectedCategory, productData])

  // Search handler
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase()
    const filtered = productData.filter(p => p.title.toLowerCase().includes(keyword))
    setFilteredProducts(filtered)
    setCurrentPage(1)
  }

  const totalProducts = filteredProducts.length
  const totalPages = Math.ceil(totalProducts / productPerPage)
  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const ProductCard = ({ product }) => (
    <div key={product.id}>
      <Link to={`/product/${product.id}`} className='relative group w-[270px] py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
        <img src={product.thumbnail} alt={product.title} />
        <div className='absolute top-3 right-3'>
          <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff]'>
            <FaRegHeart size={16} />
          </div>
          <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff] mt-2'>
            <IoEyeOutline size={20} />
          </div>
        </div>
        <p className='hidden group-hover:block transition-all duration-100 absolute bottom-0 left-0 w-full py-2 bg-[#000000] text-white text-center'>
          Add To Cart
        </p>
      </Link>
      <div>
        <p className='font-primary font-medium text-[11px]'>{product.title}</p>
        <p className='font-primary font-medium text-primary mt-2'>
          ${product.price.toFixed(2)} <del className='text-black/50 ml-3'>$360</del>
        </p>
        <div className='flex items-center mt-2'>
          <ProductRating rating={product.rating} />
          <p className='text-black/50 ml-2'>({product.reviews?.length || 0})</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className='w-[75%]'>
      <div className='flex items-center justify-end'>
        <input
          onChange={handleSearch}
          className='py-2 w-[300px] pl-4 border-black/30 focus:outline-0 text-black/50 bg-[#F5F5F5] rounded-lg'
          type="text"
          placeholder='Search products...'
        />
      </div>

      <div className='flex flex-wrap gap-x-[30px] gap-y-[60px] mt-10'>
        {currentProducts.length > 0 ? (
          currentProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className='text-gray-500'>No products found</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className='flex gap-x-3 mt-10'>
          {[...Array(totalPages).keys()].map(index => {
            const pageNum = index + 1
            return (
              <div
                key={pageNum}
                className={`cursor-pointer py-2 px-4 rounded ${
                  currentPage === pageNum ? "bg-black text-white" : "bg-gray-400 text-black"
                }`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProductRightPart
