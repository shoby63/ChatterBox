import React from "react";
import "../public/styles/SideDisplay.css";
import svg from "../public/Assets/sassy.svg";
import telephone from "../public/Assets/telephone.svg";
import chatLogo from "../public/Assets/chat.png";
const SideDisplay = () => {
  return (
    <div className="side-display">
      <header>
        <h2>
          <img src={chatLogo} className="chatlogo" />
          ChatterBox
        </h2>
        <p>
          <img src={telephone} alt="telephonne" className="telephone" />{" "}
          +91-6386148251
        </p>
      </header>
      <div className="img-container">
        <img src={svg} alt="logo" />
      </div>
      <footer>
        <h1>Sign in to ChatterBox</h1>
      </footer>
    </div>
  );
};

export default SideDisplay;
