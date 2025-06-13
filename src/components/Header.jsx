import React from "react";
import NavBar from "./NavBar";

export default function Header() {


  return (
    <header className="header-wrapper pb-10 pt-5 w-screen" id="top">
          <NavBar/>
  <div className="hover-buttons-container text-center mt-10 flex flex-row justify-center items-center gap-4">
  <a
    href="tel:+1 804 684 5086"
    className="hover-button"
  >📞 Call Us</a>

<a
  href="https://m.me/570010286185742"
  target="_blank"
  rel="noopener noreferrer"
  className="hover-button"
>💬 Message Us</a>

  <a
    href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
    target="_blank"
    rel="noopener noreferrer"
    className="hover-button "
  >📍 Visit Us</a>
  
</div>
    </header>
  );
}
