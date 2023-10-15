import React from "react";
import useResponsive from "../Hooks/responsive";

const Trust = () => {
  const isMobile = useResponsive();
  return (
    <div className="hero4">
      <div style={{ padding: "5.5%", transform: "translateY(-26px)", marginTop: 200 }}>
        <img
          src="https://linktr.ee/_gatsby/image/bc4455e8a57d93d24b77dc1d3307bf5d/694f81fa827bbb1a08a42fc36c826132/image.avif?eu=020fdba9feb75b2aed4cf406184d624d35540ce715acfd71ecc9e18fdcaa09d15e7dd42fea5925ea6ac7f6e77935729f600e165e7bb1e81d5b03498363f549e23d06250b83b3553aa2be8200e3851928e6bc9589605d36caba7a194684253da3892076509006d049b6cbc90c6cd65416e5a3ffb7d77dff44e0950a1e5e01fe836f26f76331bbbbe1e878208b5f51dd228d88a2992d2e233e26d791dac9a7bfbfa483e44bb56cb4360aa9d11d02222d348bb6a818d32933a3993c266c3443f28b4c544ef84ed573&a=w%3D1280%26h%3D1530%26fm%3Davif%26q%3D75&cd=c0fe021d8005e3abd2b6c0f126d5a977"

          style={
            isMobile ? { maxWidth: "78vw", transform: "translateX(-16px)" } : {maxWidth: '35vw'}
          }
        />
      </div>
      <div style={{ transform: "translate(-22px, 52px)" }} className="gGDurp">
        <h1 className="hero-heading-4" style={{ transform: "translateX(-5px)" }} >
          Trust Center
        </h1>

        <div className="trust-text">
    
          <p>We take data security and privacy seriously at Linktree. Here, you’ll find the <br/> information you need to feel confident that the data you entrust to us is stored <br/> safely.</p>
 
        </div>


        <ul>
            <li>
              <a href="#WhatDoesCelebriLinksDo">What does CelebriLinks do?</a>
            </li>
            <li>
              <a href="#HowDoesThisPrivacyNoticeApplyToMe">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#WhatPersonalInformationDoWeCollect">
                 Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#WhyDoWeCollectYourPersonalInformation">
                Help Center
              </a>
            </li>

      
            <li>
              <a href="#SupplementalInformationForCaliforniaResidents">
                Cookie Policy
              </a>
            </li>

            <li>
              <a href="#SupplementalInformationForCaliforniaResidents">
                Report a problem
              </a>
            </li>
          </ul>

    
      </div>
    </div>
  );
};

export default Trust;

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
