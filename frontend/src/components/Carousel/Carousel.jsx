import React from "react";
import "./carousel.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import img1 from "../../assets/carousel/c4.png";
import img2 from "../../assets/carousel/c2.png";
import img3 from "../../assets/carousel/c3.jpeg";

const content = [
  {
    title: "Welcome to e-nyayaSeva",
    description:
      "Unlocking Legal Support, Connecting You with Legal Experts",
    quote : "We try to make the world a secure place to live.",
    image: img1,
    btn1: "",
    btn1Dsc: "Register Now",
    btn2: "",
    btn2Dsc: "LogIn",
  },
  {
    title: "Legal Insights and Breaking News ",
    description:
      "Stay Informed with e-nyayaSeva",
    image: img2,
    btn1: "",
    btn1Dsc: "Get Latest News Updates",
    btn2: "",
    btn2Dsc: "Contact Us",
  },
  {
    title: "Your Legal Buddy: ",
    description:
      "Our Legal Chatbot is Here to Help",
    image: img3,
    btn1: "",
    btn1Dsc: "Connect to chatbot",
    btn2: "",
    btn2Dsc: "Contact Us",
  },
];

const Carousel = () => {
  return (
      <div className="box">
        <Slider className="slider-wrapper" autoplay={1000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center top`,
              }}
            >
              <span></span>
              <div className="inner">
                <p>{item.title}</p>
                <h1>{item.description}</h1>
                <p>{item.quote}</p>
                <div className="carouselBtn">
                  <a href={item.btn1} className="btn">
                    {item.btn1Dsc}
                  </a>
                  <a href={item.btn2} className="btn">
                    {item.btn2Dsc}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default Carousel;
