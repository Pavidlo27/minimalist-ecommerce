import React from 'react'
import MessageForm from './MessageForm'
import Content from './Content'
const ContactUs = () => {
  return (
    <div className='md:flex'>
      <div className='md:w-1/2'>
        <h2 className='text-4xl font-semibold'>Minimalist Store</h2>
        <Content />
      </div>
      <div className='md:w-1/2 mt-10 md:mt-0'>
        <h2 className='text-3xl font-semibold'>Contact Us</h2>
        <MessageForm />
      </div>
    </div>
  )
}

export default ContactUs