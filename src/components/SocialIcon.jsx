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
        <img className="w-10" src={Images.facebookIcon} alt="facebook-icon" />
      </a>
      {/* <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6" src={Images.instagramIcon} alt="instagram-icon" />
      </a> */}
    </div>
  );
}
