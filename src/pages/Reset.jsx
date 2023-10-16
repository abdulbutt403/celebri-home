import React, { useState } from "react";
import Field from "../components/Common/Field";
import useResponsive from "../Hooks/responsive";
import { LogoFullIcon } from "../svgs";
import axios from "axios";
import { baseUrl } from "../constants";
import { useNavigate } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";
import { isValidEmail } from "../utils";

const Reset = () => {
  const isMobile = useResponsive();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const [codeLoading, setCodeLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();

  const sendMail = async () => {
    if(!isValidEmail(email)){
        toast.error('Invalid Email')
        return
      }
    setCodeLoading(true)
    try {
      // Make a POST request to the "Forgot Password" API
      const response = await axios.post(`${baseUrl}/users/forgotpassword`, { email });
      toast.success(response.data.message);
      setStep(2); // Change to step 2 after sending the email
      setCodeLoading(false)
    } catch (error) {
      console.error(error);
      setCodeLoading(false)
      toast.error('Failed to send the verification code');
    }
  };

  const resetPass = async () => {
    if (password !== confirmPassword) {
      toast.error('Password and Confirm Password do not match');
      return;
    }

    setResetLoading(true)

    try {
      // Make a POST request to the "Reset Password" API
      await axios.post(`${baseUrl}/users/reset-password`, { email, verificationCode: code, newPassword: password });
      toast.success('Password reset successful');
      // Redirect to the login page or another relevant page
      navigate('/login');
    } catch (error) {
      console.error(error);
      setResetLoading(false)
      toast.error('Password reset failed');
    }
  };

  return (
    <div className="login-wrap">
      <div className="logo-wrap">
        <a>
          <LogoFullIcon />
        </a>
      </div>
      <main className="login-main" style={{ width: '100vw' }}>
        <div className="login-form-wrap" style={{ padding: '0 50px' }}>
          <h1 className="login-heading" style={{ fontSize: 42, textAlign: 'center' }}>Reset Your Password</h1>
          <p className="text-rs">If you signed up with a username and password, reset your password below.<br />

            If you signed up using your phone number, Google or Apple, get help accessing your account here.

          </p>
          {step === 1 && <Field type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />}
          {step === 2 && <Field type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />}
          {step === 2 && <Field type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />}
          {step === 2 && <Field type="text" placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />}
          {step === 1 && <button className="login-page-btn" onClick={sendMail}>{codeLoading ? <LoaderIcon/> : 'Send Code'}</button>}
          {step === 2 && <button className="login-page-btn" onClick={resetPass}>{resetLoading? <LoaderIcon/> : `Confirm Reset`}</button>}

        </div>
      </main>

    </div>
  );
};

export default Reset;
