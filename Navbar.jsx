import React from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="top-nav-content">
      <FontAwesomeIcon className="globe" icon={faEarthAmericas} />
      <h4>
        <span className="title-logo">My Travel Journal</span>
      </h4>
    </div>
  );
}
