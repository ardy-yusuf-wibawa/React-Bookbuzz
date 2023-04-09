import React from 'react'
import NavBar from '../components/navBar/navBar'
import ProductWrapper from '../components/Wrapper/productWrapper'
import ShippingDescWrapper from '../components/Wrapper/shippingDescWrapper'
import SubscribeWrapper from '../components/Wrapper/subscribeWrapper'
import FeaturedProductWrapper from '../components/Wrapper/featuredProductWrapper'
import Footer from '../components/footer/footer'

const ProductPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <NavBar />
      <ProductWrapper />
      <FeaturedProductWrapper />
      <ShippingDescWrapper />
      <SubscribeWrapper />
      <Footer />
    </div>
  )
}

export default ProductPage
