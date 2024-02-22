import React from "react";
import FirstPrize from "../assets/first-prize.svg";
import Bulb from "../assets/bulb.svg";
import Handshake from "../assets/handshake.svg";
import Certificate from "../assets/certificate.svg"

export default function WhyParticipents() {
  return (
    <>
      <div className="why-participents-text">Why should we participate?</div>
      <div className="why-participents-section">
        <div>
            <img src={FirstPrize} alt="" />
            <b>Prizes</b>
            <p>Stand a chance to win attractive cash prizes and recognition for your coding prowess.</p>
        </div>
        <div>
            <img src={Bulb} alt="" />
            <b>Skill Enhancement</b>
            <p>Sharpen your programming skills and expand your knowledge in a competitive yet supportive environment.</p>
        </div>
        <div>
            <img src={Handshake} alt="" />
            <b>Networking</b>
            <p>Connect with like-minded peers, faculty members, and industry professionals who share your passion for programming.</p>
        </div>
        <div>
            <img src={Certificate} alt="" />
            <b>Earn Certification</b>
            <p>All participants will receive a certificate of participation, recognizing your dedication and achievement in the CodeRun competition.</p>
        </div>  
      </div>
    </>
  );
}
