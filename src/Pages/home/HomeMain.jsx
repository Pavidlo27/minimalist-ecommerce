import React, { useState } from 'react'
import img1 from '../../assets/images/livingroom.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/kitchen.jpg'
import LowResImg1 from '../../assets/images/livingroomLowRes.jpg'
import LowResImg2 from '../../assets/images/img2LowRes.jpg'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  const [isHighResolutionLoaded, setIsHighResolutionLoaded] = useState(false)
  return (
    <section className='mb-20' onLoad={() => setIsHighResolutionLoaded(true)}>
      <ul className='grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 text-2xl text-white font-semibold
      lg:grid-cols-[2fr_1fr_1fr] lg:text-4xl'>
        <li className='relative lg:row-start-1 lg:row-end-3  overflow-hidden' data-aos="zoom-in">
          <Link to='categories' >
            <img
              src={LowResImg1}
              alt=""
              className={`${isHighResolutionLoaded ? 'hidden' : 'blur-md'} w-full h-60 lg:h-[492px] object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer`} />
            <img
              className={`${isHighResolutionLoaded ? '' : 'hidden'} w-full h-60 lg:h-[492px] object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer`}
              src={img1}
              alt="Live Comfortably"
            />
            <span
              className='absolute bottom-5 left-3 cursor-pointer'
            >Live Comfortably</span>
          </Link>
        </li>
        <li className='relative lg:row-start-1 lg:row-end-3' data-aos="zoom-in">
          <Link to='categories?type=skin care'>
            <img
              src={LowResImg2}
              alt=""
              className={`${isHighResolutionLoaded ? 'hidden' : 'blur-md'} w-full h-60 lg:h-[492px] object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer`} />
            <img
              className={`${isHighResolutionLoaded ? '' : 'hidden'} w-full h-60 lg:h-[492px] object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer`}
              src={img2}
              alt="Live Comfortably"
            />
            <span
              className='absolute bottom-5 left-3 cursor-pointer'
            >Skincare</span>
          </Link>
        </li>
        <li className='relative' data-aos="zoom-in">
          <Link to='categories?type=kitchen'>
            <img
              className='w-full h-60 object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
              src={img4}
              alt="Kitchen"
            />
            <span
              className='absolute bottom-5 left-3 cursor-pointer'
            >Kitchen</span>
          </Link>
        </li>
        <li className='relative lg:col-start-3 lg:col-end-3 lg:overflow-hidden' data-aos="zoom-in">
          <Link to='categories?type=electronics'>
            <img
              className='w-full h-60 object-cover brightness-75 
              hover:brightness-50 duration-500 cursor-pointer'
              src={img3}
              alt="Electronics"
            />
            <span
              className='absolute bottom-5 left-3 cursor-pointer'
            >Electronics</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default HomeMain