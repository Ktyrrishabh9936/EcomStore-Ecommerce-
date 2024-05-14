import { Home } from '@mui/icons-material';
import React, { useState } from 'react'

export default function AddressSelector() {
        const [activeaddress,setactiveaddress] = useState('');
        const address = [
                {
                        type:"Home",
                        Location:"Bilhaur Kanpur Nagar,Uttar Pradesh-209202",
                        Phone:6576756754
                },
                {
                        type:"Home",
                        Location:"Bilhaur Kanpur Nagar,Uttar Pradesh-209202",
                        Phone:6576756754
                },
                {
                        type:"Home",
                        Location:"Bilhaur Kanpur Nagar,Uttar Pradesh-209202",
                        Phone:6576756754
                },
        ]
        const handleClick = (address) =>{
                setactiveaddress(address);
        }
  return (
        <>
                    <div className="box flex flex-col gap-1 text-[clamp(0.7rem,1vw,1.2rem)] flex-wrap p-1">
                          { address.map((add ,index)=>
                          <div key={index} className={` my-auto cursor-pointer rounded-md font-ChakraPetch  flex  py-2 px-3 bg-slate-100 ${index === activeaddress? ' text-purple-700 border-2 border-purple-500 ':" border-b-rose-950"}`} onClick={()=>handleClick(index)}>
                                  <div className=" rounded-full p-4 bg-purple-300  h-min">
                                        <Home/>
                                  </div>
                                  <div className="pl-3 my-auto ">
                                  <h5 className=' text-clamp-h6 font-semibold '>{add.Phone}</h5>
                                  <p className=' text-clamp-p leading-4 line-clamp-2'>{add.Location}</p>
                                  </div>
                          </div>
                          )
  }
                    </div>        
      </>
  )
}


