import React from 'react'
import { Link } from 'react-router-dom'

const HomeProud = ({ products }) => {
  console.log(products)

  const productElements = products.map(prod => (
    <Link to={`categories/${prod.id}`}>
      <div key={prod.id} className='border-2 border-gray-300 hover:border-black'>
        <img src={prod.firstImg} alt="" />
        <div className='p-3'>
          <h3 className='text-lg'>{prod.name}</h3>
          <p className='text-lg font-semibold'>{prod.price}.00$</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h2 className='my-10 text-2xl font-semibold'>Products we are proud of</h2>
      <div className='grid gap-5'>
        {productElements}
      </div>
    </section>
  )
}

export default HomeProud