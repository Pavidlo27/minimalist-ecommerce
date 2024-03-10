import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import GoToTop from './GoToTop'

const Layout = () => {
  return (
    <div>
      <GoToTop />
      <Header />
      <main className='p-5 lg:px-14 lg:pt-0 overflow-hidden'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout