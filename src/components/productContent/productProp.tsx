import React from 'react'
export interface ProductProps {
  name: string
  category: string
  img: string
  star: string
  price: string
}

const ProductProp = ({ name, category, img, star, price }: ProductProps): React.ReactElement => {
  return (
    <>
      <div className='mx-auto'>
        <div className='h-[380px] w-[248px]  relative border border-[rgba(0,0,0,0.3)] '>
          <div className='absolute bottom-1 px-[20px] '>
            <div className='flex justify-around items-center gap-[86px]'>
              <p className='text-[12px] uppercase '>{name} </p>
              <div className='flex gap-[2.5px] '>
                <img
                  src={star}
                  alt=''
                />
                <img
                  src={star}
                  alt=''
                />
                <img
                  src={star}
                  alt=''
                />
                <img
                  src={star}
                  alt=''
                />
              </div>
            </div>
            <p className='font-extrabold text-[12px] '>{category} </p>
            <p className='text-blue-500 font-bold text-[14px] '>{price}</p>
          </div>

          <div className='h-[298px] w-[248px] shadow-xl  absolute'>
            <img
              src={img}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductProp
