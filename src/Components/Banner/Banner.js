import React from "react";

import "./Banner.css"


export default function Banner(props) {

  return (
    <div className="bannerWrapper">
      <div className="text_container">
        <h1 className="bannerTitle">title</h1>
        <p className="bannerText">Text</p>
      </div>
      <div className="button">
        button
      </div>
    </div>
  );
}
