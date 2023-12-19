import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import authStore from "../store/Store";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const customStyle = {
    width: "300px",
    height: "120px",
    // add more style properties as needed
  };

  const [id, setId] = authStore((state) => [state.id, state.setId]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={
            "https://res.cloudinary.com/diqntq8l2/image/upload/v1702291811/g7dmw3y9uhcsl8fisbpo.png"
          }
          alt=""
          style={customStyle}
        />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/Men" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/Women" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/Kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {id !== "" ? (
          <button
            onClick={async () => {
              const data = await fetch("http://localhost:5000/auth/logout", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  // You may need to include additional headers like authentication tokens if required
                },
                credentials: "include",
              });

              if (data.ok) {
                setId("");
              }
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Join us !</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291679/tryrqsn7ahradmzsfceg.png"} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
