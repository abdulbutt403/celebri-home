import React from "react";
import useResponsive from "../../Hooks/responsive";
import { Logo } from "../../svgs";

export default function Navbar({ browse }) {
  const isMobile = useResponsive();
  return (
    <div className="nav-box-wrap">
      <div class="nav-box" style={{ zIndex: 2 }}>
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
    <div class="signup-btn">
      <span class="signup-text">Sign up free</span>
    </div>
  );
};
