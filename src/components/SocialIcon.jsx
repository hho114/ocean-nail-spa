import React from "react";
import * as Images from "../assets/images/index";

export default function SocialIcon() {
  return (
    <div className="social-icon-container flex gap-2 items-center">
      <a
        href="https://www.facebook.com/profile.php?id=61572202049830"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-12" src={Images.facebookIcon} alt="facebook-icon" loading="lazy"/>
      </a>
      <a
        href="https://www.instagram.com/oceannailspa_gloucesterpoint/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-12" src={Images.instagramIcon} alt="instagram-icon" loading="lazy"/>
      </a>
    </div>
  );
}
