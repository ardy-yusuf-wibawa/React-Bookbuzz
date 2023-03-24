import React from 'react'
import NavBar from '../component/navBar'

import ProductContent from '../component/productContent'
import BannerWrapper from '../component/BannerWrapper'
import ProductWidget from '../component/ProductWidget'
import ShippingDescWrapper from '../component/ShippingDescWrapper'
import SubscribeWrapper from '../component/SubscribeWrapper'

const landingPage =
  (): React.ReactElement => {
    return (
      <div className='w-[100vw] mx-auto h-[100vh]'>
        <div className='static'>
          <NavBar />
          <ProductContent />
          <BannerWrapper />
          <ProductWidget />
          <ShippingDescWrapper />
          <SubscribeWrapper />
        </div>
      </div>
    )
  }

export default landingPage
