
import { useState } from 'react';
import {ReactComponent as Logo} from  '../../svg/shop-LoginGate.svg';
import CustomInput from '../../CustomReactComponents/CustomInput';
import {Facebook, Google } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';
import { Link } from 'react-router-dom';

export default function Login() {
        const theme = useSelector((state)=>state.webReducer.Theme);
        console.log(theme);
       const [email,setEmail] = useState('');
       const [pass,setPass] = useState('');

  return (
    <div className='relative w-full border-0 sm:border-2  rounded-lg text-clamp-p' style={{borderColor:colors[theme][400]}}  >
        <div className=" w-full   mx-auto flex max-[500px]:flex-col-reverse dark:bg-slate-50">
                <div className='relative sm:static max-[500px]:w-full w-[60%] bg-slate-100 before:bg-cover before:bg-blend-darken before:bg-no-repeat before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full  content-[""]  flex justify-center items-center' >
                <div className='min-w-[230px] max-w-90  w-[80%] lg:w-[60%] py-6 '>
                <h1 className=' font-ChakraPetch text-clamp-h3 font-bold'>Login to your account</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <CustomInput label='Email' type='email' theme={theme} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <CustomInput label='Password' type='password' theme={theme} value={pass} onChange={(e)=>setPass(e.target.value)}/>
                        <p className={`text-right text-${theme}-600`}>forgot password?</p>
                        <button className='p-3 mt-2 text-center text-white w-full' style={{backgroundColor:colors[theme][600]}}>Submit</button>
                        <div className="h-1 bg-gray-600 my-3"></div>
                        <div className="">
                                 <h3 className=' text-clamp-h5 text-center my-2 font-Poppins'>Sign In With </h3>
                                <p className="flex w-full">
                                        <strong className='p-2 bg-white border-2 w-full text-center' ><Google sx={{color:colors[theme][600]}}/> Google</strong>
                                        <strong className='p-2 bg-white border-2 w-full text-center'><Facebook sx={{color:colors[theme][600]}}/> Facebook</strong>
                                </p>
                        </div>
                        <div className='py-3 text-center whitespace-pre-line'><p className='whitespace-nowrap'>Don't have any account </p>
                     <Link to='/register'>  <p  className='text-${theme}-400 whitespace-nowrap' style={{color:colors[theme][600]}}>Create new Account</p></Link>
                        </div>
                </div>
                </div>
                <div className='max-[500px]:w-full w-[40%] flex justify-center items-center' style={{fill:colors[theme][600],backgroundColor:colors[theme][300]}}  >
                        
                       <p className="w-full max-[500px]:w-[30%]">
                        <Logo />
                        </p>
                </div>
        </div>
    </div>
  )
}
