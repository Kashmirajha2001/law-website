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
import { useNavigate } from "react-router-dom";
import Review from './Review';
import Designation from './Designation';
import Nav from '../Navbar/Nav';
import Intro from '../Intro/Intro';
import ProfessionalImage from '../../assets/images/professionalImg.png';
import ClientImage from '../../assets/images/clientImg.png';
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



export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  // const history = useHistory();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const navigateToProfessionalSignUp = () => {
    navigate('/PSignUp');
  }

  return (
    <React.Fragment>
      <Intro />
      <Nav/>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }} className='signup'>
        <div className='signup-options' >
          <div className='signup-option-div' onClick={navigateToProfessionalSignUp}>
            <img src={ProfessionalImage} alt='Professional.png'/>
            <h2>Legal Professional</h2>
          </div>
          <div className='signup-option-div signup-option-div_2' onClick={navigateToProfessionalSignUp}>
            <img src={ClientImage} alt='Client.png'/>
            <h2>Client</h2>
          </div>
        </div>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}