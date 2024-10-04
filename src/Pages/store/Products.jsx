import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ displayedProds, searchParams, searchFilter }) => {
  const productElements = displayedProds.map(prod => (
    <Link
      to={`/categories/${prod.id}`}
      key={prod.id}
      state={{
        search: `?${searchParams.toString()}`,
      }}
      data-aos="zoom-in-up"
    >
      <div className="border-2 border-gray-300 hover:border-black flex flex-col h-full">
        <img src={prod.firstImg} alt="product-image" />
        <div className="p-3 flex-grow flex flex-col">
          <h3 className="text-lg">{prod.name}</h3>
          <p className="text-lg font-semibold mt-auto">{prod.price}.00$</p>
        </div>
      </div>
    </Link>
  ))
  return (
    <div className='relative grid gap-3 grid-cols-2 lg:grid-cols-4'>
      {productElements.length > 0
        ? productElements
        : <p className=' absolute left-0 right-0 text-center'>No products found for '{searchFilter}'</p>}
    </div>
  )
}

export default Products