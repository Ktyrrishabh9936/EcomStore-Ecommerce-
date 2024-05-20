import React, { useState } from 'react'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Navlinks from './navlinks';
import {navigation} from './navLinksData'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';
import { Shop } from '@mui/icons-material';
export default function Navbar() {
  const theme = useSelector((state)=>state.webReducer.Theme);
  const [isOpen,setisOpen] = useState(false);
  function toggleSideBar(){
    setisOpen(!isOpen);
  }
  return (
    <div className='flex flex-col md:flex-row  w-full justify-between py-2 ' style={{backgroundColor:colors[theme][900]}}>
      <div className=" flex px-2  justify-between  ">
        <div className="flex items-center gap-1">
          <Shop fontSize='large'  style={{color:colors[theme][500]}}/>
          <div className="font-display   text-xl text-white">X-Mart</div>
        </div>
        <Navlinks toggleSideBar={toggleSideBar}/>
        </div>

        <div className="  gap-2 my-auto  hidden ">
         {/* <Input placeholder='Type here to search' className="bg-slate-100 border-[]" /> */}
         <input type="text"  className='h-9 outline outline-1 rounded-md outline-grey-200 hover:outline-black focus:outline-2 px-2 w-full' placeholder='Type here to search'/>
          <Button className='h-9' variant='contained' style={{backgroundColor:'black'}} ><SearchIcon color='white'/></Button>
        </div>

        {/* SideBar code  */}
        <div className={` absolute z-10 top-0 duration-500 w-[100%]  bg-slate-100  ${isOpen?"left-0":"left-[-100%]"}`}>
          <div className=" flex p-2 justify-between">
          <div className="flex items-center gap-1">
          <Shop fontSize='large'  style={{color:colors[theme][500]}}/>
          <div className="font-display   text-xl text-blue-950">X-Mart</div>
        </div>

        <div className="p-3 float-right" onClick={toggleSideBar}>
          <CloseIcon  style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}/>
        </div>
        </div>
        <ul className="flex gap-2 p-7 flex-col">
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
