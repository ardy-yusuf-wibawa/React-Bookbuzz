import React from 'react'

const Footer = (): React.ReactElement => {
  return (
    <>
      <footer>
        <div className='p-10 bg-gray-300 text-black'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2'>
              <div className='mb-5 lg:col-span-3'>
                <h1 className='pb-4 text-3xl text-black font-bold'>
                  BOOKBUZZ
                </h1>
                <div className='pb-3'>
                  ipsum dolor sit, amet
                  consectetur adipisicing elit.
                  Totam delectus repudiandae
                  facere.
                </div>
                <div className='pb-3'>
                  Address : No. 96, Cengkareng,
                  Jakarta, Indonesia
                </div>
                <div className='pb-3'>
                  phone : +1 1234 1234 1234
                </div>
                <div className='pb-3'>
                  Email : support@example.com
                </div>
              </div>
              <div className='mb-5 lg:col-span-1'>
                <h3 className='pb-4 text-black font-bold'>
                  Business Hour
                </h3>
                <div className='pb-3'>
                  Mon - Fri : 8AM - 10PM
                </div>
                <div className='pb-3'>
                  Sat : 9AM - 8PM
                </div>
                <div className='pb-3'>
                  Sun : Closed
                </div>
              </div>
              <div className='mb-5 lg:col-span-1'>
                <h1 className='mb-4 text-black font-bold'>
                  Footer Menu
                </h1>
                <ul>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Home
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Shop
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Subscribe
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      About
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-5 lg:col-span-1'>
                <h3 className='mb-4 text-black font-bold'>
                  Extras Menu
                </h3>
                <ul>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      About Us
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Our Office
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Delivery
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Our Store
                    </a>
                  </li>
                  <li className='pb-3'>
                    <a
                      href='#'
                      className='hover:text-gray-50'>
                      Guarantee
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center bg-gray-300 gap-8'>
          <a
            href='#'
            className='w-10 h-10'>
            <img
              src='./facebook.png'
              alt=''
            />
          </a>
          <a
            href='#'
            className='w-10 h-10'>
            <img
              src='./instagram.png'
              alt=''
            />
          </a>
          <a
            href='#'
            className='w-10 h-10'>
            <img
              src='./twitter.png'
              alt=''
            />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
