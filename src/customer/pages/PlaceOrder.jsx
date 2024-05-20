import { useState } from 'react'
import { Step, StepConnector, StepLabel, Stepper, stepConnectorClasses,stepLabelClasses, styled, Box, Typography, Button, } from '@mui/material';
import { LocationOn, Login, Payment, ViewInAr} from '@mui/icons-material';
import ProductCart from './ProductCart';
import LoginPortal from '../components/placeOrder/Login';
import Delivery from '../components/placeOrder/Delivery';
import OrderSummary from '../components/placeOrder/orderSummary';
export default function PlaceOrder() {
  const [activeStep, setActiveStep] = useState(0); 
    const handleNext = () => { 
        setActiveStep((prevActiveStep) => prevActiveStep + 1); 
    }; 
  
    const handleBack = () => { 
        setActiveStep((prevActiveStep) => prevActiveStep - 1); 
    }; 
    const handleChange=()=>{
      setActiveStep(activeStep);
    }
    const CustomisedConnector = styled(StepConnector)(({ theme }) => ({ 
          [`&.${stepConnectorClasses.active}`]: { 
            [`& .${stepConnectorClasses.line}`]: { 
              backgroundImage: "linear-gradient(to right,transparent,#7E30E1)", 
            }, 
          }, 
          [`&.${stepConnectorClasses.completed}`]: { 
            [`& .${stepConnectorClasses.line}`]: { 
              backgroundColor: "green", 
            }, 
          }, 
          [`& .${stepConnectorClasses.line}`]: { 
            height: 3, 
            border: "10px", 
           backgroundColor: "#DDDDDD", 
            borderRadius: 1, 
          }, 
               })); 
    const LabelStyle = styled(StepLabel)(({ theme }) => ({ 
		[`& .${stepLabelClasses.iconContainer}`]: { 
			backgroundColor: "#DDDDDD", 
      padding:'5px',
      borderRadius:'50%',
      position:'relative',
        top:-4,
		}, 
		[`& .${stepLabelClasses.labelContainer}`]: { 
			[theme.breakpoints.down('sm')]: { 
        display:'none'
		}, 
		}, 
		[`& .${stepLabelClasses.alternativeLabel}.${stepLabelClasses.iconContainer}`]: { 
			padding:'5px'
		}, 
    [`& .${stepLabelClasses.iconContainer}.${stepLabelClasses.active}`]: { 
				backgroundColor: "#7E30E1", 
        color:"#FFFF",
        padding:'8px',
        top:-6,
		}, 
    [`& .${stepLabelClasses.iconContainer}.${stepLabelClasses.completed}`]: { 
				backgroundColor: "white", 
        color:"green",
        border:'2px soild purple'
		}, 
	
    
	             })); 
  function StepPanel({children,index}){
  return (
    <div role='tabpanel' hidden={activeStep !== index} >
      <Box sx={{paddingTop:{
        xs:'0.5rem',
        sm:'1rem',
      }}}>
        <Typography>
          {children}
        </Typography>
      </Box>
    </div>
  )
}

  return (
    <div className='pt-5 sm:p-5 relative'>
      <Stepper alternativeLabel activeStep={activeStep}   connector={<CustomisedConnector/>}>
        <Step >
                <LabelStyle icon={<Login/>} >Login</LabelStyle>
        </Step>
        <Step >
                <LabelStyle icon={<LocationOn/>} >Delivery Address</LabelStyle>
        </Step>
        <Step>
                <LabelStyle icon={<ViewInAr/>}>Order Summary</LabelStyle>   
        </Step>
        <Step >
                <LabelStyle icon={<Payment/>}>Payment</LabelStyle>
        </Step>
      </Stepper>
      <div className="flex justify-center">
      <div className='w-full lg:w-[85%]'>
      <StepPanel index={0}>
      <LoginPortal/>
      </StepPanel>
      <StepPanel index={1}>
        <Delivery/>
      </StepPanel>
      <StepPanel index={2}>
      <OrderSummary/>
      </StepPanel>
      <StepPanel index={3}>
        content for step 4
      </StepPanel>
      </div>
      </div>
      <div className="absolute top-4 z-30 w-[97%]">
      <Box sx={{ 
                            display: "flex", 
                            flexDirection: "row", pt: 2 
                        }}> 
                            <Button 
                                color="inherit"
                                disabled={activeStep === 0} 
                                onClick={handleBack} 
                                sx={{ mr: 1 }} 
                            > 
                                Back 
                            </Button> 
                            <Box sx={{ flex: "1 1 auto" }} /> 
  
                            <Button onClick={handleNext}> 
                                {activeStep === 3  
                                    ? "Finish" : "Next"} 
                            </Button> 
                        </Box> 
       </div>

          
    </div>
  )
}
