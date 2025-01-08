import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import storeLogo from "../assets/images/store-logo.png";
import { Button } from "flowbite-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: isDarkMode ? "#f5f5f5" : "#161616", // Light color for dark mode
};
  // const activeStyles = {
  //   fontWeight: "bold",
  //   textDecoration: "underline",
  //   color: "#161616",
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const logo = document.querySelector(".site-logo img");
      if (logo) {
        logo.classList.add("flip-animation");
        setTimeout(() => {
          logo.classList.remove("spin-animation");
        }, 3000); // 3000 milliseconds (3 seconds) for the rotation animation
      }
    }, 1000); // 1000 milliseconds (1 second) interval for rotation

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="header-container w-3/4 mobile:w-11/12  mx-auto flex items-center justify-between mobile:justify-center">
      {!isMenuOpen && (
        <div className="header-logo-container">
          <Link className="site-logo" to="/">
            <img
              className="desktop:w-2/12 mobile:w-3/12 rounded-full"
              src={storeLogo}
              alt="dark-logo"
            />
          </Link>
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
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/services/manicure and pedicure"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          SERVICES
        </NavLink> */}
        <NavLink
          to="/gallery"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Gallery
        </NavLink>

        <NavLink
          to="/contactUs"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="whitespace-nowrap"
        >
          Contact Us
        </NavLink>
        {/* <a
          href=""
          className="focus:outline-none"
        >
          <Button color="dark" className="uppercase mobile:p-0.1">
            Book now!
          </Button>
        </a> */}
      </nav>
    </div>
  );
}
