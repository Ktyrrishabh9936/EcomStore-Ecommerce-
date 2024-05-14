import React from 'react'
import HalfStar from '@mui/icons-material/StarHalf' 
import FaStar from '@mui/icons-material/Star'
import OutLinedStar from '@mui/icons-material/StarBorderOutlined' 
import { LinearProgress } from '@mui/material'
import ReviewsSection from './ReviewsSection'

export default function Star({rating,size='clamp(1rem,1.3vw,3rem)' ,color='orange'}) {
        const ratingfunc = Array.from({length:5},(elem,index)=>{
                const number = rating+0.5;
                 return(rating >= index+1 ? <FaStar htmlColor={color}  sx={{fontSize:size}} /> : number >= index+1 ? <HalfStar htmlColor={color} sx={{fontSize:size}}/> : <OutLinedStar htmlColor={color}  sx={{fontSize:size}}/>)
})
  return (
    <>
      <div className="Rating-System min-w-50 ">
        <span>{ratingfunc}</span>
      </div>
    </>
  )
}

export  function Rating({rating,raters,reviews=26,color="orange"}) {
  const ratingfunc = Array.from([1,2,3,2,1],(m,i)=>{
    const number = rating+0.5;
     return(rating >= i+1 ? <FaStar htmlColor={color}  className={`mt-${m}`}  sx={{fontSize:`${5*(i+5)}px`}}/> : number >= i+1 ? <HalfStar htmlColor={color} className={`mt-${m}`}  sx={{fontSize:`${5*(i+5)}px`}}/> : <OutLinedStar htmlColor={color} className={`mt-${m}`}  sx={{fontSize:`${5*(i+5)}px`}}/>)
})
  return (
    <>
      <section className=''> 
      <h2 className=' text-clamp-h3 text-center font-Agbalumo'>Reviews</h2>
      <div className=' p-3 flex flex-col xl:flex-row'>
        <div className="w-full xl:w-[30%]  flex flex-col  xl:flex-col md:flex-row ">
        <div className="flex justify-center w-full md:w-[50%] xl:w-full">
          <div className="w-min my-4 md:my-9 ">
          <div className={`py-3  px-5 font-Teko w-max`}>
            <p className='text-center px-5 lg:p-5 rounded-full shadow-lg text-clamp-h2 w-min md:w-full mx-auto md:px-2'>{rating}</p>
            <p className='w-full'>{ratingfunc}</p>
            
            </div>
            <p className='text-center'>{raters} ratings and {reviews} reviews</p>
          </div>
          </div>
          <div className=" p-0 sm:p-4 mx-auto w-full md:w-[50%] xl:w-full">
            <div className="w-[90%] lg:w-[70%] mx-auto my-4 md:my-9 flex flex-col-reverse gap-0 lg:gap-2">
            {[109925,39241,73767,174488,486455].map((r,idx)=>{
             return <p className='flex w-full justify-around'> 
             <div className=' text-lg font-bold mx-1 min-w-[40px] w-5 '>{idx+1} <FaStar fontSize='small' /> </div> 
             <div className='w-[70%] my-auto lg:w-full '><LinearProgress className='h-10 w-full' value={r*100/raters} variant='determinate' sx={{height:'7px'}}/> </div>
             <div className='mx-1 w-20'>{r}</div>
             </p>
            })}
            </div>
          </div>
          </div>
          <div className="w-full xl:w-[70%] p-0 sm:p-5">
            <ReviewsSection/>
          </div>
          </div>
        </section>
    </>
  )
}

