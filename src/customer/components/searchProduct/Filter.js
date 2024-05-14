import { FormControlLabel,Checkbox, Grid, Button } from '@mui/material'
import React from 'react'
import { Products } from '../carausel/ItemData'
import Star from '../ViewProduct/Star'
import { Cancel, FilterAlt, Sort } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Filter() {
        const filterObj = [
          {
            name:"Brand",
            options:[
              {value:"boat" ,label:"Boat"},
              {value:"zebronics" ,label:"Zebronics"},
              {value:"ptron" ,label:"PTron"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Color",
            options:[
              {value:"red" ,label:"Red"},
              {value:"blue" ,label:"Blue"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"purple"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
              {value:"green" ,label:"Green"},
            ]
          },
          {
            name:"Brand",
            options:[
              {value:"boat" ,label:"Boat"},
              {value:"zebronics" ,label:"Zebronics"},
              {value:"ptron" ,label:"PTron"},
            ]
          },
        ]
        
        const [expanded, setExpanded] = React.useState('panel1');

        const handleChange = (panel) => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
        };
        const itemCard = Products.map((item)=>{
        return (
        <Grid item xs={6} sm={4} md={3} lg={2.4} >
        <div className="box  w-[clamp(100,calc(30%/2rem+10px),300)]  m-auto ">
                  <div className='rounded-lg h-[250px] overflow-hidden'>
                  <img className='object-cover object-top w-full h-full' src={item.image.main} alt="" />
                  </div>
                  <div className="p-2 ">
                    <h1 className='font-sans font-medium text-clamp-p'>{item.title}</h1>
                    <Star fontSize='small'/>
                    <p className=' text-clamp-h5 text-green-800' >&#8377;{item.price}</p>
                  </div>
                  </div>
        </Grid>
          )  })
  return (
    <div className='flex justify-around  h-[calc(100%-80px)] p-3 relative'>
      <div className=" flex flex-col w-full md:w-[30%]  min-w-min   font-Poppins absolute md:static top-0  h-full " >
          <h1 className=' font-medium font-RobotoSlab text-clamp-h4 text-center pb-1 bg-white'>Filter Product</h1>
           
        <div className="  bg-white w-full overflow-x-hidden overflow-y-scroll w-thin p-2    h-[calc(100%-100px)] ">
         
        <div className=" bg-white flex flex-col gap-2 w-full sm:w-[70%] md:w-full mx-auto">
          {
            filterObj.map((ftitle,tdx)=>{
             return  <Accordion expanded={expanded === `panel${tdx}`} onChange={handleChange(`panel${tdx}`)}>
      <AccordionSummary aria-controls={`panel${tdx}d-content`} id={`panel${tdx}d-header`}>
        <Typography>{ftitle.name}</Typography>
      </AccordionSummary >
      <AccordionDetails sx={{lineClamp:1,wordWrap:'break-word'}}>
        <Typography  sx={{lineClamp:1,wordWrap:'break-word'}}>
          {
            ftitle.options.map(op=>{
              return <FormControlLabel sx={{lineClamp:1,wordWrap:'break-word'}} control={<Checkbox value={op.value}/>} label={op.label}/>
            })
          }
        </Typography>
      </AccordionDetails>
    </Accordion>
            })
          }
    </div>
    </div>

    <p className='flex gap-2 justify-center w-full  mx-auto text-lg py-2  bg-gray-200'>
        <button className="px-[clamp(1rem,1.3vw,1.5rem)] py-[clamp(0.3rem,0.5vw,0.8rem)] uppercase font-Poppins bg-purple-500 font-bold rounded-md active:opacity-70 text-clamp-h6 text-white">
                Apply
              </button>
              <button className="px-[clamp(1rem,1.3vw,1.5rem)] py-[clamp(0.5rem,0.7vw,0.8rem)]  uppercase font-Poppins bg-white font-bold rounded-md active:opacity-70 border-2 border-purple-500 text-clamp-h6 ">
               Cancel
              </button>
        </p>
      </div>
      <div className=" w-full p-3 px-3 lg:px-10 md:py-5 overflow-x-hidden overflow-y-scroll ">  
      <div className="w-full flex flex-col-reverse md:flex-row gap-2 mb-2 ">
        <p className=' flex gap-2 w-full border-none font-Poppins text-[clamp(0.8rem,1.1vw,1.2rem)] rounded-full overflow-x-scroll overflow-y-hidden no-scrollbar h-min my-auto p-2'>
          <em className='px-3 py-1 rounded-full bg-blue-200  h-min min-w-max'>All <Cancel/></em>
          <em className='px-3 py-1  rounded-full bg-blue-200  h-min min-w-max'>Blue <Cancel/></em>
          <em className='px-3 py-1  rounded-full bg-blue-200  h-min min-w-max'>Blue <Cancel/></em>
          <em className='px-3 py-1  rounded-full bg-blue-200  h-min min-w-max'>Blue <Cancel/></em>
        </p>
        <p className='flex gap-2 w-full md:w-max text-lg'>
        <button className=' text-gray-600 md:hidden block w-full  px-7 py-3 border-2 border-grey-700 rounded-md font-bold m-auto '  ><FilterAlt  fontSize='large'/> Filter</button>
        <button  className=' text-gray-600 w-full w-100 px-7 py-2 border-2 border-grey-700 rounded-md  md:w-max md:al font-bold '  ><Sort fontSize='large'/> Sort By</button>
        </p>
      </div>
      <Grid container spacing={1}>
                {itemCard}
      </Grid>
      </div>
    </div>
  )
}
