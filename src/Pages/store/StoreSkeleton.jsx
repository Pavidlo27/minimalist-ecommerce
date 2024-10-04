import React from 'react'
import { Skeleton } from '../../components/ui/skeleton'

const StoreSkeleton = () => {
  return (
    <div className='my-10 flex flex-wrap gap-3 justify-center'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <Skeleton className={`px-5 py-1 w-32 h-6`} />
        </div>
      ))}

      <div className='grid gap-5 grid-cols-2 lg:grid-cols-4 mt-5'>
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
    </div>

  )
}

export default StoreSkeleton