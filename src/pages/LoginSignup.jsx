import React, { useState, useCallback } from "react";
import "./LoginSignup.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import authStore from "../component/store/Store";

export const LoginSignup = () => {
  const [setMail, setId] = authStore((state) => [state.setEmail, state.setId]);
  const [action, setAction] = useState("Login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

          toast.success("Successfully !");
          navigate("/login");
        } else {
          toast.error("This didn't work.");
        }
      } else if (action === "Login") {
        const res = await fetch("http://localhost:5000/auth/login", {
          method: "POST",

          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setMail(data.data.email);
          setId(data.data.id);
          toast.success("Successfully!");
          navigate("/");
        } else {
          toast.error("This didn't work.");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("This didn't work.");
    }
  }, [action, email, password, username, setMail, setId, navigate]);

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
            <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291681/vipzdegmh5mcq1wg2dse.png"} alt="" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291679/nhqdnqfznqsfqfglqbga.png"} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291681/uau18vfmecyo5fxff7pq.png"} alt="" />
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
            if (action ==="Login") {
              setAction("Sign Up");
            } else await requester();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={async () => {
            if (action ==="Sign Up") {

            setAction("Login");
          }else  await requester();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
