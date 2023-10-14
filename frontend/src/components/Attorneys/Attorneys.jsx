import { useState } from "react";
import Nav from "../Navbar/Nav";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import Filters from "../Filters/Filters";
import AttorneysData from "./AttorneysData";
import "./attorneys.css";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Communication from "../Communication/communication";
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Community = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/LegalProfile");
  };

  const [showChat, setShowChat] = useState(false);

  const handleChatting = (attorneyId) => {
    localStorage.setItem('selectedAttorneyId', attorneyId);
    setShowChat(true);
  }
  
  return (
    <div className="attorneys">
      <Intro />
      <Nav />
      <div className="attorneys-feed-container">
        <h1>
          Our Expert <span>legal Professionals</span>
        </h1>
        <p>
        A team of seasoned legal professionals, driven by a passion for justice and unwavering commitment to safeguarding your rights and interests.
      </p>
        <a className="btn" onClick={showSidebar}>Show Filters</a>
        <div className="attorneys-contents">
          {AttorneysData.map((Professionals, index) => (
            <div
              className="attorneys-card"
              key={index}
            >
              <div className="attorneys-image" onClick={navigateToProfile}>
                <img src={Professionals.img} alt="attorneys Image" />
              </div>
              <div className="attorneys-text" onClick={navigateToProfile}>
                <h3>{Professionals.name}</h3>
                <p>{Professionals.designation}</p>
                <div><Rating name="simple-controlled" defaultValue={4} /><span>456+ ratings</span></div>
                <p><WorkHistoryIcon className="profile-intro-icon"/>{Professionals.experience} of experience</p>
                <p><LocationOnIcon className="profile-intro-icon"/>Kolkata</p>
                <p><GTranslateIcon className="profile-intro-icon"/>Bengali, English, Hindi</p>
              </div>
              <div className="skills">
                <h2>Practice Areas & Skills</h2>
                <p>
                  Agreements, Anticipatory Bail, Criminal Matter, Any legal Notice, Divorce.
                </p>
                <button className="btn" onClick={navigateToProfile}>Contact Now</button>
                <button className="btn" style={{margin:'0 0 0 2rem'}} onClick={() => handleChatting(Professionals.id)}>Chat</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          {showChat && (
            <div className="communication-wrapper">
            <button className="close-chat" onClick={()=> setShowChat(false)}><AiFillCloseCircle/></button>
              <Communication />
            </div>
          )}
        </div>
      </div>
      <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
          <ul className='sidebar-items'>
            <li className='sidebar-toggle' onClick={showSidebar}>
              <Link to='#' className='sidebar-bars'>
                <CloseIcon style={{color:"#FFFF"}}/>
              </Link>
            </li>
            <Filters/>
          </ul>
        </nav>
      <Footer />
    </div>
  );
};

export default Community;
