import React from "react";
import Footer from "../components/Marketplace/Footer";
import Hero1 from "../components/Marketplace/Hero1";
import Navbar from "../components/Marketplace/Navbar";
import useResponsive from "../Hooks/responsive";

export default function Browse() {
  return (
    <div className="home-page">
      <Navbar browse />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          paddingTop: 200,
          maxWidth: "90vw",
          margin: "auto",
          cursor: "pointer",
        }}
      >
        <a style={{ fontWeight: 300, fontSize: 13 }} href="/marketplace">
          Home
        </a>
        <span style={{ fontWeight: 600 }}>
          <i className="fa fa-angle-right" />
        </span>
        <a style={{ fontWeight: 300, fontSize: 13 }}>Browse</a>
      </div>
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  const socialButtonsData = [
    {
      label: "Snapchat",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/snapchat/icon.svg",
    },
    {
      label: "SoundCloud",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg",
    },
    {
      label: "Tiktok",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/tiktok/icon.svg",
    },
    {
      label: "Twitter",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/twitter/icon.svg",
    },
    {
      label: "Youtube",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/youtube/icon.svg",
    },
    {
      label: "Snapchat",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/snapchat/icon.svg",
    },
    {
      label: "SoundCloud",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg",
    },
    {
      label: "Tiktok",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/tiktok/icon.svg",
    },
    {
      label: "Twitter",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/twitter/icon.svg",
    },
    {
      label: "Youtube",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/youtube/icon.svg",
    },
    {
      label: "Cameo",
      imageSrc: "https://link-types-assets.production.linktr.ee/cameo/icon.svg",
    },
    {
      label: "Cameo",
      imageSrc: "https://link-types-assets.production.linktr.ee/cameo/icon.svg",
    },
    {
      label: "SoundCloud",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg",
    },
    {
      label: "Tiktok",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/tiktok/icon.svg",
    },
    {
      label: "Twitter",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/twitter/icon.svg",
    },
    {
      label: "Youtube",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/youtube/icon.svg",
    },
    {
      label: "Snapchat",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/snapchat/icon.svg",
    },
    {
      label: "SoundCloud",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg",
    },
    {
      label: "Tiktok",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/tiktok/icon.svg",
    },
    {
      label: "Twitter",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/twitter/icon.svg",
    },
    {
      label: "Youtube",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/youtube/icon.svg",
    },
    {
      label: "Snapchat",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/snapchat/icon.svg",
    },
    {
      label: "SoundCloud",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg",
    },
    {
      label: "Tiktok",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/tiktok/icon.svg",
    },
    {
      label: "Twitter",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/twitter/icon.svg",
    },
    {
      label: "Youtube",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/youtube/icon.svg",
    },
    {
      label: "Cameo",
      imageSrc: "https://link-types-assets.production.linktr.ee/cameo/icon.svg",
    },
    {
      label: "Cameo",
      imageSrc: "https://link-types-assets.production.linktr.ee/cameo/icon.svg",
    },
    {
      label: "SoundCloud",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg",
    },
    {
      label: "Tiktok",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/tiktok/icon.svg",
    },
    {
      label: "Twitter",
      imageSrc:
        "https://link-types-assets.production.linktr.ee/twitter/icon.svg",
    },
    // Add more objects for other social buttons
  ];
  const isMobile = useResponsive();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",

          width: "93%",
          margin: "auto",
          marginTop: 80,
          paddingLeft: 12,
        }}
      >
        <h1 className=" browse-txt">All Link Apps and Integrations</h1>
        <span className="styles__Badge-sc-1ftolr6-3 gXSiVi">48</span>
      </div>
      <div
        style={{
          width: "93%",
          margin: "auto",
          marginTop: 60,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {socialButtonsData.map((buttonData, index) => (
          <div style={{ width: isMobile ? "100%" : "33%" }}>
            <SocialButton
              key={index}
              label={buttonData.label}
              imageSrc={buttonData.imageSrc}
              backgroundImage={buttonData.backgroundImage}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const SocialButton = ({ label, imageSrc, text }) => {
  const buttonStyle = {
    position: "relative",
    width: "318px",
    overflow: "hidden",
    height: "98px",
    outline: "none",
    outlineOffset: "-2px",
    backgroundColor: "transparent",
    transition: "all 0.3s ease-out",
    "&:hover": {
      ringColor: "#d9dcd5",
      borderColor: "#d9dcd5",
      backgroundColor: "#fbfbf8",
    },
    "&:active": {
      backgroundColor: "#e0e2d9",
    },
  };

  const contentContainerStyle = {
    position: "absolute",
    textAlign: "left",
    bottom: "-90%",
    left: "25%",
    width: "100%",
    padding: "0.5rem",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "56px",
    height: "56px",
    objectFit: "contain",
    borderRadius: "13px",
    backgroundColor: "#2d3c55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginRight: "0.75rem",
    marginLeft: 15,
    objectFit: "cover",
  };

  const labelStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginBottom: "0.1rem",
    color: "#000",
  };

  const descriptionStyle = {
    fontSize: "16px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#000",
  };

  return (
    <button style={buttonStyle} aria-label={label}>
      <div className="h-1/2">
        <div className="flex items-center justify-start relative h-1/2">
          <div style={imageStyle}>
            <img
              src={imageSrc}
              style={{ objectFit: "cover", minWidth: "100%" }}
              alt=""
            />
          </div>
          <div style={contentContainerStyle}>
            <p style={labelStyle}>{label}</p>
            <p style={descriptionStyle}>
              {text ? text : "Promote your public profile"}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};


