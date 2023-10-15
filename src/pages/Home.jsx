import React from "react";
import Footer from "../components/Footer";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero2 />
    

      <Hero3 />
      <Hero1 />
      <Hero4 />
      
      <Plans />
      <Footer />
    </div>
  );
}
