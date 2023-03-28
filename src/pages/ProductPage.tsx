import React from 'react'
import NavBar from '../components/navBar'
import ProductWrapper from '../components/ProductWrapper'
import ShippingDescWrapper from '../components/shippingDescWrapper'
import SubscribeWrapper from '../components/subscribeWrapper'
import FeaturedProductWrapper from '../components/featuredProductWrapper'
import Footer from '../components/Footer'

const ProductPage = (): React.ReactElement => {
    return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
        <div className='static'>
        <NavBar />
        <ProductWrapper />
        <FeaturedProductWrapper />
        <ShippingDescWrapper />
        <SubscribeWrapper />
        <Footer />
        </div>
    </div>
    )
}

export default ProductPage
