import React, { useState, useEffect } from "react";
import "./professionals.css";
import ProfessionalsData from "./ProfessionalsData";
// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MailIcon from '@mui/icons-material/Mail';
import { Rating } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Professionals = () => {
  const openUrlInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const navigateToProfile = () =>{
      navigate("/LegalProfile")
  };

  const navigateToAttorneys = () =>{
    navigate("/Attorneys")
};

  return (
    <div className="professionals-feed-container">
      <h1>
        Our Expert <span>Attorneys</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ad
        officia dolorem! Similique sapiente minima saepe non dolorem quibusdam
        eum.
      </p>
      <div className="professionals-contents">
        {ProfessionalsData.map((Professionals, index) => (
          <div
            className="professionals-card"
            key={index}
            onClick={handleOpen}
          >
            <div className="professionals-image">
              <img src={Professionals.img} alt="professionals Image" />
            </div>
            <div className="professionals-text">
              <h3>{Professionals.name}</h3>
              <p>{Professionals.designation}</p>
              <Rating name="simple-controlled" defaultValue={4} />
            </div>
          </div>
        ))}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <button onClick={navigateToProfile}>Read More</button>
            </Box>
          </Fade>
        </Modal>
      </div>
      <button className="btn" onClick={navigateToAttorneys}>Find Attorneys</button>
    </div>
  );
};

export default Professionals;
