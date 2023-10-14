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
          <p>Manish Dutta is an accomplished lawyer with a stellar track record of 15 years in the legal profession. He holds a Juris Doctor degree from a prestigious law school, and his qualifications include bar admissions in multiple states. John's extensive experience spans various areas of law, specializing in corporate litigation, real estate, and intellectual property. He has successfully represented Fortune 500 companies, securing numerous high-profile victories. John's unwavering commitment to his clients, profound legal acumen, and exceptional negotiation skills make him a sought-after legal expert. His reputation for delivering exemplary results and maintaining the highest ethical standards distinguishes him in the legal field.</p>
          <p><span>Enrollment Number:</span> WB159/2E</p>
          <h2>Courts:</h2>
          <p>Civil Court, Delhi High Court</p>
        </div>

        <hr/>

        <div className="profile-experience">
            <h2>Experience & Specialization</h2>
            <hr/>
            <div className="profile-experience-card">
              <h3>Decades of Legal Practice:</h3>
              <p>Manish Dutta boasts a distinguished legal career spanning over 25 years. Her wealth of experience ranges from corporate law to family disputes, equipping her with the knowledge and acumen to adeptly navigate diverse legal scenarios. Over the years, she has represented clients in various courtrooms, honing her skills and earning a reputation for her expertise.</p>
            </div>
            <div className="profile-experience-card">
              <h3>Corporate Law:</h3>
              <p>Manish's primary specialization lies in corporate law. She excels in guiding businesses through complex regulatory compliance, mergers, and acquisitions. Her extensive experience in corporate governance and contractual negotiations allows her to provide invaluable counsel to clients looking to establish, grow, or streamline their businesses.</p>
            </div>
            <div className="profile-experience-card">
              <h3>Criminal Defense:</h3>
              <p>Manish Dutta is a seasoned criminal defense lawyer with a 25-year career. He has represented clients in over 500 cases, ranging from misdemeanors to high-stakes felonies. His courtroom prowess, legal acumen, and unwavering commitment to protecting the rights of the accused have earned him a stellar reputation in the realm of criminal law.</p>
            </div>
            <div className="profile-experience-card">
              <h3>Family Law:</h3>
              <p>In the realm of family law, Manish Dutta is a recognized authority. Her specialization encompasses divorce, child custody, and spousal support cases. Jane's compassionate approach and commitment to helping families navigate the emotional complexities of these issues make her a trusted advocate in the field. Her track record of securing fair resolutions in challenging family disputes underscores her expertise.</p>
            </div>
            <div className="profile-experience-card">
              <h3>Estate Planning:</h3>
              <p>Manish Dutta's specialization lies in estate planning. With over 15 years of practice, she excels in crafting comprehensive estate plans, wills, and trusts. Her meticulous approach ensures clients' assets are protected, and their wishes are upheld, providing peace of mind for families and individuals.</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LegalProfile;
