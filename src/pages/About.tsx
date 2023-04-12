import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/Footer'

const AboutUs = (): React.ReactElement => {
  return (
    <div className=''>
      <NavBar />
      {/* About Us */}
      <div className=' md:flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-full h-[273px] p-[] bg-[#F6F6F6]'>
          <h2 className='flex items-center justify-center font-bold text-[40px] mb-2'>
            About Us
          </h2>
          <p className='font-normal flex-non text-[12px]'>
            learn more about the company
          </p>
        </div>
      </div>
      {/* Intro Section */}
      <div className='inline-block md:flex items-center justify-center mx-auto px-4'>
        <div className='w-1/2 '>
          <h1 className='font-extrabold leading-[44px] text-center text-[36px]'>
            WELCOME TO BOOKBUZZ
          </h1>
          <p className='font-normal leading-[17px] text-[14px] mt-3 text-center mx-4'>
            Welcome to our online bookstore! We
            have a vast collection of books <br />{' '}
            for all ages and interests, with the
            option to purchase online for home{' '}
            <br /> delivery or pickup at our
            store. Our knowledgeable staff is
            available to answer any questions and
            make recommendations. We also offer
            virtual events to connect with fellow
            book lovers. Join us in our passion
            for literature and discover your next
            favorite read on our website today!
          </p>
        </div>
        <div className='sm:inline-block md:flex items-center justify-center gap-4 mt-8'>
          <div className='w-1/2 inline'>
            <img
              src='./Intro1.png'
              alt=''
              className='w-[310px] h-[230px]'
            />
            <img
              src='./Intro2.png'
              alt=''
              className='w-[310px] h-[425px] top-[250px] mt-4'
            />
          </div>
          <div className='flex-none'>
            <img
              src='./Intro3.png'
              alt=''
              className='w-[310px] h-[425px] top-[250px]'
            />
            <img
              src='./Intro4.png'
              alt=''
              className='top-[250px] mt-4'
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-around text-center mt-20'>
        <div className=''>
          <h1 className='font-bold text-[24px] leading-[29.05px] mb-2'>
            OUR MESSAGE
          </h1>
          <p className='font normal text-[14px]'>
            Mirum est notare quam littera gothica,
            quam nunc putamus parum
          </p>
          <p className='font normal text-[14px]'>
            claram, anteposuerit litterarum formas
            humanitatis per seacula
          </p>
          <p className='font normal text-[14px]'>
            quarta decima et quinta decima.
          </p>
        </div>
        <div className=''>
          <h1 className='font-bold text-[24px] leading-[29.05px] mb-2'>
            OUR MESSAGE
          </h1>
          <p className='font normal text-[14px]'>
            Mirum est notare quam littera gothica,
            quam nunc putamus parum
          </p>
          <p className='font normal text-[14px]'>
            claram, anteposuerit litterarum formas
            humanitatis per seacula
          </p>
          <p className='font normal text-[14px]'>
            quarta decima et quinta decima.
          </p>
        </div>
      </div>
      <div className='text-center mb-20'>
      <h1 className='text-[32px] font-bold leading-[29.05px] mb-2'>
          OUR GOAL
        </h1>
        <p className='font normal text-[14px]'>
          Mirum est notare quam littera gothica, quam nunc putamus parum
        </p>
        <p className='font normal text-[14px]'>claram, anteposuerit litterarum formas humanitatis per seacula</p>  
        <p className='font normal text-[14px]'>uarta decima et quinta decima.</p>
      </div>
      <div className='flex items-center justify-center'>
        
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
