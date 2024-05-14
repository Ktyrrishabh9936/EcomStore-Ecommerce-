import React from 'react'
import { Products } from '../carausel/ItemData';
import Star from './Star';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import { ArrowBack, ArrowForward} from '@mui/icons-material';
import { Button } from '@mui/material';
export default function SimilarProducts() {
        const SimilarProductsItem = Products.map((item,index)=>{
          return <div className=" box p-1 md:p-2 w-full m-auto rounded-lg " key={index} >
            <div className='bg-white  '>
            <div className=' h-[clamp(10rem,15vw,24rem)] overflow-hidden '>
            <img className='object-cover object-top w-full h-full rounded-lg  ' src={item.image.main} alt="" />
            </div>
            <div className="p-2 mt-2 sm:mt-0  rounded-md ">
            <h1 className='font-sans font-medium text-clamp-p line-clamp-1'>{item.title}</h1>
              <Star fontSize='inherit' rating={2.3}/>
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
            partialVisibilityGutter:30,
          },
          iPad: {
            breakpoint: { max: 1024, min: 769},
            items: 4,
            slidesToSlide: 4, // optional, default to 1.
            partialVisibilityGutter:23,
          },
          tablet: {
            breakpoint: { max: 768, min: 481},
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
            partialVisibilityGutter:17,
          },
          mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 2,
            slidesToSlide: 2 ,// optional, default to 1.
            partialVisibilityGutter:13,
          }
        };
        const CustomRightArrow= ({onClick})=>{
                return <Button onClick={onClick} style={{background:'white',height:'clamp(3rem,4vw,4rem)',width:'clamp(2rem,3vw,4rem)',color:'purple',cursor:'pointer',border:'3px solid purple',zIndex:'2',position:'absolute', right:'20px',opacity:'0.7'}}><ArrowForward/></Button>
        }
        const CustomLeftArrow= ({onClick})=>{
                return <Button onClick={onClick} style={{background:'white',height:'clamp(3rem,4vw,4rem)',width:'clamp(2rem,3vw,4rem)',color:'purple',cursor:'pointer',border:'3px solid purple',zIndex:'2',position:'absolute', left:'20px', opacity:'0.7'}}><ArrowBack/></Button>
        }
        return (
            <div className=' relative w-full h-full pt-3 md:p-3 flex ml-4 '>
            <Carousel
            partialVisbile={true}
            centerMode={false}
        swipeable={["tablet", "mobile",'iPad'].some((e)=> {return (deviceType === e) })}
        draggable={true}
        responsive={responsive}
        ssr={true} 
        // infinite={true}
        keyBoardControl={true}
        customRightArrow={<CustomRightArrow/>}
        customLeftArrow={<CustomLeftArrow/>}
        // arrows={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile",'iPad']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass=""
      
      >
        {SimilarProductsItem}
      </Carousel>
          </div>
        )
      }
      