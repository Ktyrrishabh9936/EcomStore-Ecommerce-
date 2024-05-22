import React from 'react'
import SearchBar from '../components/navgation/searchBarPage'
import { ArrowBack } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
export default function SearchPage() {
        const navigate = useNavigate();
  return (
    <>
    <div className="w-[100vw] h-[100vh] mt-2 px-2 flex">
        <span onClick={()=>navigate(-1)} className='pr-2 py-2'>
        <ArrowBack />
        </span>
      <SearchBar autoFocus={true} className="w-full py-2 px-5 border border-gray-300 rounded-full focus:rounded-md outline-none border-none h-min pr-12 "/>
      </div>
    </>
  )
}
