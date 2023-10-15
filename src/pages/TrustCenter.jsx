import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Trust from "../components/Trust";

export default function TrustCenter() {
  return (
    <div className="home-page">
      <Navbar />
   
      <Trust />
  
      <Footer />
    </div>
  );
}
