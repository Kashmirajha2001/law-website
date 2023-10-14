import React, { useState, useEffect } from "react";
import "./professionals.css";
import ProfessionalsData from "./ProfessionalsData";
import { Rating } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import adminProfile from "../../assets/images/adminProfile.png";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const Professionals = () => {
  const openUrlInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/LegalProfile");
  };

  const navigateToAttorneys = () => {
    navigate("/Attorneys");
  };

  return (
    <div className="professionals-feed-container">
      <h1>
        Our Expert <span>legal Professionals</span>
      </h1>
      <p>
      Welcome to Legal Justice, your ally in the pursuit of fairness. We offer expert guidance, resources, and insights to empower you in navigating the legal system effectively.
      </p>
      <span>Your rights, our priority.</span>
      <div className="professionals-contents">
        {ProfessionalsData.map((Professionals, index) => (
          <div className="professionals-card" key={index} onClick={handleOpen}>
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
              <div className="attorneys-image">
                <img src={adminProfile} alt="attorneys Image" />
              </div>
              <div className="attorneys-text">
                <h3>Manish Dutta</h3>
                <p>Advocate</p>
                <div>
                  <Rating name="simple-controlled" defaultValue={4} />
                  <span>456+ ratings</span>
                </div>
                <p><WorkHistoryIcon className="profile-intro-icon"/>15 years of experience</p>
                <p><LocationOnIcon className="profile-intro-icon"/>Kolkata</p>
                <p><GTranslateIcon className="profile-intro-icon"/>Bengali, English, Hindi</p>
                <button onClick={navigateToProfile} className="btn">
                  Read More
                </button>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
      <a className="btn" onClick={navigateToAttorneys}>
        Find legal Professionals
      </a>
    </div>
  );
};

export default Professionals;
