import React from "react";
import useResponsive from "../Hooks/responsive";

const Hero4 = () => {
  const isMobile = useResponsive();
  return (
    <div className="hero4">
      <div style={{ padding: "5.5%", transform: "translateY(-26px)" }}>
        <img
          src="hero4-bg.png"
          className="hero4-bg"
          style={
            isMobile ? { maxWidth: "78vw", transform: "translateX(-16px)" } : {}
          }
        />
      </div>
      <div style={{ paddingLeft: "1.3%", transform: "translateY(-22px)" }}>
        <h1 className="hero-heading-4">
          Analyze your <br /> audience and keep
          <br /> your followers
          <br /> engaged
        </h1>

        <div className="hero-text-4">
          <p>
            Track your engagement over time, monitor revenue and learn what’s
            converting your <br /> audience. Make informed updates on the fly to
            keep them coming back.
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
    </div>
  );
};

export default Hero4;

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
