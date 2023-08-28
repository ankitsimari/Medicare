import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './PatientDetails';
import PaymentForm from './Payment';
import Review from './Review';
import axios from 'axios';
import Loading from "../Loading"
import BookingLoading from './BookingLoading';



const steps = ['Patient Details', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
const[loading,setLoading]= React.useState(false)
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    
  };
  
  const handleSubmit = ()=>{
    setLoading(true)
    const PatientData = JSON.parse(localStorage.getItem("Patient"))

    axios.post(`https://doctors-api-bc6x.onrender.com/login`,PatientData).then((res)=>{
      console.log(res)
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
    })

    localStorage.setItem("booking",true)


    setActiveStep(activeStep + 1);
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (loading) {
    return <BookingLoading/>
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
        //   borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="stander" >
          <Typography component="h1" variant="h4" align="center">
            Conformation
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your Booking.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. and Session Id is"http://localhost:3000/videoRoom/Ankit?roomID=Ankit"
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}


{activeStep === steps.length - 1 ?   <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                 Place order
                </Button> :   <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                 next
                </Button>}


                {/* <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                 Place order
                </Button> */}
              </Box>
            </React.Fragment>
          )}
        </Paper>

      </Container>
    </React.Fragment>
  );
}