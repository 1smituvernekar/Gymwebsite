import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="gym-navbar">
      <a href="#home" className="gym-logo" onClick={closeMenu}>
        <span className="gym-logo-icon">✦</span>
        Fit<span>Zone</span>
      </a>

      <button
        className="gym-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`gym-nav-links ${menuOpen ? "show-menu" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#programs" onClick={closeMenu}>Programs</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="gym-nav-join" onClick={closeMenu}>
          Join Now <span>↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;