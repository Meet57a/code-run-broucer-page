import React from "react";
import Navbar from "./Navbar";
import MainPageContent from "./MainPageContent";
import About from "./About";
import AboutRoundPage from "./About-Round-Page";
import WhyParticipents from "./WhyParticipents";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <>
      <Navbar />

      <MainPageContent />

      <About />

      <AboutRoundPage/>

      <WhyParticipents/>

      <ContactUs/>
      
      <Footer/> 
    </>
  );
}
