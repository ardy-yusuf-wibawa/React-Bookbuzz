import React from 'react'

const Footer = (): React.ReactElement => {
  const textAddress = {
    addressText: [
      'ipsum dolor sit, amet consectetur adipisicing elit. Totam delectus repudiandae facere.',
      ' Address : No. 96, Cengkareng, Jakarta, Indonesia',
      ' phone : +1 1234 1234 1234',
      'Email : support@example.com'
    ]
  }
  const bussinessHour = {
    hour: ['Mon - Fri : 8AM - 10PM', 'Sat : 9AM - 8PM', 'Sun : Closed']
  }
  const menuBar = {
    menu: ['Home', 'Shop', 'About', 'Subscribe', 'Contact'],
    path: ['/', '/shop', '/about', '/subscribe', '/contact']
  }
  const extraBar = {
    menu: ['About Us', 'Our Office', 'Delivery', 'Our Store', 'Guarantee'],
    path: ['/about', '/office', '/delivery', '/store', '/guarantee']
  }
  const imgPath = {
    path: ['./facebook.png', './instagram.png', './twitter.png'],
    src: ['www.facebook.com', 'www.instagram.com', 'www.twitter.com']
  }
  return (
    <>
      <footer>
        <div className='p-10 bg-gray-300 text-black'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2'>
              <div className='mb-5 lg:col-span-3'>
                <h1 className='pb-4 text-3xl text-black font-bold'>BOOKBUZZ</h1>
                {textAddress.addressText.map((v, i) => (
                  <div
                    className='pb-3'
                    key={i}>
                    {v}
                  </div>
                ))}
              </div>
              <div className='mb-5 lg:col-span-1'>
                <h3 className='pb-4 text-black font-bold'>Business Hour</h3>
                {bussinessHour.hour.map((v, i) => (
                  <div
                    className='pb-3'
                    key={i}>
                    {v}
                  </div>
                ))}
              </div>
              <div className='mb-5 lg:col-span-1'>
                <h1 className='mb-4 text-black font-bold'>Footer Menu</h1>
                <ul>
                  {menuBar.menu.map((v, i) => (
                    <li
                      className='pb-3'
                      key={i}>
                      <a
                        href={menuBar.path[i]}
                        className='hover:text-gray-50'>
                        {v}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mb-5 lg:col-span-1'>
                <h3 className='mb-4 text-black font-bold'>Extras Menu</h3>
                <ul>
                  {extraBar.menu.map((v, i) => (
                    <li
                      className='pb-3'
                      key={i}>
                      <a
                        href={extraBar.path[i]}
                        className='hover:text-gray-50'>
                        {v}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center bg-gray-300 gap-8'>
          {imgPath.path.map((v, i) => (
            <a
              href={imgPath.src[i]}
              key={i}
              className='w-10 h-10'>
              <img
                src={v}
                alt=''
              />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
