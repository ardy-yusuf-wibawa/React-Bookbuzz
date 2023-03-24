import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'

function menuBar(): React.ReactElement {
  return (
    <section className='flex items-center relative justify-center '>
      <button className='relative'>
        <ul
          className='flex items-center relative text-[#131246] gap-5
          font-poppins font-medium text-xs leading-6'>
          <li>
            <Link to='index.html'>
              Home
            </Link>
          </li>
          <li>
            <Link to='index.html'>
              Shop
            </Link>
          </li>
          <li>
            <Link to='/login'>
              About
            </Link>
          </li>
          <li>
            <Link to='/signup'>
              Contact
            </Link>
          </li>
        </ul>
      </button>
    </section>
  )
}

export default menuBar
