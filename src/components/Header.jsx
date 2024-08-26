import React from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <header className='p-5 lg:px-14 flex justify-between items-center'>
      <Link to='/' className='logo-header'>
        <img className='w-16 sm:w-20' src={logo} alt="logo" />
      </Link>
      <nav className='grid grid-flow-col gap-3 lg:gap-5 items-center text-xl'>
        <NavLink
          to='categories'
          className='hover:underline'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          CATEGORIES
        </NavLink>
        <NavLink
          to='about'
          className='hover:underline'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          ABOUT
        </NavLink>
        <NavLink
          to='contact'
          className='hover:underline hidden md:block'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          CONTACT US
        </NavLink>
        <div className='relative '>
          <FontAwesomeIcon className='cursor-pointer' onClick={openCart} icon={faCartShopping} />
          {cartQuantity > 0 && (
            <div className='absolute rounded-full bottom-[-30%] right-[-50%] bg-red-600 w-5 h-5 flex justify-center items-center text-white text-xs'>{cartQuantity}</div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header