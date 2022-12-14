import React, { useEffect, useState, useContext } from "react";
import { getData } from "../../Services/fetch";
import Context from "../../Context/Context";

import "./navbar.css";

import logoAlbion from "../../Images/logo.png";
import userAvatar from "../../Images/stein.png";

export default function Navbar() {
  const [user, setUser] = useState();
  const { setUserSelected } = useContext(Context);

  useEffect(() => {
    getData().then((data) => setUser(data));
  }, []);

  const filterStatsByUserName = (userName) => {
    const filtered = user.values.find((res) => res[1] === userName);

    return setUserSelected(filtered[2]);
  };

  if (!user) return <div></div>;

  return (
    <div>
      <nav className="navbar">
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
              <input className="input-search" type="text" />
              <button className="btn-search">
                <div className="btn-icon">
                  <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="user-login">
            <img src={userAvatar} alt="" className="user-avatar" />
            <div className="user-name">
              <div>
                <select onChange={(e) => filterStatsByUserName(e.target.value)}>
                  <option>Selecione</option>
                  {user &&
                    user.values.map((res, index) => (
                      <option key={index}>{res[1]}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
