import React from "react";
import Navbar from "./Navbar";
import MainPageContent from "./MainPageContent";
import About from "./About";

export default function MainPage() {
  return (
    <>
      <Navbar />

      <MainPageContent />

      <About />
    </>
  );
}
