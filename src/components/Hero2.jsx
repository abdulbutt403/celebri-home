import React from "react";
import useResponsive from "../Hooks/responsive";
import { useNavigate } from "react-router-dom";

const Hero2 = () => {
  const isMobile = useResponsive()
  const navigate = useNavigate()
  return (
    <div className="hero2" >
      <img style={isMobile? {maxWidth: '90vw'}: { transform: "translateY(-27px) "}} src="hero2-bg.png" className="hero1-bg" />
      <div style={{paddingLeft: "1.3%", transform: 'translateY(-30px)'}}>
        {!isMobile ? <h1
          className="hero-heading-2"
        >
          Create and customize
          <br /> your CelebriLinks in
          <br /> minutes
        </h1> : <h1
          className="hero-heading-2"
        >
          Create and <br /> customize
          your<br /> CelebriLinks in
           minutes
        </h1>}

        <div className="hero-text-2">
          <p>
          Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events<br/> and more. It all comes together in a link in bio landing page designed to convert..
          </p>
        </div>

        <div className={!isMobile ? "mt-48": ""} style={isMobile ? {marginTop: 15, transform: 'translateX(-5px)'} : {}}>
          <div className="hero-form-wrap flex">
            <form className="hero-form" onClick={() => navigate('/signup')} style={{border: 'none', outline: 'none'}}>
              <RoundButton text={"Get started for free"} style={{border: 'none', outline: 'none'}} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

const RoundButton = ({ text }) => {
  return (
    <button className="started-btn">
      <div className="started-btn-inner">
        <span className="started-btn-text">{text}</span>
      </div>
    </button>
  );
};
