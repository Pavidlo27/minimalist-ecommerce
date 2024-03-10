import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='p-5 h-40 flex flex-col justify-center items-center bg-black text-lg text-white '>
      <div className='grid grid-flow-col gap-10'>
        <Link to='about'>About</Link>
        <a href='#faqs'>FAQs</a>
        <a href=''>News</a>
        <a href=''>Contact Us</a>
      </div>
      <span className='mt-5'>Design by Abderraouf</span>
    </footer>
  )
}

export default Footer