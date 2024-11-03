// import { discountPrice } from '@/lib/utils'
import { Option } from '@/types'
import React from 'react'

export default function ProductPrice({option}: {option: Option}) {
 
  return (
    

<div className="flex justify-start items-center gap-2 pr-4 pt-0 w-full">
        <p className="text-primary-500 text-xl font-bold">Price:</p>
        {option.discount > 0 &&
          <p className="text-primary-500 text-xl font-bold">${option.price - (option.price * option.discount / 100)} </p>
        }
        <p className={`${option.discount > 0
          ? "line-through text-gray-400 text-lg pl-1"
          : "text-primary-500 text-xl font-bold"
          }`}
        >${option.price}</p> 
         {option.discount > 0 && <p className='text-green-600 font-medium text-base'>You saved: ${option.price - (option.price - (option.price * option.discount / 100))}</p>}
      </div> 
    
  )
}
