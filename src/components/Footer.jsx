import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='p-5 min-h-40 flex flex-col justify-center items-center bg-black text-lg text-white '>
      <div className='grid md:grid-flow-col md:gap-10 text-center'>
        <Link to='about'>About</Link>
        <a href="/#faqs">FAQs</a>
        <Link to='about'>News</Link>
        <Link to='contact'>Contact Us</Link>
      </div>
      <span className='mt-5'>Design by Abderraouf</span>
    </footer>
  )
}

export default Footer