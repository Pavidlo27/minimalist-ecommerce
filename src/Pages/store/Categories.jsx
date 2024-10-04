import React from 'react'

const Categories = ({ typeFilter, searchFilter, handleFilterChange }) => {
  return (
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
  )
}

export default Categories