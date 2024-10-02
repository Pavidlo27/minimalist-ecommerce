import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({ cart }) => {

  const { removeFromCart } = useShoppingCart()

  const cartMap = cart.map((item) => (
    <div key={item.id} className='relative flex justify-start mt-5 border-2 p-2 '>
      <img src={item.firstImg} alt="item-image" width={100} />
      <div className='flex flex-col ml-5 justify-center'>
        <div className='flex items-center'>
          <p className='text-xl  bg-slate-0'>{item.name}</p>
          <p className='absolute left-2 top-0 flex items-end ml-2 h-8 text-gray-500'>x{item.quantity}</p>
        </div>
        <div className=' text-xl'>
          <span className='text-xl text-gray-500'>{item.price * item.quantity}.00$</span>
        </div>
      </div>
      <span onClick={() => removeFromCart(item.id)} className='ml-auto  p-2  flex items-center cursor-pointer text-gray-400'>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </div>
  ))
  return (
    <div>
      {cartMap}
    </div>
  )
}

export default CartItem