import React from "react";
import "./Nav.css";
// import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            className="cfd_icon_mobile"
            src="https://i.imgur.com/cZ8HnRE.png"
            alt="CareFree Direct Logo"
          />
        </a>
        <a
          href="https://carefreedirect.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            className="cfd_icon"
            src="https://i.imgur.com/zElzlxW.png"
            alt="CareFree Direct Logo"
          />
        </a>
      </div>
      <div>
        <p>Call our Medicare Coverage Help Center</p>
        <ul>
          <li>1-855-931-0267(TTY:711)</li>
          <li>
            <span>8am to 8pm, Monday-Friday</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
