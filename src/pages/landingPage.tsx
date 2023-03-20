import React from 'react'
import NavBar from '../component/navBar'
import MenuBar from '../component/menuBar'
import ProductContent from '../component/productContent'

const landingPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <div className='static'>
        <NavBar />
        <MenuBar />
        <ProductContent />
      </div>
    </div>
  )
}

export default landingPage
