import React, { useEffect, useState } from "react";
import AdminHeader from "../components/Admin/Header";
import { PlusIcon, TryFreeIcon } from "../svgs";
import ReactDevicePreview from "react-device-preview";
import useResponsive from "../Hooks/responsive";
import axios from "axios";
import { baseUrl } from "../constants";
import jwtDecode from "jwt-decode";
import toast, { LoaderIcon, Toaster } from "react-hot-toast";

export default function Appearance() {
  const isMobile = useResponsive();
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
              flexBasis: isMobile ? "100%" : "60%",
              padding: "0 0.5%",
              borderRight: "1px solid rgba(0,0,0,0.1)",
              paddingTop: isMobile ? 0 : 70,
            }}
          >
            <div style={{ width: isMobile ? "92%" : "80%", margin: "auto" }}>
              <h3 className="section__title" style={textStyleh3}>
                Profile
              </h3>
              <AddLinkPanel />
              <Banner />

              <h3 className="section__title" style={textStyleh3}>
                Themes
              </h3>
              <ThemePanel />
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

const AddLinkPanel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const token = localStorage.getItem('token')
  const userData = jwtDecode(token)
  const [url, setUrl] = useState(null);
  const [givenName, setGivenName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  const isMobile = useResponsive();

  useEffect(() => {
   fetchUser()
  }, [])
  
  const fetchUser = async () => {
    try {
      const userId = userData._id;
      const response = await axios.get(`${baseUrl}/users/${userId}`);

      // Set the user data in the state
      const user = response.data.user
      setGivenName(user.givenName)
      setBio(user.bio)
      if(user.profilePic){
      setUrl(`${baseUrl}/uploads/${user.profilePic}`)
      setSelectedImage('temp')
      }
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
    }
  };

  const handleEditProfile = async () => {
    setLoading(true)
    try {
      // Create a FormData object to send the data and file
      const formData = new FormData();
      formData.append('givenName', givenName);
      formData.append('userId', userData._id)
      formData.append('bio', bio);
    // Check if selectedImage is a valid File object
    if (selectedImage instanceof File) {
      formData.append('profilePicture', selectedImage);
    }


      // Make a POST request to the edit profile API
      const response = await axios.post(`${baseUrl}/users/editprofile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Handle the response as needed
      toast.success('Profile updated !')
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
      // Handle errors appropriately
    }
  };

  return (
    <div style={boxWrap}>
      <div style={{ position: "relative", minHeight: "48px" }}>
        <div style={boxStyle}>
          <div style={profileWrap}>
            <div
              className="flex items-center mb-16"
              style={{ padding: "1.5rem" }}
            >
              {selectedImage && (
                <div>
                  <img
                    src={url}
                    alt="Selected Image"
                    style={{
                      fontWeight: "400",
                      fontSize: "32px",
                      backgroundColor: "rgb(0, 0, 0)",
                      height: isMobile ? 80 : 96,
                      width: 96,
                      marginRight: 43,
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                  />
                </div>
              )}
              {!selectedImage && (
                <div
                  className=" rounded-full flex items-center justify-center"
                  style={{
                    fontWeight: "400",
                    fontSize: "32px",
                    backgroundColor: "rgb(0, 0, 0)",
                    height: isMobile ? 80 : 96,
                    width: 116,
                    marginRight: 20,
                    borderRadius: "100%",
                  }}
                >
                  <span className="text-white">H</span>
                </div>
              )}

              <div className="space-y-2 w-full">
                <PickImageButton
                  setSelectedImage={setSelectedImage}
                  setUrl={setUrl}
                />
                <RemoveButton
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  setUrl={setUrl}
                />
              </div>
            </div>
            <TitleField givenName={givenName} setGivenName={setGivenName}/>
            <TextField setBio={setBio} bio={bio}/>
            <button
              style={{
                backgroundColor: "rgb(93 24 162 / 1)",
                width: '120px',
                color: "white",
                borderRadius: "9999px",
                marginLeft: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

              }}
              onClick={handleEditProfile}
              className="relative transition duration-75 ease-out w-full h-10 px-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased w-full hover:bg-primary-alt active:bg-primary-alt"
            >
              {loading? <LoaderIcon/> : 'Update'}
            </button>

            <hr
              style={{ height: 10, marginTop: 26,  }}
              classname="my-7 bg-sand w-full"
            />

            <span
              className="flex items-center justify-center"
              style={{
                fontSize: 16,
                lineHeight: "1.5",
                letterSpacing: "-.32",
                color: "rgb(129 41 217 / 1)",
                display: "flex",
                justifyContent: "start",
                width: "90%",
                margin: "auto",
                marginTop: 10,
              }}
            >
              <PlusIcon />
              <span
                className="block font-semibold text-md"
                style={{ paddingLeft: "0.5rem" }}
              >
                Add social icons
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PickImageButton = ({ setSelectedImage, setUrl }) => {
  const [inputKey, setInputKey] = useState(Date.now());

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);

      // Display the selected image as a preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setInputKey(Date.now());
        setUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full" style={{ position: "relative" }}>
      <input
        type="file"
        key={inputKey}
        accept="image/*"
        id="imageInput"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999,
          opacity: 0,
          cursor: "pointer",
        }}
        onChange={handleImageChange}
      />
      <button
        style={{
          backgroundColor: "rgb(93 24 162 / 1)",
          color: "white",
          borderRadius: "9999px",
        }}
        className="relative transition duration-75 ease-out w-full h-12 px-4 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased w-full hover:bg-primary-alt active:bg-primary-alt"
      >
        <span className="flex items-center justify-center">
          <span className="block font-semibold text-md">Pick an image</span>
        </span>
      </button>
    </div>
  );
};

const RemoveButton = ({ selectedImage, setSelectedImage, setUrl }) => {
  return (
    <button
      style={{
        backgroundColor: "white",
        borderColor: "#D97706",
        color: "rgba(0,0,0,0.7)",
        border: "1px solid rgba(0,0,0,0.7)",
        borderRadius: "9999px",
      }}
      className="relative transition duration-75 ease-out w-full h-12 px-4 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased w-full hover:bg-primary-alt active:bg-primary-alt"
      disabled={selectedImage ? false : true}
      onClick={() => {
        setSelectedImage(null);
        setUrl(null);
      }}
    >
      <span className="flex items-center justify-center">
        <span className="block font-semibold text-md">Remove</span>
      </span>
    </button>
  );
};

const TitleField = ({givenName, setGivenName}) => {
  return (
    <div
      className="flex rounded-[10px] leading-none border-solid border-2 overflow-hidden w-full border-transparent"
      style={{ width: "90%", margin: "auto", marginTop: 30 }}
    >
      <div className="relative flex-grow">
        <input
          id="setting-page-title"
          data-testid="ProfileTitleInput"
          type="text"
          placeholder="Your Name"
          aria-invalid="false"
          aria-labelledby="label-ltclid74"
          style={{
            fontFamily: "Inter",
            borderRadius: "0.6rem",
            width: "100%",
            color: "black",
            lineHeight: "48px",
            placeholder: "48px",
            paddingTop: "20px",
            background: "rgb(246 247 245 / 1)",
            fontSize: "16px",
            height: "3.4rem",
            outline: "none",
            border: "2px solid transparent",
            paddingLeft: 10,
            transition: "all 0.3s ease-out",
          }}
          value={givenName}
          onChange={(e) => setGivenName(e.target.value)}
        />
        <label
          id="label-ltclid74"
          style={{
            position: "absolute",
            pointerEvents: "none",
            left: "16px",
            color: "#A1A1AA",
            fontSize: "14px",
            transition: "all 0.3s ease-out",
            transform: "translate(-4px,4px) scale(0.85)",
            transformOrigin: "0",
          }}
          htmlFor="setting-page-title"
        >
          Enter your Name
        </label>
      </div>
    </div>
  );
};

const TextField = ({bio, setBio}) => {
  return (
    <div style={{ width: "90%", margin: "auto", marginTop: 10 }}>
      <div className="flex rounded-[10px] leading-none border-solid border-2 overflow-hidden w-full border-transparent">
        <div className="relative flex-grow">
          <textarea
            id="setting-page-title"
            data-testid="ProfileTitleInput"
            type="text"
            placeholder="Bio"
            aria-invalid="false"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            aria-labelledby="label-ltclid74"
            style={{
              fontFamily: "Inter",
              borderRadius: "0.6rem",
              width: "100%",
              color: "black",
              lineHeight: "48px",
              placeholder: "48px",
              background: "rgb(246 247 245 / 1)",
              fontSize: "16px",
              height: "6.7rem",
              outline: "none",
              border: "2px solid transparent",
              paddingLeft: 10,
              transition: "all 0.3s ease-out",
            }}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-concrete text-xs ">0 / 80</p>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="section content-panel">
      <div
        className="relative flex max-w-[640px] rounded-lg bg-chartreuse px-8 pt-8"
        style={{
          backgroundColor: "rgb(210 232 35)",
          borderRadius: "22px",
          marginTop: 49,
        }}
      >
        <div>
          <h2
            className="text-black text-md font-semibold leading-heading mb-2.5 !text-[24px] font-extrabold !text-forest"
            style={{
              color: "rgb(37 79 26 / 1)",
              fontSize: "24px",
              fontWeight: "800",
            }}
          >
            Get unlimited customization
          </h2>
          <div className="flex-1" style={{ maxWidth: 279 }}>
            <p
              className="text-black text-md leading-5 mb-6 !text-[14px] !text-forest"
              style={{
                color: "rgb(37 79 26 / 1)",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              Transform your Linktree with a Pro 7-day free trial. Cancel
              anytime.
            </p>
            <ul className="leading-5 mb-6 space-y-2">
              <li
                className="flex items-start !text-forest"
                data-testid="ListItem"
                style={{ color: "rgb(37 79 26 / 1)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2.5 mt-1 min-w-[12px] flex-shrink-0 "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid33_title "
                >
                  <title id="ltclid33_title">Check</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7016 2.5097L14.3893 2.90014L6.38929 12.9001L5.62515 12.92L1.62515 8.41997L1.29297 8.04627L2.04038 7.38191L2.37256 7.75561L5.97873 11.8126L13.6084 2.27544L13.9208 1.88501L14.7016 2.5097Z"
                    fill="currentColor"
                  />
                </svg>
                <p
                  className="text-black text-md !text-[14px] !text-forest"
                  style={{ fontSize: "14px" }}
                >
                  Showcase your brand with custom background images and videos
                </p>
              </li>
              <li
                className="flex items-start !text-forest"
                data-testid="ListItem"
                style={{ color: "rgb(37 79 26 / 1)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2.5 mt-1 min-w-[12px] flex-shrink-0 "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid34_title "
                >
                  <title id="ltclid34_title">Check</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7016 2.5097L14.3893 2.90014L6.38929 12.9001L5.62515 12.92L1.62515 8.41997L1.29297 8.04627L2.04038 7.38191L2.37256 7.75561L5.97873 11.8126L13.6084 2.27544L13.9208 1.88501L14.7016 2.5097Z"
                    fill="currentColor"
                  />
                </svg>
                <p
                  className="text-black text-md !text-[14px] !text-forest"
                  style={{ fontSize: "14px" }}
                >
                  Pick your perfect font, theme and buttons
                </p>
              </li>
              <li
                className="flex items-start !text-forest"
                data-testid="ListItem"
                style={{ color: "rgb(37 79 26 / 1)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2.5 mt-1 min-w-[12px] flex-shrink-0 "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid35_title "
                >
                  <title id="ltclid35_title">Check</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7016 2.5097L14.3893 2.90014L6.38929 12.9001L5.62515 12.92L1.62515 8.41997L1.29297 8.04627L2.04038 7.38191L2.37256 7.75561L5.97873 11.8126L13.6084 2.27544L13.9208 1.88501L14.7016 2.5097Z"
                    fill="currentColor"
                  />
                </svg>
                <p
                  className="text-black text-md !text-[14px] !text-forest"
                  style={{ fontSize: "14px" }}
                >
                  Remove the Linktree logo
                </p>
              </li>
            </ul>
            <span
              className="rounded-xl bg-black flex"
              style={{ borderRadius: "9999px", overflow: "hidden" }}
            >
              <div className="w-full">
                <button
                  className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-primary text-white !bg-forest font-semibold !text-chartreuse hover:!bg-forest/80 hover:bg-primary-alt active:bg-primary-alt"
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "9999px",
                    outline: "none",
                    transition: "all 0.3s ease-out",
                    cursor: "pointer",
                  }}
                >
                  <span className="flex items-center justify-center">
                    <span className="block pr-xs">
                      <TryFreeIcon />
                    </span>
                    <span
                      className="block font-semibold text-md"
                      style={{ marginLeft: 10 }}
                    >
                      Try Pro for free
                    </span>
                  </span>
                </button>
              </div>
            </span>
            <p
              className="text-black text-xs mt-2 pb-6 text-center !text-[10px] !text-forest"
              style={{ fontSize: "10px" }}
            >
              $9 /month after
            </p>
          </div>
        </div>
        <div className="-ml-6 -mr-4 pb-4 hidden flex-1 items-center sm:flex">
          <img
            src="https://assets.production.linktr.ee/d23f6e60279a541dbb1703853abef6a652baffff/images/appearance-upgrade-banner.png"
            alt="Upgrade Banner"
          />
        </div>
      </div>
    </div>
  );
};

const ThemePanel = () => {
  const themes = [
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png",
      text: "Pebble Blue",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png",
      text: "Pebble Yellow",
    },
    {
      bgImage:
        "https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png",
      text: "Pebble Pink",
    },
    // ... add more themes
  ];

  return (
    <div style={boxWrap}>
      <div style={{ position: "relative", minHeight: "48px" }}>
        <div style={{ ...boxStyle2, padding: "1.5rem" }}>
          <div
            style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "4px",
            }}
          >
            <CustomThemeButton createOwn text={"custom"} />
            {themes.map((theme, index) => (
              <CustomThemeButton
                key={index}
                bgImage={theme.bgImage}
                text={theme.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomThemeButton = ({ bgImage, createOwn, text }) => {
  return (
    <button
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        outline: "none",
        flexDirection: "column",
      }}
      aria-label="Custom"
      type="button"
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          flexShrink: 0,
          borderRadius: "0.25rem",
          border: "2px solid transparent",
          paddingTop: "150%",
          transition: "all 0.3s ease-out",
          borderColor: "transparent",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            background: bgImage ? `url(${bgImage})` : "transparent",
            justifyContent: "center",
            borderRadius: "0.25rem",
            border: "1px dashed #D2D6DC",
            borderColor: "sand",
            backgroundSize: "100% 100%",
          }}
        >
          {createOwn && (
            <h4 style={{ fontSize: "1.125rem", color: "black" }}>
              CREATE <br /> YOUR <br /> OWN
            </h4>
          )}
        </div>
      </div>
      <p
        style={{
          fontSize: "0.875rem",
          color: "black",
          marginTop: "0.125rem",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </button>
  );
};

const boxStyle = {
  height: "534px",
  backgroundColor: "white",
  borderRadius: "22px",
  overflow: "hidden",
};

const boxStyle2 = {
  minHeight: "504px",
  backgroundColor: "white",
  borderRadius: "22px",
  overflow: "hidden",
};

const boxWrap = {
  marginBottom: "8px",
  width: "100%",
  margin: "auto",
  marginTop: 50,
};

const profileWrap = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "12px",
  height: "100%",
  transition: "all 0.3s ease-in-out",
};

const textStyleh3 = {
  color: "black",
  marginTop: 48,
  fontSize: 20, // This corresponds to text-sm
  lineHeight: "1.5", // This corresponds to leading-heading
  marginBottom: "1rem", // This corresponds to mb-md
  fontWeight: "600", // This corresponds to font-semibold
};
