import React from 'react'
import { Person } from '@mui/icons-material'

export default function Review({name,review,type,rate}) {
  return (
        <div className="shadow-lg bg-zinc-200 m-2">
    <div className='flex items-center py-3 px-2'>
      <span  className="    font-Teko text-center  font-thin uppercase  rounded-full " ><Person sx={{fontSize:'clamp(1.5rem,3vw,3rem)',opacity:'0.7'}}/></span>
      <div className='pl-2'>
      <h3 className=' font-semibold  text-clamp-h6 opacity-80 font-ChakraPetch'>{name}</h3>
      <p className=" text-gray-600 text-[clamp(0.8rem,0.9vw,1rem)] font-Agbalumo">Posted on 19 April 2020</p>
      </div>
    </div>
    <div >
      <p className=" bg-black w-full py-1">
        <span className='ml-5 w-min px-5 relative p-1 bg-purple-600 text-yellow-50 rounded-r-full before:absolute before:w-6 before:h-6 before:bg-black before:transform before:rotate-45 before:-left-4 before:rounded-md'>{type}</span>
        </p>
    <p className="p-5 py-1 text-clamp-p font-Poppins">{review}</p>
    </div>
    </div>
  )
}
