import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookMessenger, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Content = () => {
  return (
    <div className='flex flex-col mt-5  text-xl text-center'>
      <a href="mailto:minimaliststore@gmail.com"> minimaliststore@gmail.com </a>
      <span>+995 123 456 789</span>

      <h3 className='font-bold mt-5'>Westfield</h3>
      <p>233 North avenue E.</p>
      <p>Westfield, NJ 01010</p>

      <h3 className='font-bold mt-5'>Springfield</h3>
      <p>318 East avenue E.</p>
      <p>Springfield, NJ 01010</p>

      <h3 className='font-bold mt-5'>Our Socials</h3>
      <div className=' p-2 flex justify-center gap-3 text-3xl opacity-80'>
        <FontAwesomeIcon icon={faFacebook} className='' />
        <FontAwesomeIcon icon={faTwitter} className='' />
        <FontAwesomeIcon icon={faInstagram} className='' />
        <FontAwesomeIcon icon={faFacebookMessenger} className='' />
      </div>
    </div>
  )
}

export default Content