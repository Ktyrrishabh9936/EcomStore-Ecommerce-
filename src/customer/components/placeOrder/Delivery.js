import React, { useState } from 'react'
import CustomInput from '../../CustomReactComponents/CustomInput';
import { Add, BusinessOutlined, Close, FavoriteBorder, HomeOutlined } from '@mui/icons-material';
import AddressSelector from './AddressSelector';
import 'tailwindcss/colors'
import colors from 'tailwindcss/colors';
import { useSelector } from 'react-redux';
export default function Delivery() {
   const theme = useSelector((state)=>state.webReducer.Theme);
   const [activeAdd,setactiveAdd] = useState(false);
    const [DeliveryData,setDeliveryData] = useState({fullname:'',address:"",city:"",state:"",phone:"",zipCode:""});
    const handleChange=(e)=>{
        setDeliveryData({...DeliveryData,[e.target.name]:e.target.value});
    }
  return (
    <>
        <div className='w-full  rounded-lg text-clamp-p p-3 sm:p-0 ' >
        <div className=" w-full   mx-auto flex flex-col  md:flex-row relative h-[calc(100vh-40px)] ">
                <div className=' w-full  md:w-[50%] mx-auto md:ml-auto max-w-lg  h-[80%]' >
                <div className='  md:bg-none rounded-md mb-2 py-6 border-2 border-gray-300' style={{backgroundColor:colors[theme][50]}}>
                        <img src="img/map.png" className=' h-20 sm:h-40 mx-auto' alt="" />
                </div>
                <AddressSelector/>
                <p className='p-2 rounded-sm text-white block sm:hidden text-center whitespace-nowrap mx-auto' onClick={()=>setactiveAdd(true)} style={{backgroundColor:colors[theme][600]}}> <Add/>Add new address</p>
                </div>
                <div className={`w-full  md:w-[50%] bg-slate-50 sm:bg-white flex justify-center ${activeAdd?"block translate-x-0":"hidden -translate-x-4"} absolute top-[0px] left-0  w-full h-fit bg-white-400 sm:static sm:block`} >
                <div className='min-w-[230px] w-full sm:w-[80%] p-2 mx-auto '>
                        <p className='block sm:hidden float-right' onClick={()=>setactiveAdd(false)}><Close/></p>
                <h1 className=' font-ChakraPetch text-clamp-h3 font-bold my-2'>Delivery Address</h1>
                        <CustomInput className="p-7" label='Full Name' type='text' name='fullname' theme={theme} value={DeliveryData.fullname} onChange={handleChange}/>
                        <CustomInput className="p-7" label='Address' type='text' name='address' theme={theme} value={DeliveryData.address} onChange={handleChange}/>
                        <div className="flex gap-3">
                        <CustomInput label='City' type='text' name='city' theme={theme} value={DeliveryData.city} onChange={handleChange}/>
                        <CustomInput label='State' type='text' name='state' theme={theme} value={DeliveryData.state} onChange={handleChange}/>
                        </div>
                        <div className="flex gap-3">
                        <CustomInput label='Zip Code' name="zipCode"  theme={theme} value={DeliveryData.zipCode} onChange={handleChange}/>
                        <CustomInput label='Phone'  type='number' name='phone' theme={theme} value={DeliveryData.phone} onChange={handleChange}/>
                        </div>
                        <p className="flex w-full my-2">
                                        <span className='p-2 bg-white border-2 w-full text-center'><HomeOutlined/> <p>Home</p> </span>
                                        <span className='p-2 bg-white border-2 w-full text-center'><BusinessOutlined/> <p>Office</p></span>
                                        <span className='p-2 bg-white border-2 w-full text-center'><FavoriteBorder/> <p>Partner</p></span>
                                        <span className='p-2 bg-white border-2 w-full text-center'><Add/> <p>Other</p></span>
                                </p>
                        <button className=' p-4 mt-2 text-center text-white w-full rounded-xl text-lg' style={{backgroundColor:colors[theme][600]}}>Save</button>
                        </div>
                </div>
        </div>
    </div>
    </>
  )
}
