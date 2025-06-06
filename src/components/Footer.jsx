import React from "react";
// import * as Images from "../assets/images/index";

export default function Footer() {

  
  return (
    <footer
      id="booking"
      className="footer-wrapper flex-col w-screen pt-10 px-10 items-center mobile:h-auto"
    >
      <div className="footer-container h-full w-full desktop:flex mobile:flex-col desktop:justify-between">
        <div className="map-container desktop:w-1/3 desktop:h-3/4 mobile:h-2/4 mobile:pb-10">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.4110717606964!2d-79.87857672297052!3d43.53547236003584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6fd88d6f9b51%3A0xf6dbfe7e6a2ba291!2sPT%20nails%20and%20bar!5e0!3m2!1sen!2sca!4v1700342979956!5m2!1sen!2sca"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
          
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d110039.58182715232!2d-76.49383742099491!3d37.26002988112976!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b081000a9b1da7%3A0x5fb861a4eba91ecf!2sOcean%20Nail%20Spa!5e1!3m2!1sen!2sus!4v1736370642010!5m2!1sen!2sus"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>
        <div className="contact-us-container flex flex-col gap-10">
          <h3 className="text-2xl">Contact us</h3>
          <div className="address-container flex flex-col gap-4">
            <h4 className="text-lg font-bold uppercase">Address</h4>
            <h5>Ocean Nail Spa</h5>
            
            <p className="w-2/3 flex items-center gap-2 ">
            {/* <img 
                src={Images.locationIcon} 
                alt="phone icon" 
                className="w-5 h-5" 
              /> */}
              Address: {""}
              <a
                href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
                target="_blank"
                rel="noopener noreferrer"
              >
              1777 George Washington Memorial Hwy, Gloucester Point, VA 23062
              </a>
            </p>
          </div>
          <div className="contact-container flex flex-col gap-4 pb-10">
            <h4 className="text-lg font-bold uppercase">Contact</h4>
            <p className="w-2/3 flex items-center gap-2">
               {/* <img 
                src={Images.phoneIcon} 
                alt="phone icon" 
                className="w-5 h-5" 
              /> */}
              Phone #: <a href="tel:+1 804 684 5086">(804) 684 - 5086</a>
            </p>
            {/* <p className="w-auto">
              email:
              <a href="mailto:huyho114@gmail.com">
                {" "}
                huyho114@gmail.com
              </a>
            </p> */}
          </div>
        </div>
        <div className="business-hour-container flex flex-col gap-10">
          <h3 className="text-2xl">Business hours</h3>
          <ul className="flex flex-col gap-4">
            <li>Mon - Fri: 10am - 7pm</li>
            {/* <li>Tue: Temporarily Closed</li> */}
            <li>Sat: 10am - 5pm</li>
            <li>Sun: Closed</li>
            {/* <li>Sun: 12pm - 5pm</li> */}
            {/* <li>Sun: Closed for Mother's Day</li> */}
            {/* <li>Opening soon</li> */}
            
            {/* Make sure update google map, apple map, and facebook */}
            <li className="font-bold italic">*Holiday hours may be changed</li>
          </ul>
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
