import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

interface sideBarProps {
  items: Array<{
    text: string
    path: string
  }>
}

const sideBar = [
  { text: 'Sign Up', path: '/signup' },
  { text: 'Login', path: '/login' },
  { text: 'Home', path: '/' },
  { text: 'Shop', path: '/shop' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' }
]

function SideBarMenu({ items }: sideBarProps) {
  return (
    <li className='mb-1'>
      {items.map((item, i) => (
        <Link
          to={item.path}
          key={i}
          className='block p-4 text-sm font-semibold text-red-400 hover:bg-red-50 hover:text-red-600 rounded'>
          {item.text}
        </Link>
      ))}
    </li>
  )
}

const HamburgerBar = (): React.ReactElement => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        buttonRef.current != null &&
        'contains' in buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [buttonRef])

  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className='flex'
        onClick={handleToggle}
        ref={buttonRef}>
        <svg
          className='text-xl  '
          stroke='#ff2800'
          fill='#000000'
          strokeWidth='0'
          viewBox='0 0 1024 1024'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0
                              624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8
                              3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
        </svg>
      </button>
      <div>
        <div className={`relative  ${isOpen ? '' : 'hidden'}`}>
          <div className='fixed inset-0 bg-slate-800 opacity-25'></div>
          <nav className='z-[9999] fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
            <div className='flex items-center mb-8'>
              <Link
                to='#'
                className='mr-auto'>
                <span>BOOKBUZZ</span>
              </Link>

              <button
                className=''
                onClick={handleToggle}>
                <svg
                  className='h-6 w-6 cursor-pointer text-rose-800'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className='mb-1'>
                  <SideBarMenu items={sideBar} />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HamburgerBar
