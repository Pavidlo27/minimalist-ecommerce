import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='p-5 h-40 flex flex-col justify-center items-center bg-black text-lg text-white '>
      <div className='grid grid-flow-col gap-10'>
        <Link to='about'>About</Link>
        {/* <Link to='#faqs'>FAQs</Link> */}
        <a href="/#faqs">FAQs</a>
        <Link to='about'>News</Link>
        <Link to='contact'>Contact Us</Link>
      </div>
      <span className='mt-5'>Design by Abderraouf</span>
    </footer>
  )
}

export default Footer