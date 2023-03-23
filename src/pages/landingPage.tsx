import React from 'react'
import NavBar from '../component/navBar'

import ProductContent from '../component/productContent'
import BannerWrapper from '../component/BannerWrapper'
import ProductWidget from '../component/ProductWidget'

const landingPage =
  (): React.ReactElement => {
    return (
      <div className='w-[100vw] mx-auto h-[100vh]'>
        <div className='static'>
          <NavBar />
          <ProductContent />
          <BannerWrapper />
          <ProductWidget />
        </div>
      </div>
    )
  }

export default landingPage
