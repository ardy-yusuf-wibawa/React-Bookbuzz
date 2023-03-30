import React from 'react'
import Navbar from '../components/navBar'
import ProductContent from '../components/productContent'
import BannerWrapper from '../components/bannerWrapper'
import ProductWidget from '../components/productWidget'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ShippingDescWrapper from '../components/shippingDescWrapper'
import SubscribeWrapper from '../components/subscribeWrapper'
import CategoryWrapper from '../components/categoryWrapper'
import Footer from '../components/footer'
import FeaturedProductWrapper from '../components/featuredProductWrapper'
import HeroContent from '../components/heroContent'

const landingPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <div className='static'>
        <Navbar />
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
