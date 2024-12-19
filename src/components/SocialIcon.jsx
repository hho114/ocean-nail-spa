import React from "react";
import * as Images from "../assets/images/index";

export default function SocialIcon() {
  return (
    <div className="social-icon-container flex gap-2 items-center">
      <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
        <img className="w-10" src={Images.instagramIcon} alt="facebook-icon" />
      </a>
      <a href="https://www.instagram.com/ptnailsbarmiiton?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
        <img className="w-6" src={Images.facebookIcon} alt="instagram-icon" />
      </a>
    </div>
  );
}
