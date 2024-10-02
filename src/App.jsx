import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import Categories, { loader as categoriesLoader } from './Pages/categories/Categories.jsx'
import About from './Pages/About'
import ProductDetail, { loader as productDetailLoader } from './Pages/categories/ProductDetail'
import NotFound from './Pages/NotFound'
import Error from './components/Error'

import './App.css'
import ContactUs from './Pages/contact/Index'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        index
        element={<Home />}
      />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route
        path='categories'
        element={<Categories />}
        loader={categoriesLoader}
        errorElement={<Error />}
      />
      <Route
        path='categories/:id'
        element={<ProductDetail />}
        loader={productDetailLoader}
        errorElement={<Error />}
      />
      <Route path='*' element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App