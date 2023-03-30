import React from 'react'

interface TextListProps {
  items: string[]
}

interface LinkListProps {
  items: { text: string; path: string }[]
}

interface SocialLinkProps {
  items: { path: string; src: string; alt: string }[]
}

const addressText = [
  'ipsum dolor sit, amet consectetur adipisicing elit. Totam delectus repudiandae facere.',
  'Address : No. 96, Cengkareng, Jakarta, Indonesia',
  'phone : +1 1234 1234 1234',
  'Email : support@example.com'
]

const businessHour = ['Mon - Fri : 8AM - 10PM', 'Sat : 9AM - 8PM', 'Sun : Closed']

const menuBar = [
  { text: 'Home', path: '/' },
  { text: 'Shop', path: '/shop' },
  { text: 'About', path: '/about' },
  { text: 'Subscribe', path: '/subscribe' },
  { text: 'Contact', path: '/contact' }
]

const extraBar = [
  { text: 'About Us', path: '/about' },
  { text: 'Our Office', path: '/office' },
  { text: 'Delivery', path: '/delivery' },
  { text: 'Our Store', path: '/store' },
  { text: 'Guarantee', path: '/guarantee' }
]

const socialLinks = [
  { path: 'https://web.facebook.com', src: './facebook.png', alt: 'facebook' },
  { path: 'https://www.instagram.com', src: './instagram.png', alt: 'instagram' },
  { path: 'https://www.twitter.com', src: './twitter.png', alt: 'twitter' }
]

function TextList({ items }: TextListProps) {
  return (
    <ul className='text-[16px] flex flex-col gap-[15px] opacity-70'>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function LinkList({ items }: LinkListProps) {
  return (
    <ul className='text-[14px] flex flex-col gap-[20px] opacity-70'>
      {items.map((item, i) => (
          <li key={i}>
            <a href={item.path}>
              {item.text}
            </a>
          </li>
      ))}
    </ul>
  )
}

function SocialLink({ items }: SocialLinkProps) {
  return (
    <div className='flex justify-center items-center bg-gray-300 gap-8'>
      {items.map((item, i) => (
        <a
          href={item.path}
          className='w-10 h-10'
          key={i}>
          <img
            src={item.src}
            alt={item.alt}
          />
        </a>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
  <footer>
    {/*
    <div className='p-10 bg-gray-300 text-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2'>
            <div className='mb-5 lg:col-span-3'>
              <h1 className='pb-4 text-3xl text-black font-bold'>BOOKBUZZ</h1>
              <TextList items={addressText} />
            </div>
            <div className='mb-5 lg:col-span-1'>
              <h3 className='pb-4 text-black font-bold'>Business Hour</h3>
              <TextList items={businessHour} />
            </div>
            <div className='mb-5 lg:col-span-1'>
              <h1 className='mb-4 text-black font-bold'>Footer Menu</h1>
              <LinkList items={menuBar} />
            </div>
            <div className='mb-5 lg:col-span-1'>
              <h3 className='mb-4 text-black font-bold'>Extras Menu</h3>
              <LinkList items={extraBar} />
            </div>
          </div>
        </div>
      </div>
  <SocialLink items={socialLinks} /> */}
      <div className="bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto flex lg:flex-row min-[100px]:flex-col min-[100px]:gap-[50px] sm:justify-left py-[70px] min-[100px]:justify-center">
            <div className="flex flex-1  flex-col gap-[25px]">
                <h1 className="text-[40px] font-bold capitalize font-montserrat">
                    BOOKBUZZ
                </h1>   
                <TextList items={addressText} />
            </div>
            <div className="flex flex-1 flex-row gap-[100px]">
                <div className="flex flex-col gap-[35px]">
                    <p className="font-bold text-[14px]" >Business Hour</p>
                        <TextList items={businessHour} />
                </div>
                <div className="flex flex-col gap-[35px]">
                    <p className="font-bold text-[14px]" >Footer Menu</p>
                    <LinkList items={menuBar} />
                </div>
                <div className="flex flex-col gap-[35px]">
                    <p className="font-bold text-[14px]" >Business Hour</p>
                    <LinkList items={extraBar} />
                </div>
            </div>
        </div>
      </div>
    </footer> 



  )
}

export default Footer


