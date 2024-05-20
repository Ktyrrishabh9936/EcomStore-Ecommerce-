import React from 'react';
import { MainCarausel ,FirstSectionCarausel,CategorySectionCarausel, SecondSectionCarausel, Multicarausel, ReactSlickCarousel, ReactSlick1} from '../components/carausel/carausel';
import Footer from '../components/footer/footer';
import Navbar from '../components/navgation/navigaton';
import { useSelector } from 'react-redux';
export default function HomePage() {


  return (
        <div className=''>
      <Navbar/>
      <div>
      <MainCarausel/>
      </div>
      <div>
      <CategorySectionCarausel/>
      </div>
      <FirstSectionCarausel/>
      <ReactSlick1/>
      <ReactSlickCarousel/>
      <Multicarausel/>
      <Footer/>
      </div>
  )
}
