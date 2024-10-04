import React from 'react'
import { getProds } from '../../api'
import { Await, defer, useLoaderData, useSearchParams } from 'react-router-dom'
import Products from './Products'
import Categories from './Categories'
import StoreSkeleton from './StoreSkeleton'
export function loader() {
  return defer({ prods: getProds() })
}
const Store = () => {
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

    return (
      <>
        <Categories typeFilter={typeFilter} searchFilter={searchFilter} handleFilterChange={handleFilterChange} />
        <Products
          displayedProds={displayedProds}
          searchParams={searchParams}
          searchFilter={searchFilter}
        />
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
      <React.Suspense fallback={<StoreSkeleton />}>
        <Await resolve={dataPromise.prods}>
          {renderProdElements}
        </Await>
      </React.Suspense>
    </div>
  )
}

export default Store