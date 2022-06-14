import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <div className="container">
        <a>
          <img
            src={`${process.env.PUBLIC_URL}/public_assets/JAYFLIX.png`}
            alt="로고"
            className="logo"
          />
        </a>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
