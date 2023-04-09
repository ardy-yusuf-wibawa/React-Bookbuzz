import React from 'react'
import Navbar from '../components/navBar/navBar'
import ProductContent from '../components/productContent/productContent'
import BannerWrapper from '../components/Wrapper/bannerWrapper'
import ProductWidget from '../components/productContent/productWidget'
import ShippingDescWrapper from '../components/Wrapper/shippingDescWrapper'
import SubscribeWrapper from '../components/Wrapper/subscribeWrapper'
import CategoryWrapper from '../components/Wrapper/categoryWrapper'
import Footer from '../components/footer/footer'
import FeaturedProductWrapper from '../components/Wrapper/featuredProductWrapper'
import HeroContent from '../components/productContent/heroContent'
import ReviewWrapper from '../components/Wrapper/reviewWrapper'

const landingPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <div className='static'>
        <Navbar />
        <HeroContent />
        <CategoryWrapper />
        <ProductContent />
        <ReviewWrapper />
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
