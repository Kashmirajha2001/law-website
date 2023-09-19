import React, { useState, useEffect } from "react";
import "./professionals.css";
import ProfessionalsData from "./ProfessionalsData";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';
import {Rating} from '@mui/material';

const Professionals = () => {
  const openUrlInNewTab = (url) => {
    window.open(url, "_blank");
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
            onClick={() => openUrlInNewTab(Professionals.profile)}
          >
            <div className="professionals-image">
              <img src={Professionals.img} alt="professionals Image" />
            </div>
            <div className="professionals-text">
              <h3>{Professionals.name}</h3>
              <p>{Professionals.designation}</p>
              <Rating
                name="simple-controlled"
                defaultValue={4}
              />
              <div className="socials">
                <a href="">
                  <FacebookRoundedIcon
                    className="socialIcons"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </a>
                <a href="">
                  <TwitterIcon
                    className="socialIcons"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </a>
                <a href="">
                  <LinkedInIcon
                    className="socialIcons"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </a>
                <a href="">
                  <MailIcon
                    className="socialIcons"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
