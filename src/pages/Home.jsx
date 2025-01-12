import React, { useState, useEffect } from "react";
// import { NavLink, Outlet } from "react-router-dom";
import * as Images from "../assets/images/index";

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

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

const serviceDetailsMobile = {
  "manicure and pedicure": [
    { name: "Regular Manicure", price: "$20" },
    { name: "Gel Manicure / with Gel Removal", price: "$30 / $35" },
    { name: "Classic Pedicure / with Callus Removal", price: "$30 / $35" },
    { name: "Signature Spa Pedicure", price: "$40" },
    { name: "Deluxe Spa Pedicure", price: "$55" },
    { name: "Supreme Spa Pedicure", price: "$65" },
  ],
  "nail enhancement": [
    { name: "Regular Fill", price: "$25+" },
    { name: "Gel Fill", price: "$35+" },
    { name: "Regular Full Set", price: "$35+" },
    { name: "Gel Full Set", price: "$45+" },
    { name: "Dipping Powder Set", price: "$45+" },
    { name: "Gel X Full Set", price: "$50+" },
    { name: "Builder Gel Set", price: "$50+" },
    { name: "Builder Gel Fill", price: "$40+" },
    { name: "Ombre Full Set", price: "$55+" },
    { name: "Ombre Fill", price: "$40+" },
    { name: "White Tip Full Set", price: "$40+" },
  ],
  waxing: [
    { name: "Eyebrows", price: "$10" },
    { name: "Lips", price: "$7" },
    { name: "Chin", price: "$7" },
    { name: "Face", price: "$35+" },
    { name: "Under Arm", price: "$15+" },
    { name: "Half Arms", price: "$20+" },
    { name: "Full Arms", price: "$30+" },
    { name: "Half Leg", price: "$30+" },
    { name: "Full Leg", price: "$45+" },
    { name: "Back", price: "$50+" },
  ],
  design: [
    { name: "Cat Eyes", price: "$5+" },
    { name: "Regular French Tip", price: "$7" },
    { name: "Deep French Tip", price: "$12" },
    { name: "Chrome", price: "$12" },
    { name: "Nail Design (2 Nails)", price: "$5+" },
    { name: "3+ Colors", price: "$5" },
  ],
  "kids services": [
    { name: "Kid Manicure / with Gel Polish", price: "$12 / $20" },
    { name: "Kid Pedicure / with Gel Polish", price: "$20 / $30" },
    { name: "Finger / Toe Nail Color Change", price: "$8 / $15" },
    { name: "Toe Nail Color Change with Gel", price: "$10 / $18" },
  ],
  "addition services": [
    { name: "Finger Nails Color Change / with Gel", price: "$12 / $25" },
    { name: "Toe Nails Color Change / with Gel", price: "$15 / $28" },
    { name: "Nail Shape Change", price: "$5" },
    { name: "Color Change On Acrylic Nail / with Gel", price: "$18 / $30" },
    { name: "Nail Repair", price: "$5+" },
    { name: "Nail Cut Down", price: "$5" },
    { name: "Finger / Toe Nails Cutting", price: "$7 / $10+" },
    { name: "Soak Off Acrylic Nail Only", price: "$15" },
    { name: "Soak Off Gel / Dipping Only", price: "$10" },
    { name: "Toe Nail Extensions (2 Big Toes)", price: "$10" },
  ],
};

export default function Home() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   // Add event listener for resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup on unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const capitalizeFirstLetter = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <div className="all-services-container">
      <div className="cta-image-container mb-10 mobile:h-3/5">
        <img src={Images.heroBanner} alt="service-banner" loading="lazy" />
      </div>

     {/* Hover Buttons Section */}
      <div className="hover-buttons-container text-center mt-10">
        {/* Call Button */}
        <a
          href="tel:+1 804 684 5086"
          className="hover-button call-button inline-block px-6 py-3 mx-4 text-white rounded-full"
        >
          Call Us
        </a>

        {/* Get Directions Button */}
        <a
          href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button directions-button inline-block px-6 py-3 mx-4 text-white rounded-full"
        >
          Get Directions
        </a>
      </div>

      <h2 className="text-center py-6 text-4xl">Our Services</h2>
      <p className="text-center italic pb-8">
        Explore our wide range of services tailored to meet all your beauty
        needs.
      </p>
      {Object.entries(serviceDetailsMobile).map(
        ([category, services], categoryIndex) => (
          <div key={categoryIndex} className="service-category-container py-6">
            <h3 className="text-2xl text-center py-4 font-bold">
              {capitalizeFirstLetter(category)}
            </h3>
            <div className="price-detail-container flex flex-col gap-8 py-4">
              {services.map((service, index) => (
                <div className="flex w-3/4 justify-between mx-auto" key={index}>
                  <h4 className=" font-bold">{service.name}</h4>
                  <h4>{service.price}</h4>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      {/* Note Section */}
      <div className="note-container text-center mt-10 px-6 py-4 bg-gray-100 border rounded-lg">
  <p className="italic text-sm">
    <strong>Note:</strong> All types of pedicure with additional gel polish will be extra <strong>$12</strong>. Plus sign (<strong>+</strong>) indicates that the price could be higher depending on the lengths and shapes.
  </p>
</div>

      {/* Barcode Section */}
      <div className="barcode-container text-center mt-6">
        <p className="mb-2 text-sm italic">
          Scan or tap the barcode to open the menu on your phone.
        </p>
        <a
          href="https://drive.google.com/file/d/1i0wFGgd5yFZFrqmDCANan3E_jfmEtxhl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://quickchart.io/chart?cht=qr&chs=300x300&chl=https://drive.google.com/file/d/1i0wFGgd5yFZFrqmDCANan3E_jfmEtxhl/view?usp=sharing"
            alt="service-barcode"
            className="barcode inline-block w-32 h-32 mb-4 rounded-barcode"
            loading="lazy"
          />
        </a>
      </div>

      
    </div>
  );
}
