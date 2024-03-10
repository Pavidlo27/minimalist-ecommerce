import React from 'react'
import { Link } from 'react-router-dom'


const HomeBanner = ({ bannerTitle, bannerText, bannerImg, reverse }) => {
  return (
    <section className={`px-10 my-20 w-full h-[400px] flex items-center ${reverse && 'flex-row-reverse'} bg-[#e9e9e9]
    lg:px-0`}>
      <div className='lg:px-[110px] lg:w-1/2'>
        <h2 className='text-3xl font-semibold'>{bannerTitle}</h2>
        <p className='text-lg my-5'>
          {bannerText}
        </p>
        <Link
          to='categories'
          className='inline-block w-fit py-2 px-3 
        bg-black text-white text-xl font-semibold border-2 border-white
        hover:bg-white hover:text-black hover:border-2 hover:border-black'
        >SHOP NOW</Link>
      </div>
      <img
        className='w-1/2 h-[400px] object-cover hidden lg:block '
        src={bannerImg}
        alt="bannerImg"
      />
    </section>
  )
}

export default HomeBanner