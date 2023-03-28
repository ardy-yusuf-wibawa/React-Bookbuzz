import React from 'react'

const Footer = (): React.ReactElement => {
  return (
    <>
      {/* Before
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
  </footer> */}

  
      <div className="bg-[#f6f6f6] text-black">
        <div className="max-w-7xl mx-auto flex lg:flex-row min-[100px]:flex-col min-[100px]:gap-[50px] sm:justify-left py-[70px] min-[100px]:justify-center">
            {/*logo dan about */}
            <div className="flex flex-1  flex-col gap-[25px]">
                <h1 className="text-[40px] font-bold">
                    BOOKBUZZ
                </h1>   
                <div className="flex flex-col gap-[15px] opacity-70">
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br/>molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
                    <p>Address : No. 96, Cengkareng, Jakarta, Indonesia</p>
                    <p>Phone : +1 1234 1234 1234</p>
                    <p>Email : support@example.com</p>
                </div>
            </div>
            {/* footer menu */}
            <div className="flex flex-1 flex-row gap-[100px]">
                <div className="flex flex-col gap-[35px]">
                    <p className="font-bold text-[14px]" >Business Hour</p>
                    <ul className="text-[14px] flex flex-col gap-[20px] opacity-70">
                        <li>Mon - Fri: 8AM - 10PM</li>
                        <li>Sat: 9AM - 8PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[35px] ">
                    <p className="font-bold text-[14px]" >Footer Menu</p>
                    <ul className="text-[14px] flex flex-col gap-[20px] ">
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Home
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Shop
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Subscribe
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">About
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Contact
                          </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[35px]">
                    <p className="font-bold text-[14px]" >Business Hour</p>
                    <ul className="text-[14px] flex flex-col gap-[20px]">
                    <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">About Us
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Our Office
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Delivery
                          </a>
                        </li>
                        <li>
                          <a 
                          className="opacity-70 hover:text-cyan-600"
                          href="">Our Store
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
