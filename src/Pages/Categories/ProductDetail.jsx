import React, { useState } from 'react'

import { getProd } from '../../api'
import { useLoaderData, useLocation, Link } from 'react-router-dom'

import ProductCarousel from './ProductCarousel'
import HomeCarousel from '../Home/HomeCarousel'
import { useShoppingCart } from '../../context/ShoppingCartContext'

export function loader({ params }) {
  return getProd(params.id)
}

const ProductDetail = () => {
  const product = useLoaderData()
  const location = useLocation()
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(product.price)

  const { addToCart } = useShoppingCart()

  function plus() {
    setQuantity(prev => prev + 1)
    setPrice(prev => prev + product.price)
  }
  function minus() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
      setPrice(prev => prev - product.price)
    }
  }

  const search = location.state?.search || "";

  return (
    <div className='pb-20'>
      <Link
        to={`..${search}`}
        relative="path"
        className='text-xl font-semibold hover:underline mt-5 mb-10 block'
      >&larr; <span>Back</span></Link>
      <h1 className=' text-center max-w-[310px] my-3 text-4xl font-bold m-auto'>{product.name}</h1>
      <div className='lg:flex'>
        <ProductCarousel product={product} />
        <div className='py-6 px-5 my-16 bg-[#e5e5e5] 
        lg:w-1/2 lg:px-16 lg:flex lg:flex-col lg:justify-center'>
          <p className='text-xl'>{product.description}</p>
          <div className='my-5 text-center text-2xl font-semibold'>
            <span>Quantity</span>
            <ul className='flex justify-center items-center my-5'>
              <li>
                <button
                  onClick={() => minus()}
                  disabled={quantity === 1}
                  className={`w-14 h-14 border-2 border-gray-300 active:border-black ${quantity === 1 && 'opacity-40'}`}
                >-</button>
              </li>
              <li className='w-14 h-14 border-y-2 border-gray-300 flex justify-center items-center'>{quantity}</li>
              <li>
                <button
                  onClick={() => plus()}
                  className='w-14 h-14 border-2 border-gray-300 active:border-black'
                >+</button>
              </li>
            </ul>
            <span className='mb-10 block'>{price}.00$</span>
            <button
              className='w-full h-14 text-xl my-5 border-2 border-black'
              onClick={() => addToCart(product, quantity)}
            >ADD TO CART</button>
            <button className='w-full h-14 text-xl text-white bg-[#b6002c]'>BUY NOW</button>
          </div>
        </div>
      </div>
      <ul className='mb-16 lg:flex lg:gap-10'>
        <li className='w-full p-5 bg-[#e5e5e5]'>
          <h3 className='text-2xl font-semibold'>Texture:</h3>
          <p>{product.texture}</p>
        </li>
        <li className='w-full p-5 my-5 bg-[#e5e5e5] lg:my-0'>
          <h3 className='text-2xl font-semibold'>Weight:</h3>
          <p>{product.weight}</p>
        </li>
        <li className='w-full p-5 bg-[#e5e5e5]'>
          <h3 className='text-2xl font-semibold'>Size:</h3>
          <p>{product.size}</p>
        </li>
      </ul>
      <HomeCarousel />
    </div>
  )
}

export default ProductDetail 