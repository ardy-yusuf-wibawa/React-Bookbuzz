import Product from './product'
import List from '../list.json'
import React from 'react'

const FeaturedProductWrapper =
  (): React.ReactElement => {
    return (
      <>
        <div className='text-center'>
          <h2 className='mt-[102px] text-[24px] '>
            Featured Collection
          </h2>
          <p className='text-[rgba(0,0,0,0.5)] mb-[40px] '>
            mirum est notare quam littera gotica,
            quam nunc putamus parum claram
            anteposuerit litterarum formas
          </p>
        </div>

        <div className='flex flex-wrap gap-[30px] mx-[179px] mb-[106px] '>
          {List.map((v, i) => {
            return (
              <Product
                key={i}
                name={v.name}
                category={v.category}
                price={v.price}
                img={v.img}
                star={v.star}
              />
            )
          })}
        </div>
      </>
    )
  }

export default FeaturedProductWrapper
