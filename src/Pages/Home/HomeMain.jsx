import React from 'react'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  return (
    <section className='mb-20'>
      <ul className='grid grid-cols-2 grid-rows-2 gap-3 text-3xl text-white font-semibold'>
        <li className='relative'>
          <Link to='categories'>
            <img
              className='w-full h-60 object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
              src={img1}
              alt=""
            />
            <span
              className='absolute bottom-5 left-5 cursor-pointer'
            >Live Comfortably</span>
          </Link>
        </li>
        <li className='relative'>
          <Link to='categories?type=skin care'>
            <img
              className='w-full h-60 object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
              src={img2}
              alt=""
            />
            <span
              className='absolute bottom-5 left-5 cursor-pointer'
            >Skincare</span>
          </Link>
        </li>
        <li className='relative'>
          <Link to='categories?type=kitchen'>
            <img
              className='w-full h-60 object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
              src={img4}
              alt=""
            />
            <span
              className='absolute bottom-5 left-5 cursor-pointer'
            >Kitchen</span>
          </Link>
        </li>
        <li className='relative'>
          <Link to='categories?type=electronics'>
            <img
              className='w-full h-60 object-cover brightness-75 hover:brightness-50 duration-500 cursor-pointer'
              src={img3}
              alt=""
            />
            <span
              className='absolute bottom-5 left-5 cursor-pointer'
            >Electronics</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default HomeMain