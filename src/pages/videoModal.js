import React, { useEffect, useState } from "react";
import useResponsive from "../Hooks/responsive";

const VideoModal = ({ isModalOpen, VideoLink, onClose }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = useState("");
  const [period, setPeriod] = useState("");
  const [status, setStatus] = useState("");
  const isMobile = useResponsive()

  useEffect(() => {}, []);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: isMobile ? "10px":"60px",
  };

  const inputContainerStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  };

  const inputStyle = {
    margin: "10px",
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };


  return (
    <div style={modalStyle}>
      <div
        style={{
          backgroundColor: "#fefefe",
          margin: "5% auto",
          padding: "20px",
          border: "1px solid #888",
          width: isMobile ? '100%' :"40%"
        }}
      >
        <span style={{ float: "right", cursor: "pointer" }} onClick={onClose}>
          &times;
        </span>
        <h2 className="text-3xl text-center font-semibold">Video</h2>
        <div className="flex justify-center mt-5 mb-4">
          <iframe
            width="560"
            height="315"
            src={VideoLink}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <button style={buttonStyle} onClick={()=>onClose()}>Ok</button>
      </div>
    </div>
  );
};

export default VideoModal;
