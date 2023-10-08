import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import img from "../../assets/logo.png";
import adnan from "../../assets/about/adnan.png";
import kashmira from "../../assets/about/kashmira.png";
import kriti from "../../assets/about/kriti.jpg";
import manish from "../../assets/about/manish.png";
import pranjal from "../../assets/about/pranjal.png";
import suvro from "../../assets/about/suvro.png";
import "./about.css";
import HomeIcon from '@mui/icons-material/Home';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
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
            {/* <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
              Text in a modal
            </Typography> */}
            <div className="aboutlogo" onClick={navigateToHome}>
              <img src={img}></img>
              <h2>
                e-nyaya<span>Seva</span>
              </h2>
              <a onClick={navigateToHome} className="btn aboutHome">
              <HomeIcon/>
            </a>
            </div>
            <Typography id="transition-modal-description">
              "E Nyaya Seva" is a dynamic and user-centric online platform under
              the Ministry of Law and Justice, designed to facilitate legal
              services and streamline the legal process for the benefit of both
              Legal Service Providers and the public. This platform will feature
              a multitude of essential components: promoting collaboration,
              accessibility, and transparency within the legal community. By
              offering a wide range of features and services, it aims to enhance
              the efficiency and accessibility of legal services for all,
              fostering a more just and equitable society.
            </Typography>

            <div className="developerTeam">
              <h2>Our Developer Team</h2>
              <div className="developerTeamMembers">
                <div className="member">
                  <img src={pranjal}></img>
                  <div>
                    <p>Pranjal Sarkar</p>
                  </div>
                </div>
                <div className="member">
                  <img src={suvro}></img>
                  <div><p>Suvrojit Chowdhury</p></div>
                </div>
                <div className="member">
                  <img src={kashmira}></img>
                  <div><p>Kashmira Jha</p></div>
                </div>
                <div className="member">
                  <img src={manish}></img>
                  <div><p>Manish Dutta</p></div>
                </div>
                <div className="member">
                  <img src={adnan}></img>
                  <div><p>Adnan Sameer</p></div>
                </div>
                <div className="member">
                  <img src={kriti}></img>
                  <div><p>Kriti Priya</p></div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
