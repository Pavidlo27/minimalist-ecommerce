import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cart } = useShoppingCart();

  const totalPrice = cart.reduce((total, cartItem) => {
    const item = cart.find(i => i.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  return (
    <>
      {/* Overlay to close the cart when clicked */}
      {isOpen &&
        <div
          onClick={closeCart}
          className={`fixed inset-0 w-full bg-black bg-opacity-70 z-40`}
        ></div>
      }

      {/* Shopping cart panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-5/12  px-2 py-4 md:p-10 pb-5 overflow-y-auto flex flex-col justify-between bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
      >
        <div>
          {/* Close button */}
          <div className="flex justify-between">
            <h1 className='text-2xl'>Cart</h1>
            <span onClick={closeCart} className="cursor-pointer text-xl text-gray-500">
              Close
            </span>
          </div>
          {/* Cart content goes here */}
          {cart.length === 0 ? <p className='text-2xl mt-20 text-center text-gray-500'>Cart is empty</p> : null}
          <CartItem cart={cart} />
        </div>

        {/* Total price */}
        {cart.length > 0 && (
          <div className='flex flex-col justify-between gap-5 mb-5'>
            <div className='text-center text-2xl mt-5'>
              Total: {totalPrice}.00$
            </div>
            <Link
              to='/contact'
              onClick={closeCart}
            >
              <button className='w-full h-14 text-xl text-white bg-[#b6002c]'>BUY NOW</button>
            </Link>
          </div>
        )}
      </div>
    </>

  );
};

export default ShoppingCart;
