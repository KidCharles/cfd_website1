import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        {/* <Link to="/"> */}
        <img
          className="cfd_icon_mobile"
          src="https://i.imgur.com/cZ8HnRE.png"
          alt="CareFree Direct Logo"
        />
        {/* </Link> */}

        {/* <Link to="/"> */}

        <img
          className="cfd_icon"
          src="https://i.imgur.com/zElzlxW.png"
          alt="CareFree Direct Logo"
        />
        {/* </Link> */}
        {/* <h1 className="nav_title">LOGO</h1> */}
      </div>
      <div>
        <p className="nav_item">Call our Medicare Coverage Help Center</p>
        <ul>
          <li className="nav_number">1-555-555-5555</li>
          <li>
            <span className="nav_subtitle">TTY:711 8am to 8pm, Monday-Friday</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
