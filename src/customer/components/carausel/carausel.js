import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarauselData } from './mainCarauselData';
import {Products} from './ItemData'
import { Button } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowRight from '@mui/icons-material/ArrowRight';
// import 'react-alice-carousel/lib/react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import Star from '../ViewProduct/Star';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowCircleRightSharp, ArrowForward } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';
import colors from 'tailwindcss/colors';
import { Link } from 'react-router-dom';
const handleDragStart = (e) => e.preventDefault();
const Mainitems = MainCarauselData.map((item)=><div className="  h-full px-2 sm:px-3  "> <img className="rounded-md  cursor-pointer h-full w-full" src={item.image} onDragStart={handleDragStart} role="presentation" /> </div>  )
export const MainCarausel = () => {
  const theme = useSelector((state)=>state.webReducer.Theme);
  const responsive = {
    0:{items:1},
    1024:{items:2},
};
  return (
    <div className=" p-2 sm:p-3 " style={{backgroundColor:colors[theme][50]}}>
    <AliceCarousel mouseTracking items={Mainitems} responsive={responsive} disableButtonsControls disableDotsControls  
    // autoPlay autoPlayInterval={1800} 
    infinite 
    // paddingRight={500}
    />
</div>
  );
}



export const CategorySectionCarausel = ()=>{
  const categoryCarauselItem = Products.map((item)=>{
    return ( <>
    <div class="w-full lg:w-[90%] p-1    lg:bg-white  dark:bg-gray-800 dark:border-gray-700 lg:p-4">
      <Link to='/viewProduct'>
        <div class="flex flex-col items-center  ">
          <div className=' h-[clamp(100,5vw,250)] w-[clamp(100,5vw,250)] rounded-full lg:rounded-none overflow-hidden '>
            <img class="  rounded-full" src="/img/e-Logo.png" alt="Bonnie image"/>
            </div>
            <span class=" text-gray-500 dark:text-gray-400 text-center text-clamp-h6 hidden md:block">Visual Designer</span>
        </div>
        </Link>
    </div>
    </>)
  })
  const devicewidth = window.innerWidth;
  const theme = useSelector((state)=>state.webReducer.Theme);
  const responsive = {
    0: { items: 5 },
    568: { items: 6 },
    827: { items: 7 },
    1109:{items: 7},
    1377: { items: 8},
    1600:{items:8},
};
 const slidePrev = ()=>{ return <Button  sx={{zIndex:'1', height:'100%', transform:'rotate(180deg)', borderTopLeftRadius:'40%',borderBottomLeftRadius:'40%',overflow:'hidden',position:'absolute', top:'0',left:'-55px'}} > <ArrowCircleRightOutlinedIcon sx={{fontSize:'40px'}}/> </Button>}
 const slideNext = ()=>{return <Button sx={{zIndex:'1', height:'100%',right:'9px',borderTopLeftRadius:'40%',borderBottomLeftRadius:'40%',overflow:'hidden',position:'absolute', top:'0',right:'-40px'}}> <ArrowCircleRightOutlinedIcon sx={{fontSize:'40px'}}/> </Button> }

  return (
    <>
    <div className='carauselLayer relative w-full h-full p-3 flex mx-auto   border border-gray-200 rounded-lg shadow ' 
    style={{backgroundColor:colors[theme][50]}}
    >
      <div className="w-[84vw] mx-auto ">
    <AliceCarousel  mouseTracking items={categoryCarauselItem} infinite disableButtonsControls={devicewidth < 768}       responsive={responsive} renderPrevButton={slidePrev}  renderNextButton={slideNext} keyboardNavigation={true}  disableDotsControls/>
    </div>
    </div>
    </>

  )
}



const FirstCarauselItem = Products.map((item)=>{
  return <Link to='/viewProduct'>
  <div className="box p-2  m-auto ">
    <div className='rounded-lg h-[clamp(13rem,15vw,24rem)] overflow-hidden'>
    <img className='object-cover object-top w-full h-full' src={item.image.main} alt="" />
    </div>
    </div>
    </Link>
})
export const FirstSectionCarausel = ()=>{
  const devicewidth = window.innerWidth;
  const responsive = {
    0: { items: 1,numToSlide:1 },
    422: { items: 2,numToSlide:2 },
    827: { items: 3,numToSlide:3 },
    1109:{items: 4,numToSlide:4},
    1377: { items: 5,numToSlide:5},
    1600:{items:6,numToSlide:6},
};
 const slidePrev = ()=>{  return  <Button  variant='contained'  sx={{padding:'clamp(0.6rem,1vw,2rem)',minWidth:'0px',zIndex:10,transform:'rotate(180deg)', borderTopLeftRadius:'40%',borderBottomLeftRadius:'40%',overflow:'hidden',position:'absolute', top:'35%',left:'9px',backgroundColor:' rgb(126 34 206/0.8)',color:'white'}} > <ArrowCircleRightOutlinedIcon fontSize='large'/> </Button>}
 const slideNext = ()=>{return <Button variant='contained' sx={{padding:'clamp(0.6rem,1vw,2rem)',minWidth:'0px',zIndex:1,right:'0px',borderTopLeftRadius:'40%',borderBottomLeftRadius:'40%',overflow:'hidden',position:'absolute', top:'35%',backgroundColor:' rgb(126 34 206/0.8)',color:'white'}}> <ArrowCircleRightOutlinedIcon fontSize='large' /> </Button> }

  return (
    <>
    <div className='carauselLayer relative w-full h-full p-1 sm:p-3 flex'>

    <AliceCarousel mouseTracking items={FirstCarauselItem}  disableDotsControls  responsive={responsive}   renderPrevButton={slidePrev} renderNextButton={slideNext} keyboardNavigation={true} disableButtonsControls={devicewidth < 768}  paddingRight={50}/>
    </div>
    </>

  )
}





const SecondCarauselItem = Products.map((item,index)=>{
  return <div className="box p-1 sm:p-2 w-full  " key={index} >
    <Link to='/viewProduct'>
    <div className='bg-white rounded-t-lg rounded-b-md'>
    <div className=' h-[clamp(10rem,16vw,24rem)] '>
    <img className='object-cover object-top w-full h-full' src={item.image.main} alt="" />
    </div>
    <div className="p-1 sm:p-2 leading-5 sm:leading-6 md:leading-7">
    <h1 className='font-sans font-medium text-clamp-p line-clamp-1 leading-4'>{item.title}</h1>
      <Star fontSize='small' rating={2.3}/>
      <p className=' text-clamp-h5 text-green-800' >&#8377;{item.price}</p>
    </div>
    </div>
    </Link>
    </div>
})
export const SecondSectionCarausel = ()=>{
  const deviceType =  useSelector((state)=>state.webReducer.DeviceType);
  const responsive = {
    0: { items: 2},
    568: { items: 3 },
    827: { items: 4 },
    1109:{items: 5,itemsFit:'fill'},
    1377: { items: 6,itemsFit:'fill' },
    1600:{items:7},
};

 const slidePrev = ()=>{ return  <ArrowRight sx={{zIndex:'1', height:'20%',width:'50px', transform:'rotate(180deg)', overflow:'hidden',position:'absolute', top:'40%',left:'0px',fontSize:'20px',backgroundColor:' rgb(126 34 206/0.8)'}}/> }
 const slideNext = ()=>{return <ArrowRight sx={{zIndex:'1', height:'20%',width:'50px', overflow:'hidden',position:'absolute', top:'40%',right:'0px',fontSize:'20px',backgroundColor:' rgb(126 34 206/0.8)'}}/> }

  return (
    <>
    <div className='carauselLayer relative w-full h-full p-0 md:p-3 flex bg-gray-100 pl-2 gap-2'>

    <AliceCarousel mouseTracking items={SecondCarauselItem} controlsStrategy='responsive'   responsive={responsive} key="carousel" infinite renderPrevButton={slidePrev}  renderNextButton={slideNext}  
    disableButtonsControls={deviceType==='Mobile'||deviceType==='tablet'} disableDotsControls  />
    {/* <button onClick={()=>{setActiveIndex(activeIndex-2)}}><ArrowRight sx={{zIndex:'1', height:'20%',width:'50px', transform:'rotate(180deg)', overflow:'hidden',position:'absolute', top:'40%',left:'10px',fontSize:'20px',backgroundColor:' rgb(126 34 206/0.8)'}} /></button>
    <button style={{zIndex:'1', height:'20%',width:'50px', overflow:'hidden',position:'absolute', top:'40%',right:'10px',fontSize:'20px',backgroundColor:' rgb(126 34 206/0.8)'}} onClick={()=>{setActiveIndex(activeIndex+2);console.log(activeIndex)}}><ArrowRight /></button> */}

    </div>
    </>
  )
}


export const ReactSlick1 = ()=>{
  function PrevButton({style,onClick}){
    return(
      <Button  sx={{...style,padding:'clamp(0.6rem,1vw,2rem)',backgroundColor:'purple',minWidth:'0px',":hover":{backgroundColor:'purple'},position:'absolute',top:'45%',left:'-25px',zIndex:1}} variant='contained' onClick={onClick}>
      <ArrowBack className=' text-white'/>
      </Button>
    )
  }
  function NextButton({style,onClick}){
    return(
      <Button   sx={{...style,padding:'clamp(0.6rem,1vw,2rem)',minWidth:'0px',backgroundColor:'purple',":hover":{backgroundColor:'purple'},position:'absolute',top:'45%',right:'-20px',}} variant='contained' onClick={onClick} size='small'>
      {/* <div  style={{...style,display:'block', background:'green',borderRadius:'50%' ,height:'50px', width:'50px',position:'absolute',left:'4px',top:'-20px'}}  /> */}
      <ArrowForward className=' text-white'/>
      </Button>
    )
  }
  const settings = {
    infinite:true,
    arrows:true,
    slidesToShow:7,slidesToScroll:7,
    prevArrow:<PrevButton />,
    nextArrow:<NextButton  />,
    responsive:[
        {breakpoint:1600,settings:{slidesToShow:6,slidesToScroll:6}},
        {breakpoint:1377,settings:{slidesToShow:5,slidesToScroll:5}},
        {breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,}},
        {breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,arrows:false}},
        {breakpoint:568,settings:{slidesToShow:2,slidesToScroll:2,arrows:false}},
        {breakpoint:350,settings:{slidesToShow:1,slidesToScroll:1,arrows:false}},
    ]
  }
  return(<div className='bg-gray-100 py-5 px-1'>
  <div className='m-0 sm:m-3 md:m-5 lg:m-10 '>
  <Slider {...settings}  >
    {SecondCarauselItem}
  </Slider>
  </div>
  </div>);
}
export const ReactSlickCarousel = ()=>{
  function PrevArrow({style,onClick}){
    return(
      <Button  variant='outlined' sx={{...style,padding:'clamp(0.6rem,1vw,2rem)',minWidth:'0px',background:'skyblue',backgroundColor:'purple',":hover":{backgroundColor:'purple'},position:'absolute',top:'40%',left:'-20px',zIndex:2,borderRadius:'50%'}}  onClick={onClick} >
      <ArrowBack className=' text-white'/>
      </Button>
    )
  }
  function NextArrow({style,onClick}){
    return(
      <Button   sx={{...style,padding:'clamp(0.6rem,1vw,2rem)',minWidth:'0px',background:'skyblue',backgroundColor:'purple',":hover":{backgroundColor:'purple'},position:'absolute',top:'40%',right:'-20px',borderRadius:'50%'}} variant='outlined' onClick={onClick}>
      {/* <div  style={{...style,display:'block', background:'green',borderRadius:'50%' ,height:'50px', width:'50px',position:'absolute',left:'4px',top:'-20px'}}  /> */}
      <ArrowForward className=' text-white'/>
      </Button>
    )
  }
  const settings = {
    infinite:true,
    arrows:true,
    slidesToShow:7,slidesToScroll:7,
    prevArrow:<PrevArrow />,
    nextArrow:<NextArrow  />,
    // centerPadding:'40px',
    // centerMode:true,
    responsive:[
        {breakpoint:1600,settings:{slidesToShow:6,slidesToScroll:6}},
        {breakpoint:1377,settings:{slidesToShow:5,slidesToScroll:5}},
        {breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,}},
        {breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,arrows:false}},
        {breakpoint:568,settings:{slidesToShow:2,slidesToScroll:2,arrows:false}},
        {breakpoint:330,settings:{slidesToShow:1,slidesToScroll:1,arrows:false}},
    ]
  }
  return(<div className=''>
  <div className='md:m-10 '>
  <Slider {...settings}   >
    {SecondCarauselItem}
  </Slider>
  </div>
  </div>);
}



export const  Multicarausel = ()=> {
  const ThirdCarauselItem = Products.map((item,index)=>{
    return <div className=" box p-1 md:p-2 w-full m-auto rounded-md " key={index} >
      <div className='bg-white border border-spacing-5 rounded-lg '>
      <div className=' h-[clamp(10rem,15vw,24rem)] overflow-hidden '>
      <img className='object-cover object-top w-full h-full ' src={item.image.main} alt="" />
      </div>
      <div className="p-1 sm:p-2   leading-5 sm:leading-6 md:leading-7 bg-[#F1F1F1]">
      <h1 className='font-sans font-medium text-clamp-p line-clamp-2 leading-4'>{item.title}</h1>
        <Star color='purple' rating={2.3}/>
        <p className=' text-clamp-h5 text-green-800' >&#8377;{item.price}</p>
      </div>
      </div>
      </div>
  })
  const deviceType =  useSelector((state)=>state.webReducer.DeviceType);
  const responsive = {
      desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
      partialVisibilityGutter:40,
    },
    iPad: {
      breakpoint: { max: 1024, min: 769},
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
      partialVisibilityGutter:30,
    },
    tablet: {
      breakpoint: { max: 768, min: 481},
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter:20,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
      slidesToSlide: 2 ,// optional, default to 1.
      partialVisibilityGutter:17,
    }
  };
  return (
      <div className=' relative w-full h-full pt-3 md:p-3 flex ml-4 '>
        {/* {deviceType} */}
      <Carousel
      partialVisbile={true}
      centerMode={false}
  swipeable={["tablet", "mobile",'iPad'].some((e)=> {return (deviceType === e) })}
  draggable={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  // customTransition="all 0.5 ease-in-out"
  // transitionDuration={900}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile",'iPad']}
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass=""

>
  {ThirdCarauselItem}
</Carousel>
    </div>
  )
}





