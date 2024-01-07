import "./Login.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Mercedes_Logo_Main from "../../Images/mercedes_logo.png";

export default function Login() {

  // const {register, handleSubmit, watch, formState:{error}, setValue} = useForm();


  let [userAuth, setUserAuth] = useState({
    emailaddress: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setUserAuth({ ...userAuth, [name]: value });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    userAuth.emailaddress === "wasiqfayaz7@gmail.com" &&
    userAuth.password === "Wasiq_123"
      ? window.location.href='/pages/dashboard'
      : alert("SignUp Failed!");
  };

  return (
    <section className="login--section">
      <div className="login--form--container">
        <section className="login--form">
          <figure>
            <img src={Mercedes_Logo_Main} alt="mercedes logo"></img>
          </figure>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmitt}>
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              type="email"
              name="emailaddress"
              placeholder="Your Email Address"
              onChange={handleChange}
              value={userAuth.emailaddress}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={userAuth.password}
            />
            <button>Sign In</button>
          </form>
          <span>
            Not Registered? <a href="/signup">Let's Signup</a>
          </span>
        </section>
      </div>
    </section>
  );
}
