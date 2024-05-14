import React from 'react'
import Navbar from '../components/navgation/navigaton'
import Filter from '../components/searchProduct/Filter'
import Clean from '../components/searchProduct/Clean'

export default function SearchProductPage() {
  return (
    <div className='h-[100vh]'>
      <Navbar/>
      <Filter/>
      {/* <Clean/> */}
    </div>
  )
}
