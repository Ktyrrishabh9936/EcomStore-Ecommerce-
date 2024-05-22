import React, { useState } from 'react'
import SearchBar from "./searchBarPage";
import Navlinks from './navlinks';
import {navigation} from './navLinksData'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';
import { Person, Shop, ShoppingCartCheckout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const theme = useSelector((state)=>state.webReducer.Theme);
  const [isOpen,setisOpen] = useState(false);
  function toggleSideBar(){
    setisOpen(!isOpen);
  }
  return (
    <div className='flex flex-col md:flex-row  w-full justify-between py-2 whitespace-nowrap ' style={{backgroundColor:colors[theme][900]}}>
      <div className=" flex px-2 gap-7 justify-between  ">
        <div className="flex items-center gap-1">
          <Shop fontSize='large'  style={{color:colors[theme][500]}}/>
          <div className="font-display   text-xl text-white">X-Mart</div>
        </div>
        <Navlinks toggleSideBar={toggleSideBar}/>
        </div>

        <div className="relative w-[50%] gap-2 my-auto  hidden md:block">
         <SearchBar className=" transition-[border-radius] w-full py-2 px-5 border border-gray-300 rounded-full focus:rounded-md focus:outline-none h-min pr-12 " />
        </div>

        <span className="hidden md:block">
      <div className="px-2 text-white flex items-center gap-2  ">
      <div className="relative px-2 before:absolute before:-top-2 before:left-[23px] before:content-['10']  before:px-1 before:rounded-full before:text-xs before:bg-white before:text-black" >
            <ShoppingCartCheckout />
          </div>
          <Link to='/register'>
          <div className="  flex items-center border-2 bg-black text-xs border-white rounded-full pt-0.5 pb-1 px-1 mx-1">
            <p className='w-min '><Person/></p>
            <p className='pr-2'>Sign In</p>
          </div>
          </Link>
        </div>
          </span>

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
                  <h3 className='text-black ml-3'> {section.name}</h3>
                  <ul className='ml-7'>
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
