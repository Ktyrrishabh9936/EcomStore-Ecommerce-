import React, { useState } from 'react'
import CustomInput from '../../CustomReactComponents/CustomInput';
import { Add, BusinessOutlined, FavoriteBorder, HomeOutlined } from '@mui/icons-material';
import AddressSelector from './AddressSelector';

export default function Delivery() {
       let theme = 'purple';
    const [DeliveryData,setDeliveryData] = useState({address:"",city:"",state:"",phone:"",zipCode:""});
    const handleChange=(e)=>{
        setDeliveryData({...DeliveryData,[e.target.name]:e.target.value});
    }
  return (
    <>
        <div className={`w-full border-0 sm:border-2 border-${theme}-800 rounded-lg text-clamp-p`}>
        <div className=" w-full   mx-auto flex flex-col  md:flex-row">
                <div className=' w-full  md:w-[35%] mx-auto max-w-lg ' >

                <AddressSelector/>
                </div>
                <div className={`w-full md:w-[65%] flex justify-center items-center bg-${theme}-400 `}>
                <div className='min-w-[230px] max-w-90  w-[80%] lg:w-[60%] py-6 '>
                <h1 className=' font-ChakraPetch text-clamp-h3 font-bold'>Delivery Address</h1>
                <hr className="h-[2px] mx-auto rounded border-0 my-3 shadow-lg bg-gray-300"/>
                
                {/* <CustomInput type="text" label='Address' name="loc" onChange={(e)=>{setloc(e.target.value);
                        document.getElementById("map").innerHTML = `<div style={{width: '100%'}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=1%20${loc.replace(" ","%20")}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>`
                        }} value={loc}/> */}
                        <CustomInput label='Address' type='test' name='address' theme={theme} value={DeliveryData.address} onChange={handleChange}/>
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
                        <button className={` bg-${theme}-700 p-4 mt-2 text-center text-white w-full rounded-xl text-lg`}>Save</button>
                        </div>
                </div>
        </div>
    </div>
    </>
  )
}
