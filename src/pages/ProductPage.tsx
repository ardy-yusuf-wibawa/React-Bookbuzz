import React from 'react'
import NavBar from '../components/navBar'
import ProductWrapper from '../components/productWrapper'
import ShippingDescWrapper from '../components/shippingDescWrapper'
import SubscribeWrapper from '../components/subscribeWrapper'
import FeaturedProductWrapper from '../components/featuredProductWrapper'
import Footer from '../components/footer'

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
