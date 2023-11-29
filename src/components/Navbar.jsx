import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useResponsive from "../Hooks/responsive";
import { Logo } from "../svgs";
import axios from "axios";
import { baseUrl } from "../constants";
import jwtDecode from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();
  const isMobile = useResponsive();

  const gotoLogin = () => navigate("/login");
  const gotoRegister = () => navigate("/signup");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-box-wrap" style={{ zIndex: 2 }}>
      <div className="nav-box">
        <div className="list-left">
          <Logo />
          {!isMobile && (
            <>
         
              <div onClick={() => navigate("/users")}>Discover</div>
              <div onClick={() => navigate("/pricing")}>Pricing</div>
              <div onClick={() => navigate("/blogs")}>Blogs</div>
              <div onClick={() => navigate("/contact")}>Contact</div>
            </>
          )}
        </div>
        <div className="list-right">
          <LoginButton go={gotoLogin} />
          <SignupButton go={gotoRegister} />
          {isMobile && (
            <div
              onClick={() => {
                setIsOpen((x) => !x);
              }}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 30px",
              }}
            >
              <div>
                <svg
                  title="hamburger menu"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5H16" stroke="#000000"></path>
                  <path d="M0 13.5H16" stroke="#000000"></path>
                  <path d="M0 8H16" stroke="#000000"></path>
                </svg>
              </div>
            </div>
          )}

          {isMobile && isOpen && (
            <div
              style={{
                background: "rgb(120, 0, 22)",
                position: "fixed",
                top: 0,
                bottom: 0,
                left: isOpen ? 0 : "100vw",
                right: 0,
                zIndex: -1,

              }}
            >
              <div style={{color: 'pink', paddingLeft: 20, paddingTop: 150, paddingRight: 30}} className="nav-limst">

              <div onClick={() => navigate("/users")}>Discover</div>
              <div onClick={() => navigate("/pricing")}>Pricing</div>
              <div onClick={() => navigate("/blogs")}>Blogs</div>
              <div onClick={() => navigate("/contact")}>Contact</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const LoginButton = ({ go }) => {
  return (
    <div className="login-btn" style={{ cursor: "pointer" }} onClick={go}>
      <span className="login-text">Log in</span>
    </div>
  );
};

const SignupButton = ({ go }) => {
  return (
    <div className="signup-btn" style={{ cursor: "pointer" }} onClick={go}>
      <span className="signup-text">Sign up free</span>
    </div>
  );
};
