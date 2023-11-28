import React from "react";
import useResponsive from "../../Hooks/responsive";
import { Logo } from "../../svgs";
import { useNavigate } from "react-router-dom";

export default function Navbar({ browse }) {
  const isMobile = useResponsive();
  const navigate = useNavigate()
  return (
    <div className="nav-box-wrap">
      <div className="nav-box" style={{ zIndex: 2 }}>
        <div className="list-left">
          <Logo />

          <div
            style={{
              borderLeft: "1px solid black",
              borderRadius: 0,
              height: 30,
            }}
          ></div>

          <span
            style={{
              color: "rgb(30, 35, 48)",
              cursor: "inherit",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.65,
              whiteSpace: "nowrap",
              transform: "translateX(-20px)",
            }}
          >
            Marketplace
          </span>
          {!isMobile && (
            <>
              <div
    onClick={() => navigate('/browse')}
                style={
                  browse
                    ? {
                        color: "rgb(30, 35, 48)",
                        cursor: "inherit",
                        fontSize: "16px",
                        fontWeight: 800,
                        lineHeight: 1.65,
                        whiteSpace: "nowrap",
                      }
                    : {}
                }
              >
                Browse
              </div>
              <div
              onClick={() => navigate('/marketplace')}
                style={
                  !browse
                    ? {
                        color: "rgb(30, 35, 48)",
                        cursor: "inherit",
                        fontSize: "16px",
                        fontWeight: 800,
                        lineHeight: 1.65,
                        whiteSpace: "nowrap",
                      }
                    : {}
                }
              >
                Marketplace
              </div>
            </>
          )}
        </div>
        <div className="list-right">
          {!isMobile && <LoginButton />}
          <SignupButton />
        </div>
      </div>
    </div>
  );
}

const LoginButton = () => {
  return (
    <div className="login-btn">
      <span className="login-text">Admin</span>
    </div>
  );
};

const SignupButton = () => {
  return (
    <div className="signup-btn">
      <span className="signup-text">Sign up free</span>
    </div>
  );
};
