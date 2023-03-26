import React, { useState } from 'react'
import '@fontsource/poppins'
import '@fontsource/inter'
import Data from '../Data.json'
import ContentData from './lib/contentData'
import Pagination from './lib/pagination'
import { Link } from 'react-router-dom'

function ProductContent(): React.ReactElement {
  const [currentPage, setCurrentPage] =
    useState(1)
  const itemsPerPage = 8

  const handlePageChange = (
    pageNumber: number
  ): void => {
    setCurrentPage(pageNumber)
  }

  const handlePrev = (): void => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleNext = (): void => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const startIndex =
    (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const totalPages = Math.ceil(
    Data.length / itemsPerPage
  )

  return (
    <>
      <section className='relative flex container justify-center mx-auto px-4 py-4'>
        <span
          className='relative font-inter items-center justify-center text-center
            font-normal text-[20px] sm:text-[24px] leading-[29px] tracking-[.075em]
            text-[#131246]'>
          Our Product
        </span>
      </section>
      {/* Text */}
      <span
        className='flex justify-center font-inter text-[14px] text-center p-2
        leading-[17px] text-slate-900/50'>
        Mirum est notare quam littera gothica,
        quam nunc putamus parum claram
        anteposuerit litterarum formas.
      </span>
      {/* menubar */}
      <section className='flex items-center relative justify-center '>
        <button className='relative'>
          <ul className='flex items-center relative gap-3'>
            <li className='rounded-sm text-slate-900/50 bg-slate-500/20'>
              <a
                href='index.html'
                className='font-inter text-[14px] leading-[17px]'>
                Adventure
              </a>
            </li>
            <li className='p-0 rounded-sm text-slate-900/50 bg-slate-500/20'>
              <a
                href='index.html'
                className='font-inter text-[14px] leading-[17px]'>
                Novel
              </a>
            </li>
            <li className='p-0 rounded-sm text-slate-900/50 bg-slate-500/20'>
              <a
                href='index.html'
                className='font-inter text-[14px] leading-[17px]'>
                Sci-Fi
              </a>
            </li>
            <li className='p-0 rounded-sm text-slate-900/50 bg-slate-500/20'>
              <a
                href='index.html'
                className='font-inter text-[14px] leading-[17px]'>
                Self-Help
              </a>
            </li>
          </ul>
        </button>
      </section>
      {/* // <!-- carousel --> */}
      <section className='relative container mx-auto lg:w-[90%] px-4 w-full'>
        <div className='mx-auto flex px-4 w-full'>
          <div className='z-10 flex w-full'>
            <button
              className='invisible sm:visible flex items-center justify-center
             bg-white rounded-full shadow-[0_2px_5px_-0px_rgba(0,0,0,0.3)]
              absolute top-[50%] w-[42px] h-[42px] -left-[0.6vw]'
              onClick={handlePrev}
              disabled={currentPage === 1}>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 320 512'
                className='text-black text-[18px]'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
              </svg>
            </button>

            <button
              className='invisible sm:visible flex items-center justify-center
             bg-white rounded-full shadow-[0_2px_5px_-0px_rgba(0,0,0,0.3)]
              absolute top-[50%] w-[42px] h-[42px] -right-[0.8vw]'
              onClick={handleNext}
              disabled={
                currentPage === totalPages
              }>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 320 512'
                className='text-black text-[18px]'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
              </svg>
            </button>
          </div>
        </div>
        <Link to='/product'>
        <div className='container mx-auto grid px-4 w-full sm:py-[20px] lg:grid-cols-4 sm:gap-y-[1vh] pt-[200px] pb-10 grid-cols-1 gap-y-[300px] gap-[30px]'>
          {Data.slice(startIndex, endIndex).map(
            (value, index) => {
              return (
                <ContentData
                key={index}
                name={value.name}
                img={value.img}
                rating={value.rating}
                nameProduct={value.nameProduct}
                price={value.price}
                discountPrice={
                  value.discountPrice
                }
                />
                )
              }
              )}
        </div>
              </Link>
      </section>
      <div className='pt-[120px] md:pt-[50px] items-center justify-center flex'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default ProductContent
