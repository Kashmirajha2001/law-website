// import React from "react";
import Nav from "../Navbar/Nav";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import "./legalProfile.css";
import adminProfile from '../../assets/images/adminProfile.png';
import badge1 from '../../assets/images/badge1.png';
import badge2 from '../../assets/images/badge2.png';
import badge3 from '../../assets/images/badge3.png';
import { Rating } from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';

const LegalProfile = () => {
  return (
    <>
      <Intro />
      <Nav />
      <div className="LegalProfile">
        <div className="profileIntro">
          <div className="profile-image">
            <img src={adminProfile} alt="attorneys Image" />
          </div>
          <div className="profile-intro-text">
            <h3>Manish Dutta<VerifiedIcon className="profile-intro-icon" style={{color:"blue"}}/></h3>
            <p>Advocate</p>
            <div>
              <Rating name="simple-controlled" defaultValue={4} />
              <span>456+ ratings</span>
            </div>
            <p><WorkHistoryIcon className="profile-intro-icon"/>20 years of experience</p>
            <p><LocationOnIcon className="profile-intro-icon"/>Kolkata</p>
            <p><GTranslateIcon className="profile-intro-icon"/>Bengali, English, Hindi</p>
          </div>

          <div className="profile-achievements">
            <h2><EmojiEventsIcon className="profile-intro-icon" style={{width:"2rem", height: "2rem"}}/>Badges</h2>
            <img src={badge1} className="badges" alt="attorneys Image" style={{position:"relative", top:"8%"}}/>
            <img src={badge2} className="badges" alt="attorneys Image" />
            <img src={badge3} className="badges" alt="attorneys Image" />
          </div>
        </div>

        <hr/>

        <div className="profileAbout">
          <h2>About</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet eius quis accusantium reiciendis? Impedit, suscipit. Eligendi, ut vel quia ex, optio necessitatibus dolore temporibus sequi, alias laborum unde ipsum laboriosam labore nisi assumenda fugiat ducimus obcaecati deserunt. Iusto eligendi officia tempore totam illo magni commodi exercitationem qui ipsa? Eaque?</p>
          <p><span>Enrollment Number:</span> WB159/2E</p>
          <h2>Courts:</h2>
          <p>Civil Court, Delhi High Court</p>
        </div>

        <hr/>

        <div className="profile-experience">
            <h2>Experience & Specialization</h2>
            <hr/>
            <div className="profile-experience-card">
              <h3>Agreements</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil sapiente expedita, error quibusdam praesentium consequatur dicta nobis, totam eum labore beatae sunt dolor, iure unde. Accusantium cum pariatur perferendis!</p>
            </div>
            <div className="profile-experience-card">
              <h3>Agreements</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil sapiente expedita, error quibusdam praesentium consequatur dicta nobis, totam eum labore beatae sunt dolor, iure unde. Accusantium cum pariatur perferendis!</p>
            </div>
            <div className="profile-experience-card">
              <h3>Agreements</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil sapiente expedita, error quibusdam praesentium consequatur dicta nobis, totam eum labore beatae sunt dolor, iure unde. Accusantium cum pariatur perferendis!</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LegalProfile;
