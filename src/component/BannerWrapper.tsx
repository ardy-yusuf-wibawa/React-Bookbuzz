import React from 'react'
import Banner1 from '../assets/Banner-1.png'
import Banner2 from '../assets/Banner-2.png'

const BannerWrapper = (): React.ReactElement => {
  return (
        <div className='container mx-auto px-6 font-inter sm:flex justify-center items-center sm:gap-4'>
            <div className='rounded shadow-lg mb-10 sm:w[526px] h[300px] justify-center'>
                <img src={Banner1} alt="" />
            </div>
            <div className='rounded shadow-lg mb-10 sm:w[526px] h[300px] justify-center'>
                <img src={Banner2} alt="" />
            </div>
        </div>
  )
}

export default BannerWrapper
