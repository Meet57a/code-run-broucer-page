import React from "react";
import GpsIcon from "../assets/gps.svg";
import Calender from "../assets/calender.svg";

export default function About() {
  return (
    <>
    <div className="about-section-first-line" id="about"><p>THIS EVENT IS ONLY FOR DIPLOMA STUDENTS</p></div>
      <div className="about-section" >
        <div className="about-section-content">
          <h2>About This Event</h2>
          <p>
            CodeRun is more than just a coding competition; it's an immersive
            experience designed to challenge and inspire budding programmers.
            With three rounds of intense competition, we aim to identify and
            celebrate the brightest talents in the realm of programming.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-section-content-event-ditails">
          <h2>Event Details</h2>
          <div>
            <img src={GpsIcon} alt="" />
            <b>Venue: </b> Main building, MB306
          </div>
          <div>
            <img src={Calender} alt="" /> <b>Date: </b> 13th March 2024
          </div>
        </div>
      </div>
    </>
  );
}
