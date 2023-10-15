import React from "react";
import useResponsive from "../Hooks/responsive";

const Hero3 = () => {
  const isMobile = useResponsive();
  return (
    <div className="hero3">
      <div style={{ paddingLeft: "1.3%", transform: "translateY(-30px)" }}>
        <h1 className="hero-heading-3">
          Share your CelebriLinks
          <br /> from your Instagram,
          <br /> TikTok, Twitter and <br />
          other bios
        </h1>

        <div className="hero-text-3">
          <p>
            Add your unique CelebriLinks URL to all the platforms and places you
            find your audience.
            <br /> Then use your QR code to drive your offline traffic online.
          </p>
        </div>

        <div className="mt-48">
          <div className="hero-form-wrap flex">
            <form className="hero-form">
              <RoundButton text={"Get started for free"} />
            </form>
          </div>
        </div>
      </div>

      <img
        style={
          isMobile ? { maxWidth: "90vw", transform: "translateY(-17px) "  } : { transform: "translateY(-27px) " }
        }
        src="hero3-bg.png"
        className="hero1-bg"
      />
    </div>
  );
};

export default Hero3;

const RoundButton = ({ text }) => {
  return (
    <button className="started-btn">
      <div
        className="started-btn-inner"
        style={{ background: "rgb(233, 192, 233)" }}
      >
        <span className="started-btn-text" style={{ color: "rgb(30, 35, 48)" }}>
          {text}
        </span>
      </div>
    </button>
  );
};
