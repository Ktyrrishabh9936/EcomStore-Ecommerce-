import React, { useState } from "react";
import {  Remove, AddCircle, RemoveCircleSharp} from "@mui/icons-material";
 import { Button } from "@mui/material";
import { useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';

export default function OrderSummary() {
        const theme = useSelector((state)=>state.webReducer.Theme);
        const [Quantity, setQuantity] = useState(0);
        return (
          <div className="  p-0 sm:p-6 flex gap-0 sm:gap-5 font-Poppins flex-col lg:flex-row mb-14 md:mb-0" >
            <div className=" w-full lg:w-[70%]  " style={{backgroundColor:colors[theme][50]}} >
              <div className="p-2 font-ChakraPetch py-7" >
                <h1 className=" text-clamp-h3 ">Shopping Bag</h1>
                <p className="">
                  <strong>2 Items</strong> in your bag.
                </p>
              </div>
              <div className="cartitems  p-1 sm:p-3 rounded-none sm:rounded-md text-clamp-p ">
              <div className=" p-2 text-clamp-p my-1 border-2 border-gray-300" style={{backgroundColor:colors[theme][200]}}>
                <strong >Rishabh Katiyar</strong>
                <p><em>Gaya Prasad nagar Bilhaur</em></p>
                <p> Kanpur Nagar,Uttar Pradesh-209202</p>
                <p>63954832742</p>
              </div>
                <table className="p-2 font-Poppins  bg-white border-2 border-gray-300" cellPadding={5}>
                  <tr className=" text-clamp-p bg-slate-100 border-b-2 border-gray-300" >
                    <th  className="w-[80%] py-2"  >Product</th>
                    {/* <th className="w-full  hidden md:block text-center ">Price</th> */}
                    <th className="w-[20%] whitespace-nowrap px-1">Total Price</th>
                  </tr>
                  <tr >
                    <td >
                      <div className="box flex p-1  sm:p-2 w-full  m-auto ">
                        <div className="flex ">
                          <div className="w-[30%]">
                          <div className="rounded-lg h-[clamp(6rem,14vw,10rem)] overflow-hidden my-auto ">
                            <img
                              className="object-cover object-top w-full h-full "
                              src="img/men.jpg"
                              alt=""
                            />
                          </div>
                          <p className=" w-full bg-[#F1F1F1]" >
                        <div className="w-full flex rounded-md "  >
                          <button
                           style={{color:colors[theme][600]}}
                            className=" font-bold  p-1"
                            onClick={() => setQuantity(Quantity - 1)}
                          >
                            <RemoveCircleSharp
                              sx={{ fontSize: "clamp(1.5rem,2vw,2.5rem)" }}
                            />
                          </button>
                          <div className="  my-auto text-clamp-h5 min-w-min w-full  text-center rounded-md px-1">
                            {Quantity}
                          </div>
                          <button
                           style={{color:colors[theme][600]}}
                            className=" font-bold p-1"
                            onClick={() => setQuantity(Quantity + 1)}
                          >
                            <AddCircle
                              sx={{ fontSize: "clamp(1.5rem,2vw,2.5rem)" }}
                            />
                          </button>
                        </div>
                      </p>
                          </div>
                          <div className="px-2 p-0 md:p-2 lg:p-4  w-full ">
                            <h1 className="font-sans  line-clamp-2 leading-4 lg:leading-6 mb-2 " style={{color:colors[theme][600]}}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Magni possimus assumenda quis qui aperiam, doloremque
                              consectetur praesentium culpa sequi nam?
                            </h1>
                              <div className="text-[clamp(0.7rem,0.9vw,2rem)] leading-5 sm:leading-6 xl:leading-8">
                            <p >
                            <strong className="  pr-2 font-bold">Price</strong><span className=" px-2 text-green-500">&#8377;20,000</span></p>
                            <p >
                            <strong className="  pr-2 font-bold">Color</strong><span className=" px-2">Red</span></p>
                              <p ><strong className=" pr-6 ">Size</strong><span className=" border-0 sm:border-2 rounded-sm bg-purple-50 border-purple-500 text-purple-500 p-1 px-2 md:py-1">XL</span></p>
                              </div>
                                                  </div>
                        </div>
                      </div>
                    </td>
      
                    
      
                  <td className="text-clamp-h5 relative">
                    <div className="text-center  text-green-500 h-full relative -top-2">
                      &#8377;40000
                    </div>
                    <Button variant="h6" sx={{position:'absolute',bottom:1,right:0}}>Remove</Button>
                  </td>
                  </tr>
      
                  <tr>
                    <td className=" text-center text-clamp-p  py-4" colSpan={3}>
                      <span className="font-bold " >SubTotal:</span>
                      <span>&#8377;20,000</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="shipping  font-Poppins w-full  lg:w-[30%]  bg-white rounded-none sm:rounded-lg mx-auto text-[clamp(0.8rem,1vw,2rem)] h-min my-auto p-2 sm:p-4 lg:p-3">
              <div className=" flex flex-col md:flex-row lg:flex-col  w-full  gap-3 pb-2">
                {/* <h1 className=" text-clamp-h4 font-bold my-3">Calculated Shipping</h1>
                <input
                  type="text"
                  placeholder="Country"
                  className=" bg-blue-50 rounded-full p-3  w-full"
                />
                <div className="flex gap-4  w-full">
                  <input
                    type="text"
                    placeholder="State/City"
                    className=" bg-blue-50 rounded-full p-3 w-full"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="  rounded-full p-3 w-full "
                  />
                </div>
                <button className=" rounded-full bg-black text-white w-full p-4">
                  Update
                </button> */}
                <div className="w-full md:w-[50%] lg:w-full flex flex-col gap-3 my-auto">
                <h1 className=" text-clamp-h4 font-bold" style={{color:colors[theme][600]}}>Coupon Code </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  consectetur enim illo bea
                </p>
                <div className="flex  gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className=" rounded-md py-3 px-2 w-full"
                />
                <button className="   text-white w-full  py-3 max-w-[100px] mx-auto" style={{backgroundColor:colors[theme][400]}}>
                  Apply
                </button>
                </div>
                </div>
      
                <div className=" bg-[#F1F1F1] rounded-lg p-3 leading-5 md:leading-7 xl:leading-9 w-full md:w-[50%] lg:w-full">
                  <h1 className=" text-clamp-h4 font-bold my-3">Cart Total</h1>
                  <p className="flex justify-between">
                    <span className=" font-semibold" style={{color:colors[theme][600]}}>Cart Subtotal</span>{" "}
                    <span>&#8377;20,000.00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className=" font-semibold" style={{color:colors[theme][600]}}>Design by Fluttertop</span>{" "}
                    <span>Free</span>
                  </p>
                  <p className="flex justify-between">
                    <span className=" font-semibold" style={{color:colors[theme][600]}}>Discount</span>{" "}
                    <span>-&#8377;20.00</span>
                  </p>
                  <p className="flex justify-between">
                    <strong style={{color:colors[theme][600]}}>Cart Total</strong> <strong>&#8377;20,000</strong>
                  </p>
                  
                </div>
              </div>
                <div className="fixed md:static left-0 bottom-0 z-20 w-full bg-white p-2 lg:p-0 md:bg-transparent ">
            <button className=" text-[clamp(1rem,1.2rem,2.3rem)] rounded-lg md:rounded-none   text-white lg:w-full w-[40%] p-2 sm:p-4 float-right whitespace-nowrap" style={{backgroundColor:colors[theme][600]}}>
                  Pay 50,000
                </button>
                </div>
      
            </div>
      
            
          </div>
        );
}
