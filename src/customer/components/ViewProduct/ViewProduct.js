import React, { useState } from "react";
import ColorSelector from "./colorSelector";
import SizeSelector from "./sizeSelector";
import Carousel from "react-multi-carousel";
import AddIcon from "@mui/icons-material/Add";
import FaStar from "@mui/icons-material/Star";
import Star, { Rating } from "./Star";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Reviews from "./ReviewsSection";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

const CustomDot = ({ onClick, active, index }) => {
  const [Images, setImages] = useState([
    "img/property-1.jpg",
    "img/property-2.jpg",
  ]);
  return (
    // <img className='w-full' src={onClick} alt="" />
    <img
      style={{
        border: "3px solid",
        borderColor: active ? "#ba68c8" : "white",
        opacity: active ? 1 : 0.5,
        width: "clamp(2rem,3vw,5rem)",
        height: "clamp(2rem,3vw,5rem)",
        padding: "2px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      className=""
      onClick={onClick}
      src={Images[index]}
    />
  );
};

export default function ViewProduct() {
  const [Images, setImages] = useState([
    "img/property-1.jpg",
    "img/property-2.jpg",
  ]);
  const deviceType = useSelector((state) => state.webReducer.DeviceType);
  const [isShowMore, setshowMore] = useState(false);
  const [Quantity, setQuantity] = useState(1);
  // const [CustomerRating,setCustomerRating] = useState([3,2,1])/
  const toggleshowMore = () => setshowMore(!isShowMore);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia aliquid id quod consectetur expedita magni assumenda itaque iure libero quasi nesciunt repellendus nam, minima odit deleniti doloremque, eos voluptatem cum earum ratione vitae accusantium. Enim dolore architecto quod, corrupti optio ducimus aut, harum veritatis pariatur assumenda possimus deleniti itaque! ";
  const responsive = {
    Desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col m-0 sm:mx-[clamp(0rem,4vw,10rem)] justify-between    mt-0 md:mt-4 pt-4 rounded-md">
        <div className=" lg:w-[47%] sm:w-[80%] w-full mx-auto h-full my-auto">
          <div className="pb-0 sm:pb-5 px-0 sm:px-8 h-full ">
            <Carousel
              swipeable={["tablet", "mobile", "iPad"].some((e) => {
                return deviceType === e;
              })}
              draggable={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              keyBoardControl={true}
              // customTransition="all .5 ease-in-out"
              // transitionDuration={900}
              containerClass=" h-[60%]  "
              removeArrowOnDeviceType={["tablet", "mobile", "iPad"]}
              deviceType={deviceType}
              dotListClass="flex gap-3 rounded-md "
              itemClass=""
              showDots={deviceType !== "mobile"}
              customDot={<CustomDot />}
            >
              {Images.map((e, i) => (
                <div className="">
                  {" "}
                  <img
                    className="w-full  mb-[clamp(2rem,4vw,5rem)]"
                    key={i}
                    src={e}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="lg:w-[50%] md:w-[80%] mx-auto lg:px-10  md:px-4 my-auto pl-4">
          <p className="font-Poppins rounded-sm bg-purple-500 text-white w-min px-2 text-clamp-h6">
            bestseller
          </p>
          <p className="capitalize font-Poppins font-semibold text-3xl my-3 text-black-400  text-clamp-h4">
            this is my heading
          </p>
          <p className="flex">
            <Star rating={3.5} color="purple" className="sm:text-xl" />
            <span className="px-3 text-clamp-h6"> 87 customer reviews</span>
          </p>

          <p className=" font-Poppins mt-3">
            {" "}
            <span className="text-green-600 text-2xl px-2 text-[clamp(1.2rem,1.7vw,2rem)]">
              &#8377; 337.00
            </span>{" "}
            <strike className=" text-red-400   text-clamp-h5">
              &#8377; 500.00
            </strike>{" "}
          </p>

          <p className="my-3 font-ChakraPetch text-clamp-p">
            <div className="">
              {text.length > 150
                ? isShowMore
                  ? text
                  : text.substring(0, 150) + "..."
                : text}
            </div>
            {isShowMore ? (
              <span
                className=" text-purple-600 cursor-pointer"
                onClick={toggleshowMore}
              >
                show less &#x25B2;{" "}
              </span>
            ) : (
              <span
                className=" text-purple-600 cursor-pointer"
                onClick={toggleshowMore}
              >
                show more &#x25BC;
              </span>
            )}
          </p>

          <ColorSelector />
          <SizeSelector />

          {/* <p className='my-2 '>
                  <h1 className=' font-bold text-xl  font-ChakraPetch text-[clamp(1.1rem,1.3vw,1.5rem)]'>Quantity</h1>
                  <div className="border-3 bg-purple-500 w-min flex rounded-md mt-2 ">
                    <button className='py-2 px-5 text-3xl font-bold mb-1' onClick={()=>setQuantity(Quantity-1)}>-</button>
                    <div  className=' bg-white my-auto text-xl w-12 text-center rounded-md py-2'   > {Quantity}</div>
                    <button className='text-3xl px-3 font-bold mb-1' onClick={()=>setQuantity(Quantity+1)}><AddIcon fontSize='5'/></button>
                  </div>
                </p>  */}

          <p className="mb-5">
            <div className=" flex pt-3 gap-3 ">
    <Link to='/placeorder'>
              <button className="px-[clamp(1rem,1.3vw,1.5rem)] py-[clamp(0.3rem,0.5vw,0.8rem)] uppercase font-Poppins bg-purple-500 font-bold rounded-md active:opacity-70 text-clamp-h6 text-white">
                Buy Now
              </button>
        </Link>
              <button className="px-[clamp(1rem,1.3vw,1.5rem)] py-[clamp(0.5rem,0.7vw,0.8rem)]  uppercase font-Poppins bg-white font-bold rounded-md active:opacity-70 border-2 border-purple-500 text-clamp-h6 ">
                Add To Cart
              </button>
            </div>
          </p>
        </div>
      </div>
      {/* <ProductDetails/> */}
      <Rating raters={486455} rating={5} reviews={20} />
    </div>
  );
}
