import React from 'react'
import Navbar from '../components/navBar'
import Footer from '../components/footer'

const aboutUs = () => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <Navbar />
      {/* About Us */}
      <div className=' md:flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-full h-[273px] p-[] bg-[#F6F6F6]'>
          <h2 className='flex items-center justify-center font-bold text-4xl mb-2'>About Us</h2>
          <p className='font-normal flex-non'>learn more about the company</p>
        </div>
      </div>
      {/* Intro Section */}
      <div className='inline-block md:flex items-center justify-center mx-auto px-4'>
        <div className='w-1/2 '>
          <h1 className='font-extrabold leading-[43.57px]'>WELCOME TO BOOKBUZZ</h1>
          <p className='font-normal text-sm mt-3'>
            Welcome to our online bookstore! We have a vast collection of books <br /> for all ages
            and interests, with the option to purchase online for home <br /> delivery or pickup at
            our store. Our knowledgeable staff is available to answer any questions and make
            recommendations. We also offer virtual events to connect with fellow book lovers. Join
            us in our passion for literature and discover your next favorite read on our website
            today!
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
      <div className='grid lg:grid-cols-2 mt-20 gap-8 sm:grid-cols-1'>
        <div className=''>
          <h1 className='font-bold text-2xl leading-[29.05px]'>OUR MESSAGE</h1>
          <p className='font normal text-sm'>
            Mirum est notare quam littera gothica, quam nunc putamus parum
          </p>
          <p className='font normal text-sm'>
            claram, anteposuerit litterarum formas humanitatis per seacula
          </p>
          <p className='font normal text-sm'>quarta decima et quinta decima.</p>
        </div>
        <div className=''>
          <h1 className='font-bold text-2xl leading-[29.05px]'>OUR MESSAGE</h1>
          <p className='font normal text-sm'>
            Mirum est notare quam littera gothica, quam nunc putamus parum
          </p>
          <p className='font normal text-sm'>
            claram, anteposuerit litterarum formas humanitatis per seacula
          </p>
          <p className='font normal text-sm'>quarta decima et quinta decima.</p>
        </div>
      </div>
      <div className='mt-4'>
        <h1 className='text-[32px] font-bold'>OUR GOAL</h1>
        <p className='font normal text-sm'>
          Mirum est notare quam littera gothica, quam nunc putamus parum
        </p>
        <p className='font normal text-sm'>
          claram, anteposuerit litterarum formas humanitatis per seacula
        </p>
        <p className='font normal text-sm'>quarta decima et quinta decima.</p>
      </div>
      <Footer />
    </div>
  )
}

export default aboutUs
