import React from "react";
import useResponsive from "../Hooks/responsive";
import { IconLinkT, IconTiktok, IconTwitter, InstagramIcon } from "../svgs";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const companyLinks = [
    { text: "The CelebriLinks Blog", path: "/blogs" },
    { text: "Contact", path: "/contact" },
    { text: "Marketplace", path: "/marketplace" },
    { text: "What's New", path: "/browse" },
    // Add more company links as needed
  ];

  const communityLinks = [
    { text: "CelebriLinks Creators", path: "/users" },
    { text: "CelebriLinks Blogs", path: "/blogs" },
    { text: "2022 Creator Report", path: "/report-problem" },
    { text: "Cookies", path: "/cookie" },
    // Add more community links as needed
  ];

  const supportLinks = [
    { text: "Help Topics", path: "/help" },
    { text: "Getting Started", path: "/signup" },
    { text: "CelebriLinks Pro", path: "/terms" },
    { text: "Features & How-Tos", path: "/pricing" },
    // Add more support links as needed
  ];

  const trustLinks = [
    { text: "Terms & Conditions", path: "/terms" },
    { text: "Privacy Notice", path: "/privacy" },
    { text: "Cookie Notice", path: "/cookie" },
    { text: "Trust Center", path: "/trust-center" },
    // Add more trust links as needed
  ];

  const isMobile = useResponsive();

  return (
    <div className="footer" style={{ minHeight: "230vh" }}>
      <div className="footer-form">
        {" "}
        <h1>
          Jumpstart your corner of {isMobile && <br />} the{" "}
          {!isMobile && <br />}
          internet today
        </h1>
        <div className="mt-48">
          <div className="hero-form-wrap flex">
            <form className="hero-form">
              <HalfInput />
              <RoundButton text={"Claim your CelebriLinks"} />
            </form>
          </div>
        </div>
      </div>

      <div className="links-wrap">
        <div className="bTRgKr flex" style={{ paddingBottom: 60 }}>
          <Nav text={"Community"} array={communityLinks} />
          <Nav text={"Company"} array={companyLinks} />

          <Nav text={"Support"} array={supportLinks} />
          <Nav text={"trust"} array={trustLinks} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? 20 : "auto",
            flexDirection: isMobile ? "column" : "row",
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
  const navigate = useNavigate();
  return (
    <button
      className="claim-btn"
      onClick={() => navigate("/signup")}
      style={{ border: "none", outline: "none", cursor: "pointer" }}
    >
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

const Link = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <a
      className="gQHsyf lom"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(path)}
    >
      <p className="cpeqoh">{text}</p>
    </a>
  );
};

const Nav = ({ text, array }) => {
  return (
    <div className="wrNff"  style={{zIndex: 100000}}>
      <div className="kLEIyT">
        {text === "trust" ? (
          <h4 className="dubjts">Trust &amp; Legal</h4>
        ) : (
          <h4 className="dubjts">{text}</h4>
        )}
      </div>
      <nav>
        {array.map((link, index) => (
          <Link key={index} text={link.text} path={link.path} />
        ))}
      </nav>
    </div>
  );
};

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="login-btn"
      onClick={() => navigate("/login")}
      style={{ border: "none", outline: "none", cursor: "pointer" }}
    >
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
    <div
      className="kcskEf box"
      style={{ height: 200, display: "flex", justifyContent: "center" }}
    >
      <img src="big-white.png" style={{ maxWidth: "80%" }} />
    </div>
  );
};
