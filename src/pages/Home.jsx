
import React, { useState, useEffect } from "react";
// import { NavLink, Outlet } from "react-router-dom";
import * as Images from "../assets/images/index";



const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

const serviceDetailsMobile = {
  "manicure and pedicure": [
    { name: "Regular Manicure", price: "$20" },
    { name: "Gel Manicure", price: "$30" },
    { name: "💅 Add on: Gel Removal", price: "$5" },
    { name: "Classic Pedicure", price: "$30" },
    { name: "💅 Add on: Callus Removal", price: "$5" },
    { name: "Signature Pedicure", price: "$45" },
    { name: "Luxury Pedicure", price: "$55" },
    { name: "Supreme Pedicure", price: "$65" },
  ],
  "nail enhancement": [
    { name: "Regular Fill", price: "$25+" },
    { name: "Gel Fill", price: "$35+" },
    { name: "💅 Add on: Cut Down for Gel Fill or Regular Fill", price: "$5" },
    { name: "Regular Full Set", price: "$35+" },
    { name: "Gel Full Set", price: "$45+" },
    { name: "Dipping Powder Set", price: "$45+" },
    { name: "Gel X Full Set", price: "$50+" },
    { name: "Builder Gel Set", price: "$50+" },
    { name: "Builder Gel Fill", price: "$40+" },
    { name: "Ombre Full Set", price: "$55+" },
    { name: "Ombre Full Fill", price: "$40+" },
    { name: "White Tip Full Set", price: "$40+" },
  ],
  "waxing": [
    { name: "Eyebrows", price: "$10" },
    { name: "Lips", price: "$7" },
    { name: "Chin", price: "$7" },
    { name: "Face", price: "$35+" },
    { name: "Under Arm", price: "$20+" },
    { name: "Half Arms", price: "$25+" },
    { name: "Full Arms", price: "$40+" },
    { name: "Half Leg", price: "$30+" },
    { name: "Full Leg", price: "$50+" },
    { name: "Back", price: "$50+" },
  ],
  "design": [
    { name: "Catey's", price: "$5+" },
    { name: "Regular French Tip", price: "$7" },
    { name: "Deep French Tip", price: "$12" },
    { name: "Chrome", price: "$12" },
    { name: "Nail Design (2 Nails)", price: "$5+" },
  ],
  "kids services": [
    { name: "Kid Manicure", price: "$12" },
    { name: "Kid Pedicure", price: "$20" },
    { name: "💅 Add on: Gel Polish for Manicure or Pedicure", price: "$10" },
    { name: "Finger/Toenails color change", price: "$8" },
    { name: "Finger/Toenails color change with Gel Polish", price: "$15" },
  ],
  "addition services": [
    { name: "Finger / Toe Nails Color Change Regular", price: "$12" },
    { name: "Finger / Toe Nails Color Change Gel", price: "$22" },
    { name: "Nail Shape Change", price: "$5" },
    { name: "Color Change On Acrylic Nail Regular", price: "$18+" },
    { name: "Color Change On Acrylic Nail Gel", price: "$28+" },
    { name: "Nail Repair", price: "$5+" },
    { name: "Finger/ Toes Nails Cutting", price: "$7 / $10+" },
    { name: "Take Off Acrylic Nail ", price: "$15+" },
    { name: "Take off Dipping Powder ", price: "$10+" },
    { name: "Toenail Extensions (2 big toes)", price: "$10" },
    { name: "Toenail Extensions Fill (2 big toes)", price: "$6" },
    { name: "Paraffin Treatment ", price: "$10" },
    
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
          <img
            src={Images.heroBanner}
            alt="service-banner"
            loading="lazy"
          />
        </div>
        <h2 className="text-center py-6 text-4xl">Our Services</h2>
        <p className="text-center italic pb-8">
          Explore our wide range of services tailored to meet all your beauty
          needs.
        </p>
        {Object.entries(serviceDetailsMobile).map(([category, services], categoryIndex) => (
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
    <strong>Note:</strong> All types of pedicure with additional gel
    polish will be extra <strong>$12</strong>. Prices start with short
    length and regular shapes (square, round). Prices may vary for longer
    lengths, special shapes, and more than 3 colors. Prices with a <strong>plus sign (+)</strong> indicate that the price could be higher depending on the service.
  </p>
</div>

      {/* Barcode Section */}
      <div className="barcode-container text-center mt-6">
        <p className="mb-2 text-sm italic">
        Scan the barcode to open the menu on your phone.
        </p>
        <a href="https://drive.google.com/file/d/1i0wFGgd5yFZFrqmDCANan3E_jfmEtxhl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img
            src={Images.barcode}
            alt="service-barcode"
            className="inline-block w-34 h-34 mb-4"
            loading="lazy"
          />
        </a>
      </div>

      </div>
       
    );
  
}
