import React, { useState } from 'react'

export default function ColorSelector() {
        const [activecolor,setactivecolor] = useState('');
        const colors = [
                'bg-red-500',
                'bg-blue-500',
                'bg-yellow-500',
        ]
        const handleClick = (color) =>{
                setactivecolor(color);
        }
  return (
    <>
      <p className=' font-ChakraPetch flex my-5 text-xl flex-col sm:flex-row'>
                  <div className=' text-black-500  font-bold my-auto mr-5 text-[clamp(0.9rem,1.1vw,1.2rem)] uppercase'>Color</div> 
                  <div className="box flex gap-2">
                        { colors.map((color ,index)=>
                        <div key={index} className={` relative h-[clamp(2rem,2.2vw,3rem)] w-[clamp(2rem,2.5vw,3rem)] cursor-pointer rounded-md ${color} ${activecolor === color? 'before:absolute before:h-[50%] before:w-[50%] before:rounded-full before:bg-white before:top-1/4 before:left-1/4 before: opacity-60 border-2 border-black':""}`} onClick={()=>handleClick(color)}>
                        </div>
                        )
}
                  </div>
        </p>
        
    </>
  )
}
