import React, { useState } from "react";
import "./Header.css";

const Header = ({ onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img
            src="https://aitschool.am/_ipx/_/icons/logo-header.svg"
            alt="AIT Logo"
          />
        </a>
      </div>

      <nav className="header__nav">
        <div className="dropdown" onMouseLeave={() => setDropdownOpen(false)}>

          <a
            href="#"
            className="dropdown-btn-text"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("courses");
            }}
          >
            Դասընթացներ
          </a>

          <button className="dropdown-btn-arrow" onClick={toggleDropdown}>
            <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">WEB ծրագրավորում</a>
              <a href="#">UI/UX դիզայն</a>
              <a href="#">Գրաֆիկ դիզայն</a>
              <a href="#">SMM</a>
              <a href="#">AIT Kids</a>
              <a href="#">Բոլոր դասընթացները</a>
            </div>
          )}
        </div>

        <a href="#" onClick={(AboutUs)=>{
          AboutUs.preventDefault();
          onNavigate("AboutUS")
        }}>Մեր մասին</a>
        <a href="#" onClick={(contact)=>{
          contact.preventDefault();
          onNavigate("contact")
        }}>Կապ</a>
        <a href="#" onClick={(el)=>{
          el.preventDefault();
          onNavigate("policy")
        }}>Քաղաքականություն</a>
        <a href="#" className="fantasy" onClick={(fantasy)=>{
          fantasy.preventDefault();
          onNavigate("fantasy")
        }}>Fantasy Space</a>
      </nav>

      <div className="header__cta">
        <a href="#" className="cta-button">Դիմել հիմա</a>
      </div>
    </header>
  );
};

export default Header;