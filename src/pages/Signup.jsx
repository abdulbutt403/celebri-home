import React from "react";
import Field from "../components/Common/Field";
import useResponsive from "../Hooks/responsive";
import { LogoFullIcon } from "../svgs";

const Signup = () => {
  const isMobile = useResponsive()
  return (
    <div className="login-wrap" >
      <div className="logo-wrap">
        <a>
          <LogoFullIcon />
        </a>
      </div>
      <main className="login-main" style={{marginTop: 40}}>
        <div className="login-form-wrap">
          <h1 className="login-heading" style={{ letterSpacing: "-2.5px" }}>
            Create your account
          </h1>
          <p className="signup-tt">
            Choose your CelebriLinks username. You can always change it later.
          </p>
          <Field type="text" placeholder="Username" stickyLabel />
          <Field type="password" placeholder="password" />

          <p class="text-concrete text-sm" style={{paddingTop: '2rem'}}>
            By clicking <span class="font-semibold">Create account</span>, you
            agree to CelebriLinks's <a>Terms and Conditions</a> and confirm you have
            read our <a>Privacy Notice</a>. You may receive offers, news and
            updates from us.
          </p>


          <button className="login-page-btn">Create account</button>

   
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <p className="dd">
              Already have an account? <a className="under">Log in</a>
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
      <div className="bg-chalk-2"></div>
    </div>
  );
};

export default Signup;
