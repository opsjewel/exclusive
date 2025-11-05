import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='pt-[241px] pb-[140px]'>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-secondary font-medium text-[110px]'>404 Not Found</h3>
        <p className='font-primary text-base mt-[40px]'>Your visited page not found. You may go home page.</p>
        <div className='mt-[80px]'>
         <Link to={"/"}>
          <button className='font-primary font-meidum text-base bg-primary text-white py-4 px-[48px] rounded '>Back to home page</button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
