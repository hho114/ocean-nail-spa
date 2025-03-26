import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as Images from "../assets/images/index";
import { Link } from "react-scroll";

export default function Layout() {
  const backToTop = document.querySelector(".back-to-top");
  const [isBackToTop, setIsBackToTop] = React.useState(false);

  // Conditionally render the button
  function renderToTopButton(isBackToTop) {
    if (backToTop) {
      backToTop.style.visibility = isBackToTop ? "visible" : "hidden";
      backToTop.style.opacity = isBackToTop ? "0.2" : "0";
      backToTop.style.transform = isBackToTop ? "scale(1)" : "scale(0)";
    }
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      setIsBackToTop(true);
      renderToTopButton(isBackToTop);
    } else {
      setIsBackToTop(false);
      renderToTopButton(isBackToTop);
    }
  });

  return (
    <div className="site-wrapper">
      <Header />
      <main className="mx-auto w-screen">
        <Outlet />
      </main>
      <Footer />
      <Link
        to="top"
        smooth={true}
        duration={500}
        className={`back-to-top ${isBackToTop ? "visible" : ""}`}
        offset={-70}
        title="Back-to-Top"
      >
        <img
          src={Images.arrowUp}
          alt="Back-to-Top"
          className="back-to-top__image"
          loading="lazy"

        />
      </Link>
    </div>
  );
}
