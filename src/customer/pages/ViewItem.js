import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Autoplay,EffectCoverflow,Zoom, Scrollbar, A11y} from 'swiper/modules'
import { Container, Dialog, Pagination } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
export default function ViewItem() {
        const img = ['/img/jelly.webp','/img/eshoplogo.png','/img/property-1.jpg','/img/property-2.jpg','/img/property-3.jpg']
  return (
    <div className='    px-3 py-5'>
      <h1 className=' my-3'>good Product</h1>
      <div className=" bg-slate-400 rounded-md">
      <Container sx={{p:5}}>
        <Swiper modules={[Navigation,Autoplay,EffectCoverflow,Zoom,Scrollbar,A11y]}
        centeredSlides
        slidesPerView={2}
        grabCursor
        navigation
        pagination={{clickable:true}}
        zoom
        effect='coverflow'
        coverflowEffect={{
                rotate:50,
                stretch:0,
                depth:100,
                modifier:1,
                slideShadows:true
        }}
        >
        {img.map((i)=>{
                return <SwiperSlide key={i}>
                        <div className='swiper-zoom-container'>
                        <img src={i} alt="" />
                        </div>
                </SwiperSlide>
        })}
        </Swiper>
        </Container>
      </div>
    </div>
  )
}
