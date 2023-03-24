import React from 'react'
import '@fontsource/poppins'
import '@fontsource/inter'

function productContent(): React.ReactElement {
  return (
    <div>
      <section className='relative flex container justify-center mx-auto px-4 py-4'>
        <span
          className='relative font-inter items-center justify-center text-center
            font-normal text-[20px] sm:text-[24px] leading-[29px] tracking-[.075em]
            text-[#131246]'>
          Our Product
        </span>
      </section>
      {/* Text */}
      <div
        className='flex justify-center font-inter text-[14px] text-center p-2
        leading-[17px] text-slate-900/50'>
        Mirum est notare quam
        littera gothica, quam
        nunc putamus parum
        claram anteposuerit
        litterarum formas.
      </div>
      {/* menubar */}
      <section className='flex items-center relative justify-center '>
        <button className='relative'>
          <ul className='flex items-center relative gap-3'>
            <li className='p-0 rounded-sm text-slate-900/50 bg-slate-500/20'>
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
      <section className='py-10 relative container mx-auto lg:w-[90%] px-4 w-full'>
        <div
          className='container mx-auto grid px-4 w-full
        sm:grid-cols-4 sm:gap-[2.3vw] grid-cols-2 gap-y-[60px] gap-[4vw]'>
          <div className='z-10 flex w-full'>
            <button className='invisible sm:visible flex items-center justify-center bg-white rounded-full shadow-[0_2px_5px_-0px_rgba(0,0,0,0.3)] absolute top-[50%] w-[42px] h-[42px] -left-[0.6vw]'>
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

            <button className='invisible sm:visible flex items-center justify-center bg-white rounded-full shadow-[0_2px_5px_-0px_rgba(0,0,0,0.3)] absolute top-[50%] w-[42px] h-[42px] -right-[0.8vw]'>
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
              </svg>{' '}
            </button>
          </div>
        </div>
        <div className='container mx-auto grid px-4 w-full sm:py-[20px] sm:grid-cols-4 sm:gap-[2.3vw] pt-10 pb-10 grid-cols-2 gap-y-[60px] gap-[4vw]'>
          {/* <!-- 1 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 items-center'
            />
            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
              $20
            </span>
          </div>
          {/* <!-- 2 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M508.55 171.51L362.18 150.2 296.77
                  17.81C290.89 5.98 279.42 0 267.95 0c-11.4
                  0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25
                  3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98
                  495.33 103.57 512 122.15 512c4.93 0 10-1.17
                  14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92
                  3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49
                  105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74
                  123.2l-18.12 17.62 4.28 24.88 19.52
                  113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18
                  22.63 25.01 3.64 114.23 16.63-82.65 80.38z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
              $20
            </span>
          </div>
          {/* <!-- 3 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#F2F2F2'
                strokeWidth='50'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
              $20
            </span>
          </div>
          {/* <!-- 4 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#F2F2F2'
                strokeWidth='50'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#F2F2F2'
                strokeWidth='50'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
              $20
            </span>
          </div>
          {/* <!-- 5 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>

              {/* < />!--Half Star Review Gray Not Working--> */}
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <div className='flex gap-5'>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
                $20
              </span>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-slate-900/30 line-through'>
                $20
              </span>
            </div>
          </div>
          {/* <!-- 6 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <div className='flex gap-5'>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
                $20
              </span>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-slate-900/30 line-through'>
                $20
              </span>
            </div>
          </div>
          {/* <!-- 7 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <div className='flex gap-5'>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
                $20
              </span>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-slate-900/30 line-through'>
                $20
              </span>
            </div>
          </div>
          {/* <!-- 8 --> */}
          <div className='py-[30px] sm:px-5 sm:mb-0 sm:h-auto flex sm:justify-between justify-center flex-col h-[35vw] px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
            <img
              alt='Book.png'
              src='./img-book.png'
              width='248'
              height='298'
              decoding='async'
              className='sm:w-full h-auto sm:mb-5 w-[60%] mb-2.5 '
            />

            <div className='flex'>
              <a className='font-normal font-inter sm:text-[12px] text-[10px] text-slate-900/60 leading-4 pr-[20px]'>
                Vendor 01
              </a>
              <svg
                stroke='#DFB300'
                fill='#DFB300'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
              <svg
                stroke='#DFB300'
                fill='#5F5F5F'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='9.4px'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
              </svg>
            </div>

            <span className='font-bold font-poppins sm:text-[12px] text-[10px] leading-5'>
              Test Product
            </span>
            <div className='flex gap-5'>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
                $20
              </span>
              <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-slate-900/30 line-through'>
                $20
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default productContent
