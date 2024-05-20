import { Home } from '@mui/icons-material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';

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
        const theme = useSelector((state)=>state.webReducer.Theme);
  return (
        <>
                    <div className="box flex flex-col gap-2 text-[clamp(0.7rem,1vw,1.2rem)] flex-wrap py-3 ">
                          { address.map((add ,index)=>
                          <div key={index} className={`bg-white my-auto cursor-pointer rounded-md font-ChakraPetch  flex  py-2 px-3 ${index === activeaddress? ' text-purple-700  shadow-md shadow-gray-400 ':" border-b-rose-950"}`} onClick={()=>handleClick(index)}>
                                  <div className=" rounded-full p-4   h-min" style={{background:colors[theme][200]}}>
                                        <Home/>
                                  </div>
                                  <div className="pl-3 my-auto ">
                                  <h5 className=' text-clamp-p font-semibold '>{add.Phone}</h5>
                                  <p className=' text-clamp-h6 leading-4 line-clamp-2'>{add.Location}</p>
                                  </div>
                          </div>
                          )
  }
                    </div>        
      </>
  )
}


