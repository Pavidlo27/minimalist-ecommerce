import React from 'react'
import { Skeleton } from '../../components/ui/skeleton'

const StoreSkeleton = () => {
  return (
    <div className='my-10 flex flex-wrap gap-3 justify-center'>
      <Skeleton className='px-5 py-1 w-[62px] h-8 border-2' />
      <Skeleton className='px-5 py-1 w-[107px] h-8 border-2' />
      <Skeleton className='px-5 py-1 w-[119px] h-8 border-2' />
      <Skeleton className='px-5 py-1 w-[89px] h-8 border-2' />
      <Skeleton className='px-5 py-1 w-[96px] h-8 border-2' />
      <Skeleton className='px-5 py-1 w-[87px] h-8 border-2' />
      <Skeleton className='px-5 py-1 w-[109px] h-8 border-2' />

      <div className='grid gap-3 grid-cols-2 lg:grid-cols-4 mt-8'>
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className='bg-white border-2 overflow-hidden'>
            <Skeleton className='w-[280px] h-48 md:h-[270px] rounded-none' />
            <div className='p-3'>
              <Skeleton className='w-40 h-6' />
              <Skeleton className='w-32 h-6 mt-2' />
            </div>
          </Skeleton>
        ))}
      </div>
    </div>

  )
}

export default StoreSkeleton