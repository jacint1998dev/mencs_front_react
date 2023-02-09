import React from "react";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-list">
        <h3 className="footer-list-item-1">Rólunk</h3>
        <h3 className="footer-list-item-4">Lorem Ipsum</h3>
        <h3 className="footer-list-item-3">GYIK</h3>
        <h3 className="footer-list-item-2">ÁFSZ</h3>
      </div>
      <hr className="footer-line"></hr>
      <img src={logo} alt="" className="footer-logo"></img>
    </footer>
  );
}
