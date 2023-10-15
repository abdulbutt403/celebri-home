import React from "react";
import PricingCard from "../components/Common/PricingCard";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Pricings from "../components/Pricings";

export default function Pricing() {
  return (
    <div className="home-page">
    <Navbar />
    <Pricings />
  
    <Footer />
  </div>
  )
}
