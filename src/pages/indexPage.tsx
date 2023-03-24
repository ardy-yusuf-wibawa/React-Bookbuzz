import React from 'react'
import BannerWrapper from '../component/BannerWrapper'
import ProductWidget from '../component/ProductWidget'

const indexPage = (): React.ReactElement => {
  return (
  <div>
    <div>
        <BannerWrapper />
      <ProductWidget />
    </div>
  </div>
  )
}

export default indexPage
