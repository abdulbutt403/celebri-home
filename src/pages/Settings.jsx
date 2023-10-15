import React, { useState } from "react";
import AdminHeader from "../components/Admin/Header";
import useResponsive from "../Hooks/responsive";
import ReactDevicePreview from "react-device-preview";
import {
  DollarIcon,
  LockedIcon,
  MailingIcon,
  PlusIcon,
  SocialIcons,
  SubscribeIcon,
  SupportBanner,
  TryFreeIcon,
} from "../svgs";

export default function Settings() {
  const isMobile = useResponsive()
  return (
    <div className="admin-panel">
      <AdminHeader />
      <main>
        <div style={{ display: "flex", minHeight: "100vh", paddingTop: 10 ,       flexDirection: isMobile ? "column" : "row",}}>
          <div
            style={{
              flexBasis: isMobile ? "100%" : "100%",
              padding: isMobile? 0 : "0 0.5%",
              borderRight: "1px solid rgba(0,0,0,0.1)",
              paddingTop: 70,
              display: "flex",
            }}
          >
            <div style={{ display: "flex" }}>
              {!isMobile && <SettingsNavigation />}
              <Feed />
            </div>
          </div>
          <div
            style={{
              flexBasis: isMobile ? "100%" : "40%",
              display: "flex",
              alignItems: "start",
              paddingTop: "200px",
              paddingLeft: isMobile ? 0 : 150,
              maxHeight: isMobile ? "94vh" : "auto",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", paddingLeft: 70 }}>
              <ReactDevicePreview
                device="galaxynote8"
                scale="0.6"
              ></ReactDevicePreview>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const SettingsNavigation = () => {
  const navLinks = [
    {
      icon: <SocialIcons />,
      label: "Social icons",
    },
    {
      icon: <SupportBanner />,
      label: "Support banner",
    },
    {
      icon: <MailingIcon />,
      label: "Mailing list integrations",
    },
    {
      icon: <DollarIcon />,
      label: "Commerce integrations",
    },
    {
      icon: <MailingIcon />,
      label: "SEO",
    },
    {
      icon: <DollarIcon />,
      label: "Subscribe",
    },
    {
      icon: <SubscribeIcon />,
      label: "Affiliate Program",
    },
  ];
  

  return (
    <nav className="side-nav">
      {navLinks.map((link, index) => (
        <a key={index} tabIndex="0" className="setting-link">
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
};

const Feed = () => {
  return (
    <div className="settings-feed">
      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <SocialIcons />
        <span>Social Icons</span>
      </a>
      <IconSection />

      <br />

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <SupportBanner />
        <span>Support Banner</span>
      </a>

      <SupportSection />

      <br />

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <MailingIcon />
        <span>Mailing list integrations</span>
      </a>

      <MailingSection />

      <br/>

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <DollarIcon />
        <span>Commerce integrations</span>
      </a>

      <CommerceSection />
    </div>
  );
};

const IconSection = () => {
  return (
    <div className="sc-eGCarw zAeKe">
      <div className="sc-ctaXAZ hYulVh">
        <h2 className="text-black text-md font-semibold leading-heading">
          Be iconic
        </h2>
      </div>
      <p className="text-concrete text-md mt-2">
        Add icons linking to your social profiles, email and more
      </p>
      <div className="sc-dFJsGO kUMKOy">
        <div>
          <div className="w-full">
            <button
              style={{ width: 90, height: 40, borderRadius: "9999px" }}
              className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-primary text-white sm:!w-auto hover:bg-primary-alt active:bg-primary-alt"
              type="button"
            >
              <span className="flex items-center justify-center">
                <span className="block font-semibold text-md">Add icon</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportSection = () => {
  const [active, setActive] = useState(false);
  const isMobile = useResponsive()
  return (
    <div className="sc-eGCarw zAeKe">
      <div className="sc-ctaXAZ hYulVh">
        <h2 className="text-black text-md font-semibold leading-heading">
          Show your support
        </h2>
      </div>
      <p className="text-concrete text-md mt-2">
        Show your support for important causes with a profile banner. Only one
        banner can be active at a time.
      </p>
      <label
        style={isMobile ? {transform: 'translateY(-90px)'} : {}}
        onClick={() => setActive((x) => !x)}
        className={`sc-jQbIHB cQriIP ${
          active ? "checked" : ""
        } sc-fvhGYg kHEClt`}
      >
        <input type="checkbox" className="sc-jUEnpm cCSKON" />
      </label>
    </div>
  );
};

const MailingSection = () => {
  return (
    <div>
      <div className="sc-eGCarw zAeKe">
        <div className="sc-ctaXAZ hYulVh">
          <h2 className="text-black text-md font-semibold leading-heading">
            Email sign-up
          </h2>
        </div>
        <p className="text-concrete text-md mt-2">
          Add an email sign-up field to your CelebriLinks so visitors can join your
          mailing list.
        </p>
        <LockedIcon />
      </div>

      <div className="sc-eGCarw zAeKe" style={{marginTop: 10}}>
        <div className="sc-ctaXAZ hYulVh">
          <h2 className="text-black text-md font-semibold leading-heading">
          SMS sign-up
          </h2>
        </div>
        <p className="text-concrete text-md mt-2">
        Collect SMS subscribers with a sign-up field on your CelebriLinks.
        </p>
        <LockedIcon />
      </div>


      <div className="sc-eGCarw zAeKe" style={{marginTop: 10}}>
        <div className="sc-ctaXAZ hYulVh">
          <h2 className="text-black text-md font-semibold leading-heading">
          Twitch Extension (Beta)
          </h2>
        </div>
        <p className="text-concrete text-md mt-2">
        Enable your CelebriLinks for use with the CelebriLinks Twitch Extension.
        </p>
        <LockedIcon />
      </div>
    </div>
  );
};

const CommerceSection = () => {
return (
    <div className="sc-eGCarw zAeKe">
      <div className="sc-ctaXAZ hYulVh">
        <h2 className="text-black text-md font-semibold leading-heading">
        Connect a provider
        </h2>
      </div>
      <p className="text-concrete text-md mt-2">
      Enable or sign up to a supported provider. Start collecting tips and payments, or sell products, services and more.
      </p>
      <div className="sc-dFJsGO kUMKOy">
        <div>
          <div className="w-full">
            <button
              style={{ width: 160, height: 40, borderRadius: "9999px", background: 'transparent', border: '1px solid rgba(0,0,0,0.2)', color: '#000' }}
              className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-primary text-white sm:!w-auto hover:bg-primary-alt active:bg-primary-alt"
              type="button"
            >
              <span className="flex items-center justify-center">
                <span className="block font-semibold text-md">Add new integration</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};