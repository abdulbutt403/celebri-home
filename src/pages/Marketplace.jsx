import React from "react";
import Footer from "../components/Marketplace/Footer";
import Hero1 from "../components/Marketplace/Hero1";
import Navbar from "../components/Marketplace/Navbar";
import useResponsive from "../Hooks/responsive";

export default function MarketPlace() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero1 />
      <Featured />
      <Content />
      <Money />
      <Footer />
    </div>
  );
}

const Featured = () => {
  const isMobile = useResponsive();
  return (
    <>
      <h2 class="Text__StyledText-sc-1ggdu3j-0 MIUTU">Featured</h2>
      <div
        className="styles__FeaturedBlock-sc-1qw1enh-1 jMYFMD"
        style={isMobile ? { gridTemplateColumns: "1fr" } : {}}
      >
        <div>
          <img
            alt="Snapchat"
            src="https://linktr.ee/marketplace/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fl8t1gug0g833%2F1QlP70FyR4JNpjaNYKjkrQ%2F316539d63bdab5ec4fc19e5531df0ddc%2FsnapFeatured.png&w=3840&q=75"
            className="img"
            loading="lazy"
          />
          <br />
          <SocialButton
            label="Snapchat"
            imageSrc="https://link-types-assets.production.linktr.ee/snapchat/icon.svg"
            backgroundImage="https://link-types-assets.production.linktr.ee/snapchat/icon.svg"
          />
        </div>

        <div>
          <img
            alt="Snapchat"
            src=" https://linktr.ee/marketplace/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fl8t1gug0g833%2F7UpZ7Z7l7yzXot4Tv4s9X%2Fb0a927d62a68c9e77d06d93a02f0487b%2Freddit-featured.webp&w=3840&q=75"
            className="img"
            loading="lazy"
          />
          <br />
          <SocialButton
            label="Reddit"
            imageSrc="https://link-types-assets.production.linktr.ee/reddit/icon.svg"
            backgroundImage="https://link-types-assets.production.linktr.ee/reddit/icon.svg"
            text={"Showcase your Reddit profile"}
          />
        </div>
      </div>
    </>
  );
};

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
      label: "Cameo",
      imageSrc: "https://link-types-assets.production.linktr.ee/cameo/icon.svg",
    },
    // Add more objects for other social buttons
  ];
  const isMobile = useResponsive();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 color="#1E2330" class="Text__StyledText-sc-1ggdu3j-0 MIUTU">
          Share your content
        </h2>
        <a class="foLnLr" href="/marketplace/categories/share-content">
          See 23 Apps
        </a>
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
          <div style={{  width:isMobile ? "100%" : "33%" }}>
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

const Money = () => {
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
      label: "Cameo",
      imageSrc: "https://link-types-assets.production.linktr.ee/cameo/icon.svg",
    },
    // Add more objects for other social buttons
  ];
  const isMobile = useResponsive();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 color="#1E2330" class="Text__StyledText-sc-1ggdu3j-0 MIUTU">
          Make and collect Money
        </h2>
        <a class="foLnLr" href="/marketplace/categories/share-content">
          See 14 Apps
        </a>
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
          <div style={{ width: isMobile ? "100%": "33%" }}>
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
