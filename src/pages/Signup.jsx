import React, { useState } from "react";
import Field from "../components/Common/Field";
import useResponsive from "../Hooks/responsive";
import { LogoFullIcon } from "../svgs";
import { isValidEmail } from "../utils";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../constants";
import { useNavigate } from "react-router-dom";
import Pricings from "../components/Pricings";
import SelectPlan from "../components/SelectPlan";

const Signup = () => {
  const isMobile = useResponsive();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const [selected, setSelected] = useState("business");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [givenName, setGivenName] = useState("");
  const [userName, setUserName] = useState("");
  const [plan, setPlan] = useState("user");

  const nextStep = () => setStep((x) => x + 1);
  const navigate = useNavigate();
  const register = () => {
    setLoading(true);
    const userData = {
      email,
      password,
      givenName,
      userName,
      profileCategory: selected,
      plan
    };

    // Make a POST request to your sign-up API
    axios
      .post(`${baseUrl}/users/signup`, userData)
      .then((response) => {
        toast.success("Registration successful");

        setTimeout(() => navigate("/login"), 1000); // You can replace this with a redirect or other logic
      })
      .catch((error) => {
        alert("Registration failed"); // Handle the error appropriately
        toast.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="login-wrap">
      <div className="logo-wrap">
        <a>
          <LogoFullIcon />
        </a>
      </div>
      <main className="login-main" style={{ marginTop: 40 }}>
        <div className="login-form-wrap">
          <h1 className="login-heading" style={{ letterSpacing: "-2.5px" }}>
            {step === 1
              ? "Create your account"
              : step === 2
              ? "Enter Your Password"
              : step === 3
              ? "Pick  a Plan" : "Tell us About Yourself"}
          </h1>
          <p className="signup-tt">
            {step === 1 &&
              "Choose your CelebriLinks username. You can always change it later."}
            {step === 2 &&
              "Choose a strong password with at least 8 characters."}
            {step === 4 && "For a personalized Celebrilinks experience"}
          </p>
          {step === 1 && (
            <Field
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {step === 1 && (
            <Field
              type="text"
              placeholder="Username"
              stickyLabel
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}
          {step === 2 && (
            <Field
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          {step === 3 && (
            <SelectPlan setPlan={setPlan} setStep={setStep}/>
          )}

{step === 4 && (
        <Field
        type="text"
        placeholder="Tell us your name"
        value={givenName}
        onChange={(e) => setGivenName(e.target.value)}
      />
          )}



          

          {step < 3 && (
            <p className="text-concrete text-sm" style={{ paddingTop: "2rem" }}>
              By clicking <span className="font-semibold">Create account</span>,
              you agree to CelebriLinks's <a>Terms and Conditions</a> and
              confirm you have read our <a>Privacy Notice</a>. You may receive
              offers, news and updates from us.
            </p>
          )}

          {step === 4 && <br />}
          {step === 4 && <br />}

          {step === 4 && (
            <span
              className="font-semibold"
              style={{ fontSize: 14.2, fontWeight: 600, opacity: 0.8 }}
            >
              Select one category that best describes your Linktree:
            </span>
          )}

          {step === 4 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                marginTop: 20,
              }}
            >
              <button
                className="catego"
                style={
                  selected === "business"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("business")}
              >
                <div>🏢</div>
                <span>Business</span>
              </button>

              <button
                className="catego"
                style={
                  selected === "creative"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("creative")}
              >
                <div>🎨</div>
                <span>Creative</span>
              </button>

              <button
                className="catego"
                style={
                  selected === "education"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("education")}
              >
                <div>📚</div>
                <span>Education</span>
              </button>

              <button
                className="catego"
                style={
                  selected === "entertainment"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("entertainment")}
              >
                <div>🎶</div>
                <span>Entertainment</span>
              </button>

              <button
                className="catego"
                style={
                  selected === "fashion & beauty"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("fashion & beauty")}
              >
                <div>👗</div>
                <span>Fashion &amp; Beauty</span>
              </button>

              <button
                className="catego"
                style={
                  selected === "food & beverage"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("food & beverage")}
              >
                <div>🍕</div>
                <span>Food &amp; Beverage</span>
              </button>

              <button
                className="catego"
                style={
                  selected === "government & politics"
                    ? {
                        border: "1.5px solid red",
                        boxShadow: "0 0 2px 0 rgba(0,0,0,0.5)",
                      }
                    : {}
                }
                onClick={() => setSelected("government & politics")}
              >
                <div>⚖️</div>
                <span>Government &amp; Politics</span>
              </button>
            </div>
          )}

          {step === 1 && (
            <button
              className="login-page-btn"
              onClick={() => {
                if (!isValidEmail(email)) {
                  toast.error("Invalid Email");
                  return;
                }
                if (!userName) {
                  toast.error(`User's Name is required `);
                  return;
                }
                nextStep();
              }}
            >
              Continue
            </button>
          )}

          {step === 2 && (
            <button
              className="login-page-btn"
              onClick={() => {
                if (password.length < 6) {
                  toast.error("Enter atleast 6 characters password");
                  return;
                }
                nextStep();
              }}
            >
              Continue
            </button>
          )}
          {step === 4 && (
            <button
              style={loading ? { pointerEvents: "none" } : {}}
              className="login-page-btn"
              onClick={() => {
                if (!givenName) {
                  toast.error("Enter your complete name");
                  return;
                }
                register();
              }}
            >
              {loading ? <LoaderIcon /> : "Create account"}
            </button>
          )}

          {step === 1 && (
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
          )}

          {!isMobile && (
            <p className="recap">
              This site is protected by reCAPTCHA and the{" "}
              <a>Google Privacy Policy</a> and <a>Terms of Service</a> apply.
            </p>
          )}

          {isMobile && (
            <>
              {" "}
              <p className="recap">
                This site is protected by reCAPTCHA and the{" "}
              </p>{" "}
              <p className="recap ss">
                {" "}
                <a>Google Privacy Policy</a> and <a>Terms of Service</a> apply.
              </p>{" "}
            </>
          )}
        </div>
      </main>
      <div className="bg-chalk-2"></div>
    </div>
  );
};

export default Signup;
