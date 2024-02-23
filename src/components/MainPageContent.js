import React, { useEffect, useState } from "react";
import LocationIcon from "../assets/gps.svg";
import CalenderIcon from "../assets/calender.svg";


export default function   MainPageContent() {
  const calculateTimeLeft = () => {
    const difference = new Date("2024-03-13") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="main-content-container">
      <div className="main-section-content-first-line-container">
        <div className="main-section-content-first-line">
          <h2>Are you</h2>
          <h1>ready</h1>
          <h2>to attend?</h2>
        </div>
      </div>

      <div className="main-section-content-second-line-container">
        <h2>CodeRun</h2>
      </div>
      <div className="main-section-content-third-line-container">
        <b>2</b>
        <b>0</b>
        <b>2</b>
        <b>4</b>
      </div>

      <div className="main-section-content-fourth-line-container">
        <div className="main-section-content-fourth-line-container-first">
          <img src={LocationIcon} alt="location-icon" />
          <h2>Main building, MB306</h2>
        </div>
        <div className="main-section-content-fourth-line-container-first">
          <img src={CalenderIcon} alt="location-icon" />
          <h2>Starts on 13-Mar-2024</h2>
        </div>
      </div>

      <div className="main-section-content-fifth-line-container">
        <div className="main-section-content-fifth-line-container-btn">
          <a href="https://mufest.marwadiuniversity.ac.in:553/(S(k2pqniprr411y1gpp1d5wqay))/EventDetail.aspx?ID=355"><button>Register Now!</button></a>
          <a href='#about'><button>Visit More Info</button></a>
        </div>
      </div>

      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div className="main-section-content-timer-container">
          <h2>{timeLeft.days}</h2>
          <h2>Days</h2>
          <h2>{timeLeft.hours - (timeLeft.days * 24)}</h2>
          <h2>hours</h2>
          <h2>{timeLeft.minutes}</h2>
          <h2>Minutes</h2>
          <h2>{timeLeft.seconds}</h2>
          <h2>Seconds</h2>

        </div>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </div>
  );
}
