import React from "react";
import { useNavigate } from "react-router-dom";
import useResponsive from "../Hooks/responsive";
import { Logo } from "../svgs";


export default function Navbar() {
const navigate = useNavigate()
  const isMobile = useResponsive()
  return (
    <div className="nav-box-wrap">
      <div class="nav-box" style={{ zIndex: 2 }}>
        <div className="list-left">
          <Logo />
          {!isMobile && <>
          <div>Templates</div>
          <div>Marketplace</div>
          <div>Discover</div>
          <div>Marketplace</div>
          <div>Learn</div>
          <div onClick={() => navigate('/blogs')}>Blogs</div>
          </>}
        </div>
        <div className="list-right">
          <LoginButton />
          <SignupButton/>
          {isMobile &&<div style={{width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 30px' }}><div ><svg title="hamburger menu" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5H16" stroke="#000000"></path><path d="M0 13.5H16" stroke="#000000"></path><path d="M0 8H16" stroke="#000000"></path></svg></div></div>}
        </div>
      </div>
    </div>
  );
}

const LoginButton = () => {
  return (
    <div className="login-btn">
      <span className="login-text">Log in</span>
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
