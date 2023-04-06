import React from "react";
import './Login.css'

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";


const Login = () => {

  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaExpired, setCaptchaExpired] = useState(false);
  const emailRef = useRef(undefined);
  const passwordRef = useRef(undefined);


  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setCaptchaVerified(true);
    
    setCaptchaExpired(false);
    setTimeout(() => {
      setCaptchaExpired(true);
      setCaptchaToken("");
    }, 60000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let emailStored = localStorage.getItem("email")
    let passwordStored = localStorage.getItem("password")
    if (email === emailStored && password === passwordStored && captchaVerified) {
      console.log("True Credentials")
      navigate('/home');
    } else {
      alert("Please Verify capTcha or Credentials are wrong !")
    }
    event.target.reset();
  };
  const handleCookies = (event) => {
    let obj1 = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    }

    document.cookie = `"Email_password"=${JSON.stringify(obj1)}`
  };
  return (
    <>
      <div style={{ fontSize: "30px", textAlign: "center", margin: "1%" }}>Task 1 - Kishor Dabi Sir</div>
      <div className="my-form bg-dark">
        <div style={{ justifyItems: "center", padding: "20px", borderRadius: "20px", backgroundColor: "white" }}>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit} style={{ borderRadius: "20px", backgroundColor: "#FFEBEE", padding: "20px", }}>
            <input
              style={{ width: "280px" }}
              type="text"
              id="email"
              name="email"
              class="email"
              placeholder="Email"
              ref={emailRef}
            />

            <input
              style={{ width: "280px" }}
              type="text"
              id="password"
              name="password"
              class="password"
              placeholder="Password "
              ref={passwordRef}
            />
            <br />
            <input type="checkbox" value="lsRememberMe" id="rememberMe" onClick={handleCookies} />
            <label htmlFor="rememberMe">Save password</label>
            <br />
            <br />
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleCaptchaChange} expiration={60} />
            <br />
            <button className="btn btn-primary" type="submit">Submit</button>

          </form>
        </div>
        <p className="mt-4">Not a member? <a href="/signup">Signup now</a></p>
      </div>
    </>
  )
};

export default Login;
