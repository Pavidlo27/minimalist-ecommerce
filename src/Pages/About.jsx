import React from 'react'

import HomeProud from './Home/HomeProud'

const About = () => {
  return (
    <div className='pb-10'>
      <h1 className='text-3xl font-semibold'>Where Comfort Meets Style</h1>
      <p className='my-10'>
        Welcome, your ultimate destination for all your
        home and personal needs! Whether you're looking to
        upgrade your living space with stylish furniture,
        enhance your kitchen with the latest gadgets, or
        revamp your skincare routine, we've got you covered.
        <br />
        Explore our extensive collection of furniture,
        ranging from cozy sofas and elegant dining sets
        to practical storage solutions and trendy decor
        pieces. With a variety of styles to suit every
        taste and budget, you're sure to find the perfect
        pieces to transform your home into your dream space.
        <br />
        <br />
        Shop with confidence knowing that we prioritize
        quality, affordability, and customer satisfaction
        above all else. With fast shipping, easy returns,
        and exceptional customer service, we strive to make
        your shopping experience as seamless and enjoyable
        as possible.
        <br />
        Start browsing now and discover endless
        possibilities to elevate your home and enhance your
        lifestyle with us!
      </p>
      <HomeProud />
    </div>
  )
}

export default About