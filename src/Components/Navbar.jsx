import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      {" "}
      {/* <aside class="sidebar active" id="sidebar">
        <div class="logo">
          <img src={Logo} alt="logo" class="logo" style={{ width: "160px" }} />
        </div>
        <ul class="menu">
          <li class="active">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </li>
          <li class="inactive">
            <i class="fas fa-users"></i> Referral
          </li>
          <li class="inactive">
            <i class="fas fa-users-cog"></i> Community
          </li>
          <li class="inactive">
            <i class="fas fa-sitemap"></i> Downline
          </li>
        </ul>
        <h3 class="follow-us">Follow Us On</h3>
        <div class="social-icons">
          <a href="https://t.me/+k7orOTvG6GU3ZTY1/" target="_blank">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="https://x.com/Etherforce_Defi/" target="_blank">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/people/Ether-Force/61568722199092/"
            target="_blank"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/ether_force/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCozA4H-xCpTS1MPZn4Y1Vfw/"
            target="_blank"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </aside> */}
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
          <Link to="/">
            <li className="active">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
          </Link>
          <Link to="/refferal">
            <li className="inactive">
              <i className="fas fa-users"></i> Referral
            </li>
          </Link>
          <Link to="/community">
            <li className="inactive">
              <i className="fas fa-users-cog"></i> Community
            </li>
          </Link>
          <Link to="/downline">
            {" "}
            <li className="inactive">
              <i className="fas fa-sitemap"></i> Downline
            </li>
          </Link>
        </ul>

        <h3 className="follow-us">Follow Us On</h3>

        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </aside>
    </>
  );
}
