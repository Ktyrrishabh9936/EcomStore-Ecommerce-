import React, { useState } from 'react'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Navlinks from './navlinks';
import {navigation} from './navLinksData'
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  const [isOpen,setisOpen] = useState(false);
  function toggleSideBar(){
    setisOpen(!isOpen);
  }
  return (
    <div className='flex flex-col md:flex-row bg-slate-700 w-full justify-between   text-violet-400  ' >
      <div className=" flex h-20 p-3  justify-between ">
        <div className="flex">
          <img src="img/e-Logo.png" alt="" />
          <div className="font-display my-auto mx-5 text-xl">X-Mart</div>
        </div>
        <Navlinks toggleSideBar={toggleSideBar}/>
        </div>

        <div className="  gap-2 my-auto p-2 sm:px-3 py-2 hidden ">
         {/* <Input placeholder='Type here to search' className="bg-slate-100 border-[]" /> */}
         <input type="text"  className='h-9 outline outline-1 rounded-md outline-grey-200 hover:outline-black focus:outline-2 px-2 w-full' placeholder='Type here to search'/>
          <Button className='h-9' variant='contained' style={{backgroundColor:'black'}} ><SearchIcon color='white'/></Button>
        </div>

        {/* SideBar code  */}
        <div className={` absolute z-10 top-0 duration-500 w-[100%] p-10 bg-red-600  ${isOpen?"left-0":"left-[-100%]"}`}>
          <div className="flex justify-between">
        <div className="flex h-12 ">
          <img src="img/e-Logo.png" alt="" />
          <div className="font-display my-auto mx-5 text-xl">X-Mart</div>
        </div>

        <div className="p-3" onClick={toggleSideBar}>
          <CloseIcon  style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}/>
        </div>
        </div>
        <ul className="flex gap-2 py-2 flex-col">
          <li className="font-sans font-bold">Home</li>
          {navigation.categories.map((category,i) => {
            return <li className="font-sans font-bold" key={i}> 
            <h1 className='font-sans bold'>{category.name}</h1>
            <div className="bg-white text-violet-400">
              {category.sections.map((section)=>{
                return <div className="">
                  <h3> {section.name}</h3>
                  <ul>
                    {section.items.map((item)=>{
                      return <li>{item.name}</li>
                    })}
                  </ul>
                </div>
              })}
            </div>
            </li>;

          })}
        </ul>
      </div>
    </div>
  )
}
