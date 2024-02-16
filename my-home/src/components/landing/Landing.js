import React, { useEffect, useState } from "react";
import "../landing/landing.css";
import imageSlider from "./data";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  const [currentstate, setCurrentstate] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentstate === 2) {
        setCurrentstate(0);
      } else {
        setCurrentstate(currentstate + 1);
      }
    }, 100000);
    return () => clearTimeout(timer);
  }, [currentstate]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlider[currentstate].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
  };

  const gotoNext = (currentstate) => {
    setCurrentstate(currentstate);
  };
  return (
    <div className="landing_container">
      <div style={bgImageStyle}>
        <div className="slide_button">
          {imageSlider.map((imageSlider, currentstate) => (
            <span
              className="span"
              key={currentstate}
              onClick={() => gotoNext(currentstate)}
            >
              <p className="dought">.</p>
            </span>
          ))}
        </div>
        <Navbar/>
        <div className="content_box">
            <h1 className="content_h1">Perfect  Home</h1>
            <p className="content_p"> our modern living quarters</p>
        </div>

      </div>
      
    </div>
  );
};

export default Landing;
