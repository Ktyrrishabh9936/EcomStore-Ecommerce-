import React from 'react'
import Navbar from '../components/navgation/navigaton';
 import ViewProduct from '../components/ViewProduct/ViewProduct';
import SimilarProducts from '../components/ViewProduct/SimilarProducts';
import Footer from '../components/footer/footer';
export default function ViewProductPage() {
  return (
    <div>
      <Navbar/>
      <ViewProduct/> 
      <SimilarProducts/>
      <Footer/>
    </div>
  )
}
