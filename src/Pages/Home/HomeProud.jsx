import React from 'react'
import { Link } from 'react-router-dom'

import { getProudProds } from '../../api'

const prods = await getProudProds()

const HomeProud = () => {
  const productElements = prods.map(prod => (
    <Link
      to={`/categories/${prod.id}`}
      key={prod.id}
    >
      <div className='border-2 border-gray-300 hover:border-black'>
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
      <div className='grid gap-5 lg:grid-cols-4'>
        {productElements}
      </div>
    </section>
  )
}

export default HomeProud