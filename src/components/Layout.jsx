import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import GoToTop from './common/GoToTop'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import { Toaster } from './ui/sonner'
import Preloader from './common/Preloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Layout = () => {

  //AOS initialization 
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <ShoppingCartProvider>
      <Preloader />
      <GoToTop />
      <Header />
      <main className='px-2 pt-20 mb-10 lg:px-14 md:pt-24 overflow-hidden'>
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </ShoppingCartProvider>
  )
}

export default Layout