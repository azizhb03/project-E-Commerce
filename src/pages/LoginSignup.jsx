import React, { useState, useCallback } from "react";
import "./LoginSignup.css";

import user_icon from "../component/assets/person.png";
import email_icon from "../component/assets/email.png";
import password_icon from "../component/assets/password.png";
export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const requester = useCallback(async () => {
    try {
      if (action === "Sign Up") {
        const res = await fetch("http://localhost:5000/auth/register", {
          method: "POST",

          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        });
        console.log(res, "res");
        if (res.ok) {
          const data = await res.json();
          console.log("success", data);
          // add toast notification
        } else {
          // add toast notification erro here
        }
      }

     // add login logic here 




    } catch (err) {
      console.log(err);
      // add toast error here
    }
  }, [action, email, password, username]);

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password ? <span>Click Here !</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "login" ? "submit gray" : "submit"}
          onClick={async () => {
            setAction("Sign Up");
            await requester();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
