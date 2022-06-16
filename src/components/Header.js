import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <figure>
      <video
        controls
        src={`${process.env.PUBLIC_URL}/public_assets/video.mp4`}
        autoPlay
        loop
      ></video>
      <div class="inner">
        <h1>기묘한이야기</h1>
        <p>STRANGER THINGS</p>
        <a href="#">상세정보</a>
      </div>
    </figure>
  );
}

export default Header;
