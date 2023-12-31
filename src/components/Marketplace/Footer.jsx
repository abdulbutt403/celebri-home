import React from "react";
import useResponsive from "../../Hooks/responsive";
import { IconLinkT, IconTiktok, IconTwitter, InstagramIcon } from "../../svgs";

export default function Footer() {
  const companyLinks = [
    "The CelebriLinks Blog",
    "Engineering Blog",
    "Marketplace",
    "What's New",
    "About",
    "Press",
    "Careers",
    "Social Good",
    "Contact",
  ];

  const communityLinks = [
    "CelebriLinks Creator Services Program",
    "CelebriLinks for Enterprise",
    "2022 Creator Report",
    "Charities",
    "Creator Profile Directory",
    "Explore Templates",
  ];

  const supportLinks = [
    "Help Topics",
    "Getting Started",
    "CelebriLinks Pro",
    "Features &amp; How-Tos",
    "FAQs",
    "Report a Violation",
  ];

  const trustLinks = [
    "Terms &amp; Conditions",
    "Privacy Notice",
    "Cookie Notice",
    "Trust Center",
    "Cookie Preferences",
  ];


  const isMobile = useResponsive()
  return (
    <div className="footer" style={{marginTop: 200, background: 'rgb(243, 243, 241)', minHeight: '170vh'}}>
    

      <div className="links-wrap">
        <div className="bTRgKr flex">
          <Nav text={"Company"} array={companyLinks} />
          <Nav text={"Community"} array={communityLinks} />
          <Nav text={"Support"} array={supportLinks} />
          <Nav text={"trust"} array={trustLinks} />
        </div>

        <div
         style={{
          display: "flex",
          alignItems: isMobile ? "start": "center",
          justifyContent: "space-between",
          gap: isMobile ? 20: "auto", 
          flexDirection:  isMobile ? 'column': 'row'
        }}
        >
          <div className="list-right">
            <LoginButton />
            <RoundButton text={"Get started for free"} />
          </div>
          <SocialMediaIcons />
        </div>
      </div>

      <BigLogo />
    </div>
  );
}

const RoundButton = ({ text }) => {
  return (
    <button className="claim-btn">
      <div className="claim-btn-inner">
        <span className="claim-btn-text">{text}</span>
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

const Link = ({ text }) => {
  return (
    <a className="gQHsyf">
      <p className="cpeqoh">{text}</p>
    </a>
  );
};

const Nav = ({ text, array }) => {
  return (
    <div className="wrNff">
      <div className="kLEIyT">
        {text === "trust" ? (
          <h4 className="dubjts">Trust &amp; Legal</h4>
        ) : (
          <h4 className="dubjts">{text}</h4>
        )}
      </div>
      <nav>
        {array.map((x) => (
          <Link text={x} />
        ))}
      </nav>
    </div>
  );
};

const LoginButton = () => {
  return (
    <div className="login-btn">
      <span className="login-text">Log in</span>
    </div>
  );
};

const SocialMediaIcons = () => {
  return (
    <div className="kNXMgw flex">
      <div className="hMmGGJ">
        <a>
          <IconLinkT />
        </a>
      </div>
      <div className="hMmGGJ">
        <a>
          <IconTwitter />
        </a>
      </div>
      <div className="hMmGGJ">
        <a>
          <IconTiktok />
        </a>
      </div>
      <div className="hMmGGJ">
        <a>
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

const BigLogo = () => {
  return (
    <div className="kcskEf box" style={{ height: 200, display: 'flex', justifyContent: 'center' }}>

        <img src="big-white.png" style={{ maxWidth: "80%" }} />
      
    </div>
  );
};
