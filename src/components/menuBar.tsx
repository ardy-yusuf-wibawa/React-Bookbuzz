import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'

interface nameBarProps {
  items: { text: string; path: string }[]
}

function NameBar({ items }: nameBarProps) {
  return (
    <ul
      className='flex items-center relative text-[#131246] gap-5
          font-poppins font-medium text-xs leading-6'>
      {items.map((item, i) => (
        <li key={i}>
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

const nameBar = [
  { text: 'Home', path: '/' },
  { text: 'Shop', path: '/shop' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' }
]

const MenuBar = () => {
  return (
    <section className='flex items-center relative justify-center '>
      <button className='relative'>
        <NameBar items={nameBar} />
      </button>
    </section>
  )
}

export default MenuBar
{
  /* <ul className='flex items-center relative text-[#131246] gap-5 font-popp font-medium text-base leading-6'> */
}
