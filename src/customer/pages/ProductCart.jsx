import {
  Add,
  RemoveCircleOutline,
  AddBoxOutlined,
  AddBoxSharp,
  RemoveCircleSharp,
  AddCircleSharp,
  HdrStrongOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";

export default function ProductCart() {
  const [Quantity, setQuantity] = useState(0);
  return (
    <div className=" bg-slate-300 p-0 sm:p-6 flex gap-0 sm:gap-5 font-Poppins flex-col lg:flex-row mb-14 md:mb-0">
      <div className=" w-full lg:w-[70%] ">
        <div className="p-2 font-ChakraPetch my-7">
          <h1 className=" text-clamp-h3 ">Shopping Bag</h1>
          <p className="">
            <strong>2 Items</strong> in your bag.
          </p>
        </div>
        <div className="cartitems bg-white p-1 sm:p-3 rounded-none sm:rounded-md text-clamp-p">
          <table className="p-4 font-Poppins " >
            <tr className=" text-clamp-p " >
              <th  className="w-[80%] py-2"  >Product</th>
              {/* <th className="w-full  hidden md:block text-center ">Price</th> */}
              <th className="w-[20%] whitespace-nowrap px-1">Total Price</th>
            </tr>
            <tr className="">
              <td >
                <div className="box flex px-1  sm:px-2 w-full  m-auto ">
                  <div className="flex ">
                    <div className="w-[30%]">
                    <div className="rounded-lg h-[clamp(6rem,14vw,16rem)] overflow-hidden my-auto ">
                      <img
                        className="object-cover object-top w-full h-full "
                        src="img/men.jpg"
                        alt=""
                      />
                    </div>
                    <p className="">
                  <div className=" w-min flex rounded-md mx-auto">
                    <button
                      className=" text-3xl font-bold mb-1 "
                      onClick={() => setQuantity(Quantity - 1)}
                    >
                      <RemoveCircleSharp
                        color="secondary"
                        sx={{ fontSize: "clamp(1.5rem,2vw,2.5rem)" }}
                      />
                    </button>
                    <div className=" bg-white my-auto text-clamp-h5 min-w-min w-5 max-w-xl text-center rounded-md ">
                      {Quantity}
                    </div>
                    <button
                      className="text-3xl  font-bold mb-1 "
                      onClick={() => setQuantity(Quantity + 1)}
                    >
                      <AddCircleSharp
                        color="secondary"
                        sx={{ fontSize: "clamp(1.5rem,2vw,2.5rem)" }}
                      />
                    </button>
                  </div>
                </p>
                    </div>
                    <div className="px-2 p-0 md:p-2 lg:p-4  w-full ">
                      <h1 className="font-sans  line-clamp-2 leading-4 lg:leading-6 mb-2 text-purple-600">
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
          <div className="w-full md:w-[50%] lg:w-full flex flex-col gap-3">
          <h1 className=" text-clamp-h4 font-bold">Coupon Code </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            consectetur enim illo bea
          </p>
          <input
            type="text"
            placeholder="Coupon Code"
            className=" rounded-full p-3  w-full"
          />
          <button className=" rounded-full bg-black text-white w-full p-4">
            Apply
          </button>
          </div>

          <div className=" bg-yellow-200 rounded-lg p-3 leading-5 md:leading-7 xl:leading-9 w-full md:w-[50%] lg:w-full">
            <h1 className=" text-clamp-h4 font-bold my-3">Cart Total</h1>
            <p className="flex justify-between">
              <span className=" font-semibold">Cart Subtotal</span>{" "}
              <span>&#8377;20,000.00</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold">Design by Fluttertop</span>{" "}
              <span>Free</span>
            </p>
            <p className="flex justify-between">
              <span className=" font-semibold">Discount</span>{" "}
              <span>-&#8377;20.00</span>
            </p>
            <p className="flex justify-between">
              <strong>Cart Total</strong> <strong>&#8377;20,000</strong>
            </p>
            
          </div>
        </div>
          <div className="fixed md:static left-0 bottom-0 z-20 w-full bg-white p-2 lg:p-0 md:bg-transparent ">
      <button className=" text-[clamp(1rem,1.2rem,2.3rem)] rounded-lg md:rounded-none  bg-orange-600 text-white lg:w-full w-[40%] p-2 sm:p-4 float-right whitespace-nowrap">
            Pay 50,000
          </button>
          </div>

      </div>

      
    </div>
  );
}
