import React from "react";
import Nav from "../Navbar/Nav";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import Poll from "./Poll.jsx";
import Funds from "./Funds.jsx";
import "./community.css";
import CommunityChat from  "./CommunityChat.jsx";

const Community = () => {
  return (
    <div className="community">
      <Intro />
      <Nav />
      <h1>
        Welcome To Our Professional <span>Community</span>
      </h1>
      <div className="community-card-grid">
        <div className="community-card">
          {/* <img src={imageSrc} alt={title} className="law-card-image" /> */}
          <h2 className="community-card-title">Poll</h2>
          <p className="community-card-description">Write your Opinion here!</p>
          <a className="btn" href="#poll">Vote now ⮞</a>
        </div>
        <div className="community-card">
          {/* <img src={imageSrc} alt={title} className="law-card-image" /> */}
          <h2 className="community-card-title">Raise Funds</h2>
          <p className="community-card-description">Contribute to Social Service Reasons.</p>
          <a className="btn" href="#funds">Donate now ⮞</a>
        </div>
        <div className="community-card">
          {/* <img src={imageSrc} alt={title} className="law-card-image" /> */}
          <h2 className="community-card-title">Serve People</h2>
          <p className="community-card-description">Serve BPL clients.</p>
          <a className="btn">Read More ⮞</a>
        </div>
        <div className="community-card">
          {/* <img src={imageSrc} alt={title} className="law-card-image" /> */}
          <h2 className="community-card-title">Chat</h2>
          <p className="community-card-description">Connect with other professionals</p>
          <a className="btn" href="#communityChat">Click here to chat ⮞</a>
        </div>
      </div>
      <Poll/>
      <Funds/>
      <CommunityChat/>
      <Footer/>
    </div>
  );
};

export default Community;
