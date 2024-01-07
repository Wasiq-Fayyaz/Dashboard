import "../Login/Login.css";
import React, { useState } from "react";
import Mercedes_Logo_Main from "../../Images/mercedes_logo.png";

export default function Signup() {
  let [userInput, setUserInput] = useState({
    fullname: "",
    emailaddress: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userInput.fullname === "Wasiq Fayyaz" &&
    userInput.emailaddress === "wasiqfayaz7@gmail.com" &&
    userInput.password === "Wasiq_123"
      ? alert("SignUp Successful!")
      : alert("SignUp Failed!");
  };

  return (
    <section className="login--section">
      <div className="login--form--container">
        <section className="login--form">
          <figure>
            <img src={Mercedes_Logo_Main} alt="mercedes logo"></img>
          </figure>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlfor="email">Full Name</label>
            <br />
            <input
              type="text"
              name="fullname"
              placeholder="Your Full Name"
              value={userInput.fullname}
              onChange={handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              type="email"
              name="emailaddress"
              placeholder="Your Email Address"
              value={userInput.emailaddress}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userInput.password}
              onChange={handleChange}
            />
            <button>Sign Up</button>
          </form>
          <span>
            Already Registered? <a href="/">Let's Sign In</a>
          </span>
        </section>
      </div>
    </section>
  );
}
