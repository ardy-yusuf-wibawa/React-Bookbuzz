import React from 'react'
import NavBar from '../components/navBar'
import ProductContent from '../components/productContent'
import BannerWrapper from '../components/bannerWrapper'
import ProductWidget from '../components/productWidget'
import ShippingDescWrapper from '../components/shippingDescWrapper'
import SubscribeWrapper from '../components/subscribeWrapper'
import CategoryWrapper from '../components/CategoryWrapper'
import Footer from '../components/Footer'
import FeaturedProductWrapper from '../components/FeaturedProductWrapper'
import HeroContent from '../components/HeroContent'

const landingPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <div className='static'>
        <NavBar />
        <HeroContent />
        <CategoryWrapper />
        <ProductContent />
        {/* review Wrapper */}
        <FeaturedProductWrapper />
        <BannerWrapper />
        <ProductWidget />
        <ShippingDescWrapper />
        <SubscribeWrapper />
        <Footer />
      </div>
    </div>
  )
}

export default landingPage
