import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
        Warm feedback from{''}
            <span className='text-purple'> content clients</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards 
               items={testimonials}
               direction='right'
               speed='slow'
            />
        <div></div>    
        </div>
    </div>
  )
}

export default Clients