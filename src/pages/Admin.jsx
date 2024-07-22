import React, { useState } from "react";
import AdminHeader from "../components/Admin/Header";
import ReactDevicePreview from "react-device-preview";
import useResponsive from "../Hooks/responsive";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../constants";
import jwtDecode from "jwt-decode";
import toast, { LoaderIcon } from "react-hot-toast";
import LinkEditor from "../components/LinkEditor";
import { copyToClipboard } from "../utils";
import { useNavigate } from "react-router-dom";
import { MdOndemandVideo } from "react-icons/md";
import VideoModal from "./videoModal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const imageBox = {
  height: "22%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
};

const imageWrap = {
  height: 110,
  width: 110,
  borderRadius: "50%",
  overflow: "hidden",
};

const titleWrap = {
  height: 110,
  width: 110,
  borderRadius: "50%",
  overflow: "hidden",
  background: "gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const linksContainer = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 30,
};

const { ...linkButton } = {
  width: "80%",
  height: 60,
  boxShadow: "rgba(10, 11, 13, 0.2) 0px 2px 4px 0px",
  borderRadius: 4,
  marginBottom: 12,
  transition: "transform 0.15s cubic-bezier(0, 0.2, 0.5, 3) 0s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 7,
};

let UserPlan;
let UserLink;

export default function Admin() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const isMobile = useResponsive();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
  }

  const userData = token ? jwtDecode(token) : {};
  const [url, setUrl] = useState(null);
  const [theme, setTheme] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLinks, setUserLinks] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [seletedideo, setSeletedideo] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const userId = userData._id;
      const response = await axios.get(`${baseUrl}/users/${userId}`);

      // Set the user data in the state
      const user = response.data.user;
      console.log("user", user)
      // if (user?.isInFreeTrial && user?.isInFreeTrial?.freeTrial) {
      // } else if (!user.hasPaid) {
      //   toast.error("User has not paid.");
      //   navigate("/signup", {
      //     state: {
      //       step: 4,
      //       userDetails: user,
      //     },
      //   });
      // } else {
      // }
      setTheme(user.theme);
      UserPlan = user.plan;
      setUserName(user.userName);
      UserLink = user.links;
      setUserLinks(user.links);

      if (user.profilePic) {
        setUrl(`${user?.profilePic}`);
      }
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
    }
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-panel">
      <AdminHeader />
      <main>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            paddingTop: 10,
            flexDirection: isMobile ? "column-reverse" : "row",
          }}
        >
          <div
            style={{
              flexBasis: isMobile ? "100%" : "40%",
              display: "flex",
              justifyContent: "center",
              paddingTop: isMobile ? 70 : 170,
              paddingLeft: isMobile ? 0 : 180,
            }}
          >
            <div style={{ width: "100%", paddingLeft: 70 }}>
              <ReactDevicePreview device="galaxynote8" scale="0.6">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: `${`${theme ? theme : "#C2C2C2"}`}`,
                    paddingTop: 50,
                    maxHeight: "100%", // or a specific pixel value like '500px'
                    overflowY: "scroll",
                  }}
                >
                  <div style={imageBox}>
                    {url ? (
                      // <div style={imageWrap}>
                      <img
                        src={url}
                        style={{
                          height: "100px",
                          width: "120px",
                          borderRadius: "100%",
                        }}
                        alt=""
                      />
                    ) : (
                      // </div>
                      <div style={titleWrap}>
                        <p style={{ color: "#fff", fontSize: 40 }}>{userData?.userData?.givenName.charAt(0).toUpperCase()}</p>
                      </div>
                    )}
                    <h5
                      style={{ fontSize: 24, fontWeight: 500, marginTop: 20 }}
                    >
                      {userName ? `@${userName}` : `User`}
                    </h5>
                  </div>
                  <div style={linksContainer}>
                    {userLinks.map((link) => (
                      <>
                        <button
                          key={link._id}
                          style={{ ...linkButton, background: link.background }}
                          className="link-bt"
                          onClick={() => window.open(link.href)}
                        >
                          {link.icon && (
                            <div
                              style={{
                                width: 50,
                                overflow: "hidden",
                              }}
                            >
                              <img
                                className="button-image"
                                src={`${link.icon}`}
                                alt={link.title}
                              />
                            </div>
                          )}
                          {link.video && (
                            <>
                              <div
                                style={{
                                  width: 28,
                                  height: 28,
                                  overflow: "hidden",
                                }}
                              >
                                <MdOndemandVideo
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSeletedideo(link.video);
                                    openModal(e);
                                  }}
                                  // onMouseEnter={() => setShowVideo(true)}
                                  // onMouseLeave={() => setShowVideo(false)}
                                  style={{
                                    cursor: "pointer",
                                    width: "30px",
                                    height: "30px",
                                  }}
                                />
                                <div></div>
                              </div>
                            </>
                          )}
                          {link.title || "No Title added"}
                        </button>
                        {showVideo ? (
                          <iframe
                            width="560"
                            height="315"
                            src={link.video}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          ></iframe>
                        ) : null}
                      </>
                    ))}
                  </div>
                </div>
              </ReactDevicePreview>
            </div>
            <div></div>
          </div>
          <div
            style={{
              flexBasis: isMobile ? "100%" : "60%",
              padding: "0 0.5%",
              borderLeft: "1px solid rgba(0,0,0,0.1)",
              paddingTop: isMobile ? 170 : 70,
            }}
          >
            <LiveUrl />
            {!buttonPressed ? (
              <AddLinkButton setButtonPressed={setButtonPressed} />
            ) : (
              <AddLinkPanel
                setButtonPressed={setButtonPressed}
                fetchUser={fetchUser}
              />
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                marginTop: 20,
              }}
            >
              {userLinks.map((link) => (
                <LinkEditor
                  link={link}
                  key={link._id}
                  titleProp={link.title}
                  urlProp={link.href}
                  iconProp={link.icon}
                  idProp={link._id}
                  backgroundProp={link.background}
                  fetchData={fetchUser}
                  UserPlan={UserPlan}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <VideoModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        VideoLink={seletedideo}
      />
    </div>
  );
}

const LiveUrl = () => {
  const isMobile = useResponsive();

  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Session is Expired !");

    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  }
  const { userData } = token ? jwtDecode(token) : {};

  const profilePath = `${window.location.origin}/user/${userData._id}`;

  return (
    <div
      className="md:mx-4 md:mt-2 flex flex-col xl:flex-row md:rounded-lg py-3 px-4 justify-between items-start xl:items-center text-sm bg-white shadow-inner-bottom-light"
      style={
        isMobile
          ? { width: 360, height: 70, margin: "auto", borderRadius: 8 }
          : { height: 70 }
      }
    >
      <div className="flex flex-row max-h-min w-full">
        <div className="leading-[2] md:flex md:flex-col lg:flex-row md:justify-between md:flex-grow w-full">
          <div className="xl:h-full flex flex-row justify-between w-full">
            <p className="min-w-0 self-center md:inline font-semibold">
              Your CelebriLinks is live:{" "}
              <span
                className="underline max-w-[200px] truncate inline-block align-bottom"
                style={{ fontWeight: 300, cursor: "pointer" }}
                onClick={() => window.open(profilePath)}
              >
                {profilePath}
              </span>
            </p>
          </div>
          <button
            className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-black hidden md:block max-w-min whitespace-nowrap mt-2 md:mt-0 bg-white border border-sand hover:bg-chalk hover:border-chalk active:bg-chalk active:border-chalk"
            type="button"
            style={{ padding: 8, borderRadius: 9999 }}
          >
            <span
              className="flex items-center justify-center block font-semibold text-md"
              onClick={() => copyToClipboard(profilePath)}
            >
              Copy URL
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const AddLinkButton = ({ setButtonPressed }) => {
  return (
    <div
      style={{ width: "80%", margin: "auto", marginTop: 50 }}
      onClick={() => setButtonPressed((x) => !x)}
    >
      <button
        disabled={
          (UserPlan === "user" && UserLink.length === 5) ||
          (UserPlan === "vip" && UserLink.length === 50)
        }
        style={{
          position: "relative",
          transition: "all 0.75s ease-out",
          width: "100%",
          height: "3rem",
          padding: "0.5rem 1rem",
          borderRadius: "9999px",
          outline: "none",
          backgroundColor: "rgb(129 41 217 / 1)",
          color: "white",
          cursor: "pointer",
        }}
        type="button"
        data-heapid="SingleAddLinkCTA"
        data-testid="LinkEditor_Single_Add_Link_Button"
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ display: "block", paddingRight: "0.25rem" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              aria-labelledby=" "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 8.5V16H8.5V8.5H16V7.5H8.5V0H7.5V7.5H0V8.5H7.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span
            style={{ display: "block", fontSize: "1rem", fontWeight: "bold" }}
          >
            Add link
          </span>
        </span>
      </button>
    </div>
  );
};

const AddLinkPanel = ({ setButtonPressed, fetchUser }) => {
  const isMobile = useResponsive();

  return (
    <div
      style={{
        marginBottom: "8px",
        width: isMobile ? "95%" : "90%",
        margin: "auto",
        marginTop: 50,
      }}
    >
      <div style={{ position: "relative", minHeight: "48px" }}>
        <div
          style={{
            height: "594px",
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div style={{ opacity: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                height: "100%",
                paddingTop: "1.5rem",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: 0,
                  paddingRight: "1.5rem",
                  paddingLeft: "1rem",
                }}
              >
                <button
                  style={{
                    padding: "0.5rem",
                    borderRadius: "12px",
                    outline: "none",
                  }}
                  className="hover:bg-chalk hover:border-chalk active:bg-chalk border border-none"
                  aria-label="Close Add Link Panel"
                  data-heapid="SingleAddLinkClose"
                  onClick={() => setButtonPressed((x) => !x)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black "
                    role="img"
                    aria-hidden="false"
                    aria-labelledby="ltclid77_title"
                  >
                    <title id="ltclid77_title">Close</title>
                    <path
                      d="M13.6283 3.1151L14 2.74339L13.2566 2L12.8849 2.3717L13.6283 3.1151ZM2.3717 12.885L2 13.2566L2.7434 14L3.11509 13.6284L2.3717 12.885ZM3.11509 2.3717L2.7434 2L2 2.74339L2.3717 3.1151L3.11509 2.3717ZM12.8849 13.6284L13.2566 14L14 13.2566L13.6283 12.885L12.8849 13.6284ZM12.8849 2.3717L2.3717 12.885L3.11509 13.6284L13.6283 3.1151L12.8849 2.3717ZM2.3717 3.1151L12.8849 13.6284L13.6283 12.885L3.11509 2.3717L2.3717 3.1151Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="md:px-6 px-4">
                <h2 className="text-black text-md font-semibold leading-heading mb-5">
                  Enter URL
                </h2>
                <div className="flex gap-4 items-center">
                  <div className="grow">{/* ... */}</div>
                  <div className="basis-20">{/* ... */}</div>
                </div>
              </div>
            </div>
            <LinkInput fetchUser={fetchUser} />
            <hr
              style={{ height: 10, marginTop: 40 }}
              classname="my-7 bg-sand w-full"
            />
            <InterestSection title={"Inspired by your interests"} />
            <div
              style={{
                display: "flex",
                gap: "2px",
                paddingLeft: "10px",
                marginBottom: 40,
                overflow: isMobile ? "scroll" : "auto",
              }}
            >
              <SocialCard
                imageSrc={
                  "https://link-types-assets.production.linktr.ee/audiomack/icon.svg"
                }
                title={"Audiomack"}
              />
              <SocialCard
                imageSrc={
                  "https://link-types-assets.production.linktr.ee/bands-in-town/icon.svg"
                }
                title={"Bandsintown"}
              />
              <SocialCard
                imageSrc={
                  "https://link-types-assets.production.linktr.ee/music/icon.svg"
                }
                title={"Music"}
              />
              <SocialCard
                imageSrc={
                  "https://link-types-assets.production.linktr.ee/video/icon.svg"
                }
                title={"Video"}
              />
              <SocialCard
                imageSrc={
                  "https://link-types-assets.production.linktr.ee/soundcloud/icon.svg"
                }
                title={"SoundCloud"}
              />
              <SocialCard
                imageSrc={
                  "https://link-types-assets.production.linktr.ee/bands-in-town/icon.svg"
                }
                title={"Bandsintown"}
              />
            </div>
            <InterestSection title={"New to try"} />

            <div
              style={{
                display: "flex",
                gap: "10px",
                paddingLeft: "10px",
                marginBottom: 60,
                overflow: isMobile ? "scroll" : "auto",
              }}
            >
              <SocialButton
                label="Snapchat"
                imageSrc="https://link-types-assets.production.linktr.ee/snapchat/icon.svg"
                backgroundImage="https://assets.production.linktr.ee/ui-link-editor/latest/images/snapchat-banner.png"
              />
              <SocialButton
                label="Threads"
                imageSrc="https://link-types-assets.production.linktr.ee/threads/icon.svg"
                backgroundImage="https://assets.production.linktr.ee/ui-link-editor/latest/images/snapchat-banner.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkInput = ({ fetchUser }) => {
  const [url, setUrl] = useState("");
  const [Loading, setLoading] = useState(false);

  const containerStyle = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    padding: "0 3%",
  };

  const inputContainerStyle = {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "all 0.75s ease-out",
    width: "100%",
  };

  const inputStyle = {
    position: "relative",
    borderColor: "transparent",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "10px",
    transition: "all 0.75s ease-out",
    backgroundColor: "rgb(246 247 245 / 1)",
  };

  const addButtonStyle = {
    position: "relative",
    transition: "all 0.75s ease-out",
    width: "100%",
    color: "rgb(255 255 255 / 1)",
    backgroundColor: "rgb(129 41 217 / 1)",
    height: "3rem",
    padding: "0 1rem",
    borderRadius: "9999px",
    outline: "none",
  };

  const handleAddLink = async () => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      toast.error(
        'Please add "http://" or "https://" at the beginning of the URL.'
      );
    } else if (!url.includes(".com")) {
      toast.error('The URL must contain ".com".');
    } else {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        toast.error("Session is Expired !");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
      const userData = token ? jwtDecode(token) : {};

      try {
        // Send a POST request to your add API
        const userId = userData._id;
        await axios.post(`${baseUrl}/users/${userId}/link/add`, {
          icon: "",
          title: "",
          href: url,
        });
        fetchUser();
        toast.success("Link added successfully");
        setLoading(false);
        setUrl(""); // Clear the input field
      } catch (error) {
        setLoading(false);
        toast.error("Error adding the link");
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={inputContainerStyle}>
        <div style={inputContainerStyle}>
          <input
            data-testid="LinkEditor_Url_Input_Field"
            required
            aria-label="URL"
            type="url"
            placeholder="URL"
            aria-invalid="false"
            aria-labelledby="label-ltclid87"
            id="input-ltclid87"
            style={inputStyle}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>
      <div style={{ flexBasis: "20%" }}>
        <button
          style={addButtonStyle}
          type="button"
          disabled={!url}
          onClick={handleAddLink}
          data-testid="LinkEditor_Single_Add_Link_Add"
          data-heapid="SingleAddLinkAdd"
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{ display: "block", fontSize: "1rem", fontWeight: "bold" }}
            >
              {Loading ? <LoaderIcon /> : `Add`}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

const InterestSection = ({ title }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 1rem",
    marginBottom: "1rem",
    marginTop: "1rem",
  };

  const headingStyle = {
    color: "#5a5c54",
    fontSize: "0.85rem",
    fontWeight: "bold",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    color: "#0f62fe",
    fontSize: "0.85rem",
    fontWeight: "bold",
    transition: "all 0.3s ease-out",
  };

  const iconStyle = {
    width: "16px",
    height: "16px",
    fill: "currentColor",
    transform: "rotate(-90deg)",
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>{title}</h3>
      <button style={buttonStyle} data-heapid="SingleAddLinkViewAll">
        <span
          style={{
            marginRight: "0.5rem",
            borderBottom: "1px solid transparent",
            transition: "all 0.3s ease-out",
            color: "rgb(129 41 217 / 1)",
          }}
          className="group-hover:border-primary group-focus-visible:border-primary transition-all ease-out"
        >
          View all
        </span>
        <svg
          style={iconStyle}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.70711 4L2.06066 4.35355L7.70711 10L13.3536 4.35355L13.7071 4L14.4142 4.70711L14.0607 5.06066L8.06066 11.0607H7.35355L1.35355 5.06066L1 4.70711L1.70711 4Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

const SocialCard = ({ title, imageSrc }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "all 0.75s ease-out",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfbf8",
    border: "2px solid #fbfbf8",
    borderRadius: "1.5rem",
    width: "88px",
    height: "88px",
    outline: "none",
    boxShadow: "0 0 2px 0 rgba(0,0,0,0.2)",
    outlineOffset: "-2px",
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

  const imageStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  };

  const textStyle = {
    color: "#000",
    fontSize: "0.75rem",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: 8,
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} aria-label={title}>
        <div style={imageStyle}>
          <img src={imageSrc} alt="" className="w-10 h-10 object-contain" />
        </div>
      </button>
      <p style={textStyle}>{title}</p>
    </div>
  );
};

const SocialButton = ({ label, imageSrc, backgroundImage }) => {
  const buttonStyle = {
    position: "relative",
    width: "318px",
    overflow: "hidden",
    height: "148px",
    outline: "none",
    outlineOffset: "-2px",
    backgroundColor: "#fbfbf8",
    borderRadius: "1.5rem",
    border: "2px solid #fbfbf8",
    boxShadow: "0 0 2px 0 rgba(0,0,0,0.2)",
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

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "50%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  const contentContainerStyle = {
    position: "absolute",
    textAlign: "left",
    bottom: "-70%",
    left: "22%",
    width: "100%",
    padding: "0.5rem",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    borderRadius: "50%",
    backgroundColor: "#2d3c55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginRight: "0.75rem",
    marginTop: 30,
    marginLeft: 15,
  };

  const labelStyle = {
    fontSize: "0.875rem",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginBottom: "0.25rem",
    color: "#000",
  };

  const descriptionStyle = {
    fontSize: "0.75rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#000",
  };

  return (
    <button style={buttonStyle} aria-label={label}>
      <div style={imageContainerStyle}></div>
      <div className="h-1/2">
        <div className="flex items-center justify-start relative h-1/2">
          <div style={imageStyle}>
            <img src={imageSrc} alt="" className="w-10 h-10 object-contain" />
          </div>
          <div style={contentContainerStyle}>
            <p style={labelStyle}>{label}</p>
            <p style={descriptionStyle}>Promote your public profile</p>
          </div>
        </div>
      </div>
    </button>
  );
};
