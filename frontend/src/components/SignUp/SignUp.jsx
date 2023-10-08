import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import BasicDetails from './BasicDetails';
import Details_2 from './Details_2';
import Review from './Review';
import Designation from './Designation';
import Nav from '../Navbar/Nav';
import Intro from '../Intro/Intro';
import './signup.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        e-nyayaSeva
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Basic Details','Designation', 'Verification', 'Confirm SignUp'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicDetails />;
    case 1:
      return <Designation />;
    case 2:
        return <Details_2 />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Intro />
      <Nav/>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }} className='signup'>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Sign Up
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
                Thank you for Registration.
              </Typography>
              <Typography variant="subtitle1">
                Please <Link href="./Login" variant="body2">
                      {"Login"}
                    </Link> to your account.
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

                <button
                  variant="contained"
                  onClick={handleNext}
                  // sx={{ mt: 3, ml: 1 }}
                  className='btnSignup'
                >
                  {activeStep === steps.length - 1 ? 'Confirm SignUp' : 'Next'}
                </button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}