import React from "react";
import Field from "../components/Common/Field";
import useResponsive from "../Hooks/responsive";
import { LogoFullIcon } from "../svgs";

const Login = () => {
  const isMobile = useResponsive()
  return (
    <div className="login-wrap">
      <div className="logo-wrap">
        <a>
          <LogoFullIcon />
        </a>
      </div>
      <main className="login-main">
        <div className="login-form-wrap">
          <h1 className="login-heading">Log in to your CelebriLinks</h1>
          <Field type="text" placeholder="Username" stickyLabel />
          <Field type="password" placeholder="password" />
          <button className="login-page-btn">Log in</button>
          <div className="forgot">
            <p>
              <a>Forgot password?</a>
            </p>
            &nbsp; • &nbsp;<a>Forgot username?</a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <p className="dd">
              Don't have an account? <a className="under">Sign up</a>
            </p>
          </div>

    
           {!isMobile &&  <p className="recap">
              This site is protected by reCAPTCHA and the{" "}
              <a>Google Privacy Policy</a> and <a>Terms of Service</a> apply.
            </p>}


            {isMobile && <> <p className="recap">
              This site is protected by reCAPTCHA and the </p>{" "}
              <p className="recap ss"> <a>Google Privacy Policy</a> and <a>Terms of Service</a> apply.
            </p> </>}
       
       
        </div>
      </main>
      {!isMobile &&<div className="bg-chalk"></div>}
    </div>
  );
};

export default Login;
