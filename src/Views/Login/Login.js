import "./Login.css";
import React from "react";
import Mercedes_Logo from "../../Images/mercedes_logo_1.jpg";
import Mercedes_Logo_Main from "../../Images/mercedes_logo.png";

export default function login() {
  return (
    <section className="login--section">
      <div>
        <img src={Mercedes_Logo} alt="mercedes logo" />
      </div>
      <div className="login--form--container">
        <section className="login--form">
          <figure>
            <img src={Mercedes_Logo_Main} alt="mercedes logo"></img>
          </figure>
          <form>
            <label for="email">Email Address</label>
            <br />
            <input type="email" name="email" placeholder="Your Email Address" />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              type="email"
              name="password"
              placeholder="Your Email Address"
            />
          </form>
        </section>
      </div>
    </section>
  );
}
