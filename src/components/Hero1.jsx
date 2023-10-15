import React from "react";
import useResponsive from "../Hooks/responsive";

const Hero1 = () => {
  const isMobile = useResponsive();
  return (
    <div className="hero1">
      <div style={!isMobile ? { marginTop: 64 } : { marginTop: -64 }}>
        {!isMobile ? (
          <h1 className="hero-heading">
            Everything you <br />
            are. In one, simple
            <br /> link in bio.
          </h1>
        ) : (
          <h1 className="hero-heading">
            Everything you are.
            <br /> In one, simple link
            <br /> in bio.
          </h1>
        )}

        <div className="hero-text">
          <p>
            Join 35M+ people using CelebriLinks for their link in bio. One link
            to help you share
            <br /> everything you create, curate and sell from your Instagram,
            TikTok, Twitter, YouTube
            <br /> and other social media profiles.
          </p>
        </div>

        <div className={!isMobile ? "mt-48" : ""}>
          <div className="hero-form-wrap flex">
            <form className="hero-form">
              <HalfInput />
              <RoundButton text={"Claim your CelebriLinks"} />
            </form>
          </div>
        </div>
      </div>
      <img
        src="hero1-color.png"
        style={isMobile ? { maxWidth: "75vw" } : {}}
        className="hero1-bg"
      />
    </div>
  );
};

export default Hero1;

const RoundButton = ({ text }) => {
  return (
    <button className="claim-btn">
      <div
        className="claim-btn-inner"
        style={{ backgroundColor: "rgb(80, 34, 116)" }}
      >
        <span className="claim-btn-text" style={{ color: "#fff" }}>
          {text}
        </span>
      </div>
    </button>
  );
};

const HalfInput = () => {
  return (
    <div className="hero-input-wrap hero-input">
      <p className="cpEprS">linktr.ee/</p>
      <input placeholder="yourname" className="input-text"></input>
    </div>
  );
};
