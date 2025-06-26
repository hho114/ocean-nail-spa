import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
 // or wherever your SCSS file is
// import storeLogo from "../assets/images/store-logo.png";
// import * as Images from "../assets/images/index";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const logoUrl = import.meta.env.VITE_CDN_IMAGE_BASE
  // ? `${import.meta.env.VITE_CDN_IMAGE_BASE}/store-logo.png`
  // : storeLogo;
 
  return (

<div className="header-container w-3/4 mobile:w-11/12 mx-auto flex items-center justify-between mobile:justify-center">

  {/* Logo */}
  <div className="header-logo-container">
  <a
    className="site-logo inline-block"
    href="https://www.oceannailspava.com"
    rel="noopener noreferrer"
  >
    <img
      className="desktop:w-2/12 mobile:w-3/12 rounded-full logo"
      src={`${import.meta.env.VITE_CDN_IMAGE_BASE}/store-logo.png`}
      alt="dark-logo"
      loading="lazy"
    />
  </a>
</div>

  {/* Desktop Navigation */}
<nav className="hidden desktop:flex items-center gap-8"> {/* add gap here */}
  <NavLink to="." className="nav-link">Home</NavLink>
  <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
  <NavLink to="/aboutUs" className="nav-link">About Us</NavLink>
</nav>

  {/* Mobile Hamburger Menu */}
  <div className="desktop:hidden mobile:pr-5 relative z-50">
    <button className="menu-toggle-button" onClick={toggleMenu}>
      <svg className="w-6 h-6" fill="none" stroke="#1A4D7F" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

     {isMenuOpen && (
    <nav className="dropdown-menu">
      <NavLink to="." className="menu-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
      <NavLink to="/gallery" className="menu-link" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
      <NavLink to="/aboutUs" className="menu-link" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
    </nav>
  )}
  </div>
</div>
  );
}
