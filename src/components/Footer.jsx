import React from "react";
// import * as Images from "../assets/images/index";
import SocialIcon from "../components/SocialIcon";

export default function Footer() {

  
  return (
    <footer
      id="booking"
      className="footer-wrapper flex-col w-screen pt-10 px-10 items-center mobile:h-auto"
    >
      <div className="footer-container h-full w-full desktop:flex mobile:flex-col desktop:justify-between">
        <div className="map-container desktop:w-1/3 desktop:h-3/4 mobile:h-2/4 mobile:pb-10">
          
          <iframe
          
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d110039.58182715232!2d-76.49383742099491!3d37.26002988112976!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b081000a9b1da7%3A0x5fb861a4eba91ecf!2sOcean%20Nail%20Spa!5e1!3m2!1sen!2sus!4v1736370642010!5m2!1sen!2sus"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>

        <div className="contact-us-container flex flex-col gap-10">
          {/* <h3 className="text-2xl">Contact us</h3> */}
          <div className="address-container flex flex-col gap-4">
            <h4 className="text-2xl font-bold">Address</h4>
            <h5 class="logo-text">
              <span class="ocean-word">Ocean</span> <span class="nail-spa-word">NAIL SPA</span>
            </h5>
            
            <p className="w-2/3 flex items-center gap-2 ">
            
              
              <a
                href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
              📍 1777 George Washington Memorial Hwy, Gloucester Point, VA 23062
              </a>
            </p>
          </div>
          <div className="contact-container flex flex-col gap-4 pb-10">
            <h4 className="text-2xl font-bold">Contact</h4>
            <p className="w-2/3 flex items-center gap-2">
              
             <a href="tel:+1 804 684 5086" className="contact-link">📞 (804) 684 - 5086</a>
            </p>
           <p className="w-2/3 flex items-center gap-2">
              <a
                href="https://m.me/570010286185742"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                💬 Message us
              </a>
            </p>
          </div>
        </div>

        <div className="business-hour-container flex flex-col gap-10 items-start text-left">
          <h3 className="text-2xl">Business hours</h3>
          <ul className="flex flex-col gap-4">
            <li>Mon - Fri: 10am - 7pm</li>
            <li>Sat: 10am - 5pm</li>
            <li>Sun: Closed </li>
            <li className="font-bold italic">*Holiday hours may be changed</li>
          </ul>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl">Follow us on</h3>
            <div>
              <SocialIcon />
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="text-center pt-20 opacity-40 text-sm">
      <p>
        &copy; 2025. All rights reserved. Designed by{" "}
        <a
          href="https://alexhuyho.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Alex Ho
        </a>
      </p>
      </div>
      
    </footer>
  );
}
