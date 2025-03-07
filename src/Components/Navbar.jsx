import React from "react";
import Logo from "../assets/Logo.png";
export default function Navbar() {
  return (
    <>
      {" "}
      <aside className="sidebar" id="sidebar">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            className="logo"
            style={{ width: "160px" }}
          />
        </div>

        <ul className="menu">
          <li className="active">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </li>
          <li className="inactive">
            <i className="fas fa-users"></i> Referral
          </li>
          <li className="inactive">
            <i className="fas fa-users-cog"></i> Community
          </li>
          <li className="inactive">
            <i className="fas fa-sitemap"></i> Downline
          </li>
        </ul>

        <h3 className="follow-us">Follow Us On</h3>

        <div className="social-icons">
          <a
            href="https://t.me/+k7orOTvG6GU3ZTY1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a
            href="https://x.com/Etherforce_Defi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/people/Ether-Force/61568722199092/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/ether_force/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCozA4H-xCpTS1MPZn4Y1Vfw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </aside>
    </>
  );
}
