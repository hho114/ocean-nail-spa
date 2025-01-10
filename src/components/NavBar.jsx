import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import storeLogo from "../assets/images/store-logo.png";
// import { Button } from "flowbite-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
 
  return (
    <div className="header-container w-3/4 mobile:w-11/12  mx-auto flex items-center justify-between mobile:justify-center">
     {!isMenuOpen && (
       
        <div className="header-logo-container">
          <a
            className="site-logo"
            href="https://www.oceannailspava.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="desktop:w-2/12 mobile:w-3/12 rounded-full logo"
              src={storeLogo}
              alt="dark-logo"
            />
          </a>
        </div>

        
        )} 

      {/* Hamburger Menu Icon */}
      <div className="desktop:hidden mobile:pr-5">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "mobile:hidden"
        } flex navigation-link-container desktop:gap-4 items-center mobile:gap-6`}
      >
        <NavLink
          to="."
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Home
        </NavLink>
        
        <NavLink
          to="/gallery"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Gallery
        </NavLink>

        <NavLink
          to="/contactUs"
          // style={({ isActive }) => (isActive ? activeStyles : null)}
          className={({ isActive }) => `whitespace-nowrap nav-link ${isActive ? 'active' : ''}`}
          // className="whitespace-nowrap"
        >
          Contact Us
        </NavLink>
        
      </nav>
    </div>
  );
}
