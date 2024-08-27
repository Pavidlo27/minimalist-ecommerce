import React from 'react'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  return (
    <section className='mb-20'>
      <ul className='grid grid-cols-2 grid-rows-2 gap-3 text-2xl text-white font-semibold
      lg:grid-cols-[2fr_1fr_1fr] lg:text-4xl'>
        <li className='relative lg:row-start-1 lg:row-end-3' data-aos="zoom-in">
          <Link to='categories' >
            <img
              className='w-full h-60 lg:h-[492px] object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
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
              className='w-full h-60 lg:h-[492px] object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
              src={img2}
              alt="Skincare"
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