import React from "react";
import "./Nav.css";

// import { Link } from "react-router-dom";

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
        <p className="nav_item">Medicare Coverage Help Center</p>
        <ul>
          <li className="nav_number">1-855-931-1230</li>
          <li className="nav_number_mobile">
            <a
              data-replaceable-phone-dialable=""
              className="nav_number_mobile"
              href="tel:1-855-931-1230"
            >
              <span className="">1-855-931-1230</span>
            </a>

          </li>
          <li>

            <span className="nav_subtitle">TTY:711 8am to 8pm, Monday-Friday</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
