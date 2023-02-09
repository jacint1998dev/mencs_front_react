import React from "react";
import image from "../images/flag.png";
import Ellipse from "./Ellipse";

export default function Menu() {
  return (
    <>
      <nav className="menu-nav">
        <i className="dp-flex flex-row fa-solid fa-bars nav-bar-icon"></i>
        <i className="dp-flex flex-row fa-solid fa-user nav-user-icon"></i>
        <div className="dp-flex flex-row menu-nav-div">
          <p className="menu-nav-div-adop">Adoptáció</p>
          <p className="menu-nav-div-login">Bejelentkezés</p>
          <div className="dp-flex flex-row menu-nav-div-language">
            <div className="dp-flex flex-row menu-nav-div-inside-lang-box">
              <img
                className="menu-nav-div-language-flag"
                src={image}
                alt="hungarian"
              />
              <p className="menu-nav-div-language-name">Magyar</p>
            </div>
            <i className="fa-solid fa-caret-down menu-nav-div-language-down"></i>
          </div>
          <div className="dp-flex flex-row menu-nav-menu">
            <p className="menu-nav-menu-text">Menü</p>
            <i className="fa-solid fa-bars menu-nav-menu-bar-icon"></i>
          </div>
        </div>
      </nav>
      <p className="menu-nav-big-text">Szia állatbarát, Üdv újra itt!</p>
      <p className="menu-nav-small-text">
        Fogadj örökbe te is egy szeretetbombát.
      </p>
      <button className="menu-button"><p className="menu-button-text">Adoptálás</p></button>
      <Ellipse name="mobile-slider-menu" />
    </>
  );
}
