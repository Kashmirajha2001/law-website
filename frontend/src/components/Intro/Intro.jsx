import React from "react";
import "./intro.css";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img from "../../assets/logo.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Intro = () => {
  return (
    <>
      {/* <div className="intro1">
        <p className="welcomeMsg">Welcome to e-nyayaSeva!</p>
        <a className="right" href="">About Us</a>
        <a className="right" href="">Contact Us</a>
      </div> */}
      <div className="intro2">
        <div className="logo">
          <img src={img}></img>
          <h2>e-nyaya<span>Seva</span></h2>
        </div>
        <div className="contact">
          <ContactPageIcon style={{ width: "1.9rem", height: "1.9rem", color:"green"}}
            className="a"
          />
          <h4 className="b">1234567890</h4>
          <span className="c">enyayseva@gmail.com</span>
        </div>
        <div className="address">
          <LocationOnIcon style={{ width: "1.9rem", height: "1.9rem", color:"red"}}
            className="a"
          />
          <h4 className="b">Behala</h4>
          <span className="c">MR street</span>
        </div>
        <div className="socials">
          <p>
            <a href="">
              <FacebookRoundedIcon className="socialIcons"
                style={{ width: "1.5rem", height: "1.5rem"}}
              />
            </a>
          </p>
          <p>
            <a href="">
              <TwitterIcon className="socialIcons"   
                style={{ width: "1.5rem", height: "1.5rem"}}
              />
            </a>
          </p>
          <p>
            <a href="">
              <LinkedInIcon className="socialIcons"
                style={{ width: "1.5rem", height: "1.5rem"}}
              />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
