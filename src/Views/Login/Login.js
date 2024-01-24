import "./Login.css";
import React, { useState } from "react";
import Mercedes_Logo_Main from "../../Images/mercedes_logo.png";

export default function Login() {

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
    const {emailaddress, password} = userAuth;
    fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      body: JSON.stringify({
        emailaddress,
        password
      }) 
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister")
      if(data.status === "OK"){
        window.localStorage.setItem("token",data.data)
        window.location.href ="/pages/dashboard"
      }
    })
    .then((err) => console.log(err))
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
