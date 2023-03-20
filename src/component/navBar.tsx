import React from 'react'

function navBar (): React.ReactElement {
  return (
    <section className='flex w-[100%] h-[100px] justify-between items-center px-[6rem] top-0 left-0 right-0 z-[9999] bg-[#f6f6f6]'>
      <div></div>
      <div className='flex w-[90px] h-[90px] pl-[20px] rounded-full bg-gradient-to-bl from-[#6a79ff] to-[#fb4e97] drop-shadow-[0_1px_3px_rgba(16,24,40,0.1)] items-center mx-auto'>
        <div className='relative items-center self-center font-[Poppins] font-bold text-[32px] leading-[48px] tracking-[.075em]'>
          BOOKBUZZ
        </div>
      </div>
      <div className='flex gap-[30px] '>
        <a
          href='#'
          id='search'
          className='invisible sm:visible'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'>
            <path
              fillRule='evenodd'
              d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
              clipRule='evenodd'
            />
          </svg>
        </a>
        <a
          href='#'
          id='shopping-cart'
          className='invisible sm:visible'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'>
            <path d='M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
          </svg>
        </a>
        <a
          href='#'
          id='hamburger-menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'>
            <path
              fillRule='evenodd'
              d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default navBar
