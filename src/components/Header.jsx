import React from "react";
import NavBar from "./NavBar";

export default function Header() {


  return (
    <header className="header-wrapper pb-10 pt-5 w-screen" id="top">
          <NavBar/>
          <div className="hover-buttons-container text-center mt-10 flex flex-row justify-center items-center gap-4">
  <a
    href="tel:+1 804 684 5086"
    className="hover-button call-button px-6 py-3 text-black dark:text-white rounded-full w-auto text-center bg-blue-200 hover:bg-blue-300 transition"
  >
    📞 Call Us
  </a>

  <a
    href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
    target="_blank"
    rel="noopener noreferrer"
    className="hover-button directions-button px-6 py-3 dark:text-white rounded-full w-auto text-center bg-blue-200 hover:bg-blue-300 transition"
  >
    📍 Get Directions
  </a>
</div>
    </header>
  );
}
