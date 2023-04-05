import React, { } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import {  useRef } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  
  const nameRef = useRef(undefined);
  const emailRef = useRef(undefined);
  const passwordRef = useRef(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    event.target.reset();
    navigate('/');
  };
  return (
    <div style={{ margin: "1%" }}>
      <div style={{ fontSize: "40px", textAlign: "center", margin: "1%" }}>
        Signup
      </div>
      <div>
        <div class="center1">

          
            <div class="card-body py-md-4">
              <form onSubmit={handleSubmit} style={{ borderRadius: "20px", backgroundColor: "#FFEBEE", padding: "20px" }}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="name"
                  placeholder="Name"
                  ref={nameRef}
                />

                <input
                  type="text"
                  id="email"
                  name="email"
                  class="email"
                  placeholder="Email"
                  ref={emailRef}
                />

                <input
                  type="text"
                  id="password"
                  name="password"
                  class="password"
                  placeholder="Password "
                  ref={passwordRef}
                />


                <br />
                <br />

                <button class="btn btn-primary" type="submit">Submit</button>
              </form>
            </div>

          
        </div>
      </div>
    </div>
  );
};

export default Signup;
