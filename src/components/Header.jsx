import React from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <header className='p-5 lg:px-14 flex justify-between items-center'>
      <Link to='/'>
        <img className='w-20' src={logo} alt="logo" />
      </Link>
      <nav className='grid grid-flow-col gap-3 lg:gap-5 items-center text-xl'>
        <NavLink
          to='categories'
          className='hover:underline hover:font-bold'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          CATEGORIES
        </NavLink>
        <NavLink
          to='about'
          className='hover:underline hover:font-bold'
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          ABOUT
        </NavLink>
        <FontAwesomeIcon icon={faCartShopping} />
      </nav>
    </header>
  )
}

export default Header