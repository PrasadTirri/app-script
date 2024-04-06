import React from "react";
import element from "../../images/element.png";
import logo from "../../images/Logo.png";
import search from "../../images/search-normal.png";
import heart from "../../images/heart.png";
import bag from "../../images/shopping-bag.png";
import user from "../../images/profile.png";
import lang from "../../images/Language.png";
import menu from "../../images/menu-linear.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-1">
        <div className="text-con">
          <img src={element} alt="icon" />
          <span className="lorem">Lorem ipsum dolor</span>
        </div>
        <div className="text-con lorem-disable">
          <img src={element} alt="icon" />
          <span className="lorem">Lorem ipsum dolor</span>
        </div>
        <div className="text-con lorem-disable">
          <img src={element} alt="icon" />
          <span className="lorem">Lorem ipsum dolor</span>
        </div>
      </div>
      <div className="header-2">
        <div className="header-2-1">
          <img className="menu-bar" src={menu} alt="menubar" />
          <img className="logo" src={logo} alt="logo" />
          <h2 className="logo-text">LOGO</h2>
          <div>
            <img src={search} alt="search" />
            <img src={heart} alt="heart" />
            <img src={bag} alt="shopping-bag" />
            <img src={user} alt="profile" />
            <img src={lang} alt="language" />
          </div>
        </div>
        <div className="header-2-2">
          <ul className="nav-items">
            <li className="nav-item">SHOP</li>
            <li className="nav-item">SKILLS</li>
            <li className="nav-item">STORIES</li>
            <li className="nav-item">ABOUT</li>
            <li className="nav-item">CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
