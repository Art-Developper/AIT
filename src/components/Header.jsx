import { Link } from "react-router-dom";
import React, { useState } from "react";
import AITLogo from "../assets/ararat-it-school-logo-web.PNG"
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src={AITLogo}
            alt="AIT Logo"
          />
        </Link>
      </div>

      <nav className="header__nav">
        <div className="dropdown" onMouseLeave={() => setDropdownOpen(false)}>
          <Link to="/courses" className="dropdown-btn-text">
            Դասընթացներ
          </Link>

          <button className="dropdown-btn-arrow" onClick={toggleDropdown}>
            <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/courses">WEB ծրագրավորում</Link>
              <Link to="/courses">UI/UX դիզայն</Link>
              <Link to="/courses">Գրաֆիկ դիզայն</Link>
              <Link to="/courses">SMM</Link>
              <Link to="/courses">AIT Kids</Link>
              <Link to="/courses">Բոլոր դասընթացները</Link>
            </div>
          )}
        </div>

        <Link to="/about">Մեր մասին</Link>
        <Link to="/contact">Կապ</Link>
        <Link to="/policy">Քաղաքականություն</Link>
        <Link to="/fantasy" className="fantasy">Fantasy Space</Link>
      </nav>

      <div className="header__cta">
        <Link to="/apply" className="cta-button">Դիմել հիմա</Link>
      </div>
    </header>
  );
};

export default Header;