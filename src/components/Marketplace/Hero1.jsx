import React from "react";
import useResponsive from "../../Hooks/responsive";

const Hero1 = () => {
  const isMobile = useResponsive();
  return (
    <div
      className="hero1 mm"
      style={{ background: "#790016", height: isMobile ? "100vh" : "120vh" }}
    >
      <div
        style={{
          marginTop: isMobile ? 0 : 64,
          paddingLeft: isMobile ? 0 : 40,
        }}
      >
        <h1
          className="hero-heading"
          style={{
            color: "rgb(233, 192, 233)",
            fontSize: isMobile ? "48px" : "88px",
          }}
        >
          Connect {!isMobile && <br />}
          more {isMobile && <br />} of you
        </h1>

        <div className="hero-text">
          <p style={{ color: "rgb(233, 192, 233)", fontSize: "20px" }}>
            Bring the best experiences across the {isMobile && <br />} internet
            to one {!isMobile && <br />}place: your CelebriLinks
          </p>
        </div>

        <div className={!isMobile ? "mt-48": ""} style={isMobile ? {marginTop: 15} : {}}>
          <div className="hero-form-wrap flex">
            <form className="hero-form">
              <HalfInput />
            </form>
          </div>
        </div>
      </div>
      <img src="tasveer.png" className="hero1-cg ggg" />
    </div>
  );
};

export default Hero1;

const HalfInput = () => {
  const isMobile = useResponsive();
  return (
    <div
      className="hero-input-wrap hero-input"
      style={{ width: isMobile ? 348 : 448 }}
    >
      <svg
        style={{ height: 20, width: 20, marginRight: 10, marginTop: 2 }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.125 8.12445C1.125 4.25846 4.25901 1.12445 8.125 1.12445C11.991 1.12445 15.125 4.25846 15.125 8.12445C15.125 11.9904 11.991 15.1245 8.125 15.1245C4.25901 15.1245 1.125 11.9904 1.125 8.12445ZM8.125 0.124451C3.70672 0.124451 0.125 3.70617 0.125 8.12445C0.125 12.5427 3.70672 16.1245 8.125 16.1245C10.1542 16.1245 12.007 15.3689 13.4173 14.1239L18.3964 19.103L18.75 19.4566L19.4571 18.7495L19.1036 18.3959L14.1244 13.4168C15.3695 12.0064 16.125 10.1537 16.125 8.12445C16.125 3.70617 12.5433 0.124451 8.125 0.124451Z"
          fill="#111821"
        ></path>
      </svg>
      <input
        placeholder="Search Link Apps and integrations..."
        className="input-text"
      ></input>
    </div>
  );
};
