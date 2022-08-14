import React from "react";
import "./navbar.css";

import logoAlbion from "../../Images/logo.png";
import userAvatar from "../../Images/stein.png";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <a
              className="navbar-brand"
              href="https://albiononline.com/pt/home"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoAlbion} alt="" className="logo" />
            </a>
            <div className="search">
              <input
                className="input-search"
                type="text"
              />
              <button className="btn-search">
                <div className="btn-icon">
                <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
              </button>
            </div>
          </div>
            <div className="user-login">
              <img src={userAvatar} alt="" className="user-avatar" />
              <div className="user-name">Stein</div>
            </div>
        </div>
      </nav>
    </div>
  );
}
