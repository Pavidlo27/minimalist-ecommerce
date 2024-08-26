import React from 'react'
import { Skeleton } from './ui/skeleton'

const SkeletonCategories = () => {
  return (



    <div className='my-10 flex flex-wrap gap-3 justify-center'>
      <Skeleton className={`px-5 py-1 w-32 h-6`} />
      <Skeleton className={`px-5 py-1 w-32 h-6`} />
      <Skeleton className={`px-5 py-1 w-32 h-6`} />
      <Skeleton className={`px-5 py-1 w-32 h-6`} />
      <Skeleton className={`px-5 py-1 w-32 h-6`} />
      <Skeleton className={`px-5 py-1 w-32 h-6`} />

      <div className='grid gap-5 lg:grid-cols-4 mt-5'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} >
            <Skeleton className={`w-[300px] h-[350px]`} />
            <div className='p-3'>
              <Skeleton className='w-40 h-6' />
              <Skeleton className='w-32 h-6 mt-2' />
            </div>
          </div>
        ))}
      </div>
      {/* <button
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
        </div>
        <div className='grid gap-5 lg:grid-cols-4'>
          {productElements}
        </div> */}
    </div>

  )
}

export default SkeletonCategories