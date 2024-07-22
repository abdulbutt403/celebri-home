import React, { useState } from "react";
import Field from "../components/Common/Field";
import useResponsive from "../Hooks/responsive";
import { LogoFullIcon } from "../svgs";
import axios from "axios";
import { baseUrl } from "../constants";
import { useNavigate } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";

const Login = () => {
  const isMobile = useResponsive();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    console.log('login')
    setLoading(true);
    // Prepare the data to send in the request body
    const userData = {
      userName,
      password,
    };

    axios
      .post(`${baseUrl}/users/signin`, userData)
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response?.data?.updatedUser));

        setTimeout(() => {
          navigate("/admin/links");
        }, 1000);
      })
      .catch((error) => {
        console.log("errrrrr", error)
        // eslint-disable-next-line no-cond-assign
        // if (error.respomse.data.statusCode = 401) {
        //   toast.error(error.respomse.data.error);
        // // eslint-disable-next-line no-cond-assign
        // } else if(error.respomse.data.statusCode = 404) {
        //   toast.error(error.response.data.error);
        //   navigate("/signup", {
        //     state: {
        //       step: 4,
        //       // userDetails: user,
        //     },
        //   });
        // } else (error.respomse.data.statusCode = 404) {
        //   toast.error(error.response.data.error);
        //   navigate("/signup", {
        //     state: {
        //       step: 4,
        //       // userDetails: user,
        //     },
        //   });
        // }

        if (error.response.data.statusCode === 401) {
          toast.error(error.response.data.error);
        } else if (error.response.data.statusCode === 400) {
          toast.error(error.response.data.error);
          navigate("/signup", {
            state: {
              step: 4,
            },
          });
        } else if (error.response.data.statusCode === 404) {
          toast.error(error.response.data.error);
          navigate("/signup", {
            state: {
              step: 1,
              // userDetails: user,
            },
          });
        } else {
          toast.error(error.response.data.error);
        }

        // console.error(error);
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
      <main className="login-main">
        <div className="login-form-wrap">
          <h1 className="login-heading">Log in to your CelebriLinks</h1>
          <Field
            type="text"
            placeholder="Username"
            stickyLabel
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Field
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-page-btn" onClick={handleLogin}>
            {loading ? <LoaderIcon /> : `Log in`}
          </button>
          <div className="forgot">
            <p style={{ cursor: "pointer" }}>
              <a onClick={() => navigate("/reset")}>Forgot password?</a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
              cursor: "pointer",
            }}
          >
            <p className="dd">
              Don't have an account?{" "}
              <a className="under" onClick={() => navigate("/signup")}>
                Sign up
              </a>
            </p>
          </div>

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
      {!isMobile && <div className="bg-chalk"></div>}
    </div>
  );
};

export default Login;
