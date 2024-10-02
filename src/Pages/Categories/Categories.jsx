import React from 'react'
import { getProds } from '../../api'
import { Await, Link, defer, useLoaderData, useSearchParams } from 'react-router-dom'
import SkeletonCategories from './SkeletonCategories'
export function loader() {
  return defer({ prods: getProds() })
}
const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dataPromise = useLoaderData()

  const typeFilter = searchParams.get('type')
  const searchFilter = searchParams.get('search') || '';

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
        prevParams.delete('search')
      } else {
        prevParams.set(key, value)
        prevParams.delete('search')
      }
      return prevParams
    })
  }

  function renderProdElements(prods) {
    const filteredProductsBySearch = prods.filter(product =>
      product.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    const filteredProductsByType = typeFilter
      ? prods.filter(prod => prod.type === typeFilter)
      : prods

    const displayedProds = searchFilter
      ? filteredProductsBySearch
      : filteredProductsByType

    const productElements = displayedProds.map(prod => (
      <Link
        to={prod.id}
        key={prod.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}
        data-aos='fade-up'
      >
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
      <>
        <div className='my-10 flex flex-wrap gap-3 justify-center'>
          <button
            className={`px-5 py-1 border-2  ${typeFilter === null && searchFilter === '' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', null)}
          >All</button>
          <button
            className={`px-5 py-1 border-2  ${typeFilter === 'furnitures' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', 'furnitures')}
          >Furniture</button>
          <button
            className={`px-5 py-1 border-2  ${typeFilter === 'electronics' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', 'electronics')}
          >Electronics</button>
          <button
            className={`px-5 py-1 border-2  ${typeFilter === 'lamps' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', 'lamps')}
          >Lamps</button>
          <button
            className={`px-5 py-1 border-2  ${typeFilter === 'kitchen' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', 'kitchen')}
          >Kitchen</button>
          <button
            className={`px-5 py-1 border-2 ${typeFilter === 'chairs' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', 'chairs')}
          >Chairs</button>
          <button
            className={`px-5 py-1 border-2 ${typeFilter === 'skin care' ? 'border-black' : ''}`}
            onClick={() => handleFilterChange('type', 'skin care')}
          >Skin Care</button>
        </div >
        <div className='relative grid gap-3 lg:grid-cols-4'>
          {productElements.length > 0
            ? productElements
            : <p className=' absolute left-0 right-0 text-center'>No products found for '{searchFilter}'</p>}
        </div>
      </>
    )
  }

  return (
    <div className='min-h-screen'>
      <h1
        className='w-fit text-3xl font-semibold m-auto'
      >
        {searchFilter ? searchFilter.toUpperCase() : (typeFilter ? typeFilter.toUpperCase() : 'ALL')}
      </h1>
      <React.Suspense fallback={<SkeletonCategories />}>
        <Await resolve={dataPromise.prods}>
          {renderProdElements}
        </Await>
      </React.Suspense>
    </div>
  )
}

export default Categories