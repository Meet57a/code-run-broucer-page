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
            <a href="mailto:shivkumarpaun.118490@marwadiuniversity.ac.in">
              <img src={Mail} alt="" />
            </a>
            <a href="https://wa.me/+919428074070">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="tel:+919428074070">
              <img src={Call} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p>Student Coordinator</p>
          <h1>Ayush Vora</h1>
          <div>
            <a href="mailto:ayush.vora119460@marwadiuniversity.ac.in">
              <img src={Mail} alt="" />
            </a>
            <a href="https://wa.me/+919265957642">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="tel:+919265957642">
              <img src={Call} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p>Student Coordinator</p>
          <h1>Savan Bhanderi</h1>
          <div>
            <a href="mailto:i@sa1.dev">
              <img src={Mail} alt="" />
            </a>
            <a href="https://wa.me/+917574002467">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="tel:+917574002467">
              <img src={Call} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p>Student Coordinator</p>
          <h1>Meet Senjaliya</h1>
          <div>
            <a href="mailto:meet.senjaliya116920@marwadiuniversity.ac.in">
              <img src={Mail} alt="" />
            </a>
            <a href="https://wa.me/+919904239048">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="tel:+919904239048">
              <img src={Call} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
