import React, { useState } from 'react'

export default function SizeSelector() {
        const [activesize,setactivesize] = useState('');
        const Sizes = ['XS','S','M','L','XL', '2XL', '3XL']
        const handleClick = (size) =>{
                setactivesize(size);
        }
  return (
    <>
      <p className=' font-ChakraPetch flex my-5 flex-col sm:flex-row '>
                  <div className=' text-black-500 font-bold my-auto mr-5 text-[clamp(0.9rem,1.1vw,1.2rem)] uppercase mb-1'>Size</div> 
                  <div className="box flex gap-1 text-[clamp(0.7rem,1vw,1.2rem)] flex-wrap">
                        { Sizes.map((size ,index)=>
                        <div key={index} className={` my-auto cursor-pointer rounded-md uppercase font-ChakraPetch border-2  py-2 px-3 bg-slate-100 ${activesize === size? ' text-purple-500 border-purple-500':" border-b-rose-950"}`} onClick={()=>handleClick(size)}>
                                {size}
                        </div>
                        )
}
                  </div>
        </p>
        
    </>
  )
}
