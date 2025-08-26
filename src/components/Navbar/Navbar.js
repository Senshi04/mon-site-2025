import React, { useState } from "react";
import "./navbar.css";

import Contact from "../Contact/Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => {
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">IN<span>DIA</span></div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#accueil" onClick={closeMenu}>ACCUEIL</a>
        <a href="#parcours" onClick={closeMenu}>PARCOURS</a>
        <a href="#projets" onClick={closeMenu}>PROJETS</a>
        <a href="#a-propos" onClick={closeMenu}>À PROPOS</a>
      </nav>

      <button className="contact-btn primary-button" onClick={() => {openContact(); closeMenu()}}>
        Contact
      </button>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isContactOpen && <Contact onClose={closeContact} />}

    </header>
  );
};

export default Navbar;