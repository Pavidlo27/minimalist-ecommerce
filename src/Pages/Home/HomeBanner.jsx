import React from 'react'

const HomeBanner = ({ bannerTitle, bannerText }) => {
  return (
    <section className='px-10 my-20 h-[400px] flex flex-col justify-center bg-[#e9e9e9]'>
      <h2 className='text-3xl font-semibold'>{bannerTitle}</h2>
      <p className='text-lg my-5'>
        {bannerText}
      </p>
      <a
        className='inline-block w-fit py-2 px-3 
        bg-black text-white text-xl font-semibold border-2 border-white
        hover:bg-white hover:text-black hover:border-2 hover:border-black'
        href=""
      >SHOP NOW</a>
    </section>
  )
}

export default HomeBanner