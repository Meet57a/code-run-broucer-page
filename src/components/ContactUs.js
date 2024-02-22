import React from "react";
import Pin from "../assets/pin.svg";
import Call from "../assets/call.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Mail from "../assets/mail.svg";

export default function ContactUs() {
  return (
    <>
      <b className="contact-us-section-text">Contact Coordinators</b>
      <div className="contact-us-section">
        <div>
          <p>Faculty Coordinator</p>
          <h1>Prof. Vishalsing Gohil</h1>
          <p>
            <img src={Pin} alt="" />
            Location: MA153
          </p>
        </div>
        <div>
          <p>Faculty Coordinator</p>
          <h1>Prof. Bansiben Chavda</h1>
          <p>
            <img src={Pin} alt="" />
            Location: MA102
          </p>
        </div>
      </div>
      
      <div className="contact-us-section">
        <div>
          <p>Student Coordinator</p>
          <h1>Shivkumar Paun</h1>
          <div>
            <img src={Mail} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Call} alt="" />
          </div>
        </div>
        <div>
          <p>Student Coordinator</p>
          <h1>Ayush Vora</h1>
          <div>
            <img src={Mail} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Call} alt="" />
          </div>
        </div>
        <div>
          <p>Student Coordinator</p>
          <h1>Savan Bhanderi</h1>
          <div>
            <img src={Mail} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Call} alt="" />
          </div>
        </div>
        <div>
          <p>Student Coordinator</p>
          <h1>Meet Senjaliya</h1>
          <div>
            <img src={Mail} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Call} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
