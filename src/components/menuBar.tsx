import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'

const nameBar = {
  name: ['Home', 'Shop', 'About', 'Contact'],
  path: ['/', '/', '/about', '/contact'],
};

function menuBar(): React.ReactElement {
  return (
    <section className='flex items-center relative justify-center '>
      <button className='relative'>

        <ul
          className='flex items-center relative text-[#131246] gap-5
          font-poppins font-medium text-xs leading-6'>
            {nameBar.name.map((v,i) => (
          <li key={i}>
            <Link to={nameBar.path[i]}>{v}</Link>
          </li>
        ))}
        </ul>
      </button>
    </section>
  )
}

export default menuBar
