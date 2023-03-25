import React from 'react'
import NavBar from '../components/navBar'
import ProductContent from '../components/productContent'
import BannerWrapper from '../components/bannerWrapper'
import ProductWidget from '../components/productWidget'
import ShippingDescWrapper from '../components/shippingDescWrapper'
import SubscribeWrapper from '../components/subscribeWrapper'
import CategoryWrapper from '../components/categoryWrapper'
import Footer from '../components/footer'
import FeaturedProductWrapper from '../components/featuredProductWrapper'

const landingPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <div className='static'>
        <NavBar />
        {/* herocontent */}
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
