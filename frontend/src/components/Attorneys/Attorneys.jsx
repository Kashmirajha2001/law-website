import React from "react";
import Nav from "../Navbar/Nav";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import AttorneysData from "./AttorneysData";
import "./attorneys.css";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const Community = () => {
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/LegalProfile");
  };

  return (
    <div className="attorneys">
      <Intro />
      <Nav />
      <div className="attorneys-feed-container">
        <h1>
          Our Expert <span>Attorneys</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          ad officia dolorem! Similique sapiente minima saepe non dolorem
          quibusdam eum.
        </p>
        <a className="btn">Show Filters</a>
        <div className="attorneys-contents">
          {AttorneysData.map((Professionals, index) => (
            <div
              className="attorneys-card"
              key={index}
              onClick={navigateToProfile}
            >
              <div className="attorneys-image">
                <img src={Professionals.img} alt="attorneys Image" />
              </div>
              <div className="attorneys-text">
                <h3>{Professionals.name}</h3>
                <p>{Professionals.designation}</p>
                <div><Rating name="simple-controlled" defaultValue={4} /><span>456+ ratings</span></div>
                <p><WorkHistoryIcon className="profile-intro-icon"/>15 years of experience</p>
                <p><LocationOnIcon className="profile-intro-icon"/>Kolkata</p>
                <p><GTranslateIcon className="profile-intro-icon"/>Bengali, English, Hindi</p>
              </div>
              <div className="skills">
                <h2>Practice Areas & Skills</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, eius.
                </p>
                <button className="btn">Contact Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
