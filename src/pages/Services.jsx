
import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import * as Images from "../assets/images/index";

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

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
    { name: "Gel Manicure/ Callus Removal", price: "$5+" },
    { name: "Classic Pedicure/ Removal", price: "$35+" },
    { name: "Signature Pedicure", price: "$30" },
    { name: "Premium Pedicure", price: "$40" },
    { name: "Luxury Pedicure", price: "$45" },
    { name: "Supreme Pedicure", price: "$55" },
  ],
  "nail enhancement": [
    { name: "Regular Fill", price: "$25+" },
    { name: "Gel Fill/ Cut Down", price: "$5+" },
    { name: "Regular Full Set", price: "$32" },
    { name: "Dipping Powder Set", price: "$35+" },
    { name: "Gel X Full Set", price: "$45+" },
    { name: "Builder Gel Set", price: "$45+" },
    { name: "Ombre Full Set", price: "$40+" },
    { name: "White Tip Full Set", price: "$55+" },
  ],
  waxing: [
    { name: "Eyebrows", price: "$10" },
    { name: "Lips", price: "$7" },
    { name: "Chin", price: "$7" },
    { name: "Face", price: "$35+" },
    { name: "Under Arm", price: "$20+" },
    { name: "Half Arms", price: "$25+" },
    { name: "Full Arms", price: "$40+" },
    { name: "Half Leg", price: "$50+" },
    { name: "Full Leg", price: "$50+" },
    { name: "Back", price: "$50+" },
  ],
  design: [
    { name: "Catey's", price: "$5+" },
    { name: "Regular French Tip", price: "$7" },
    { name: "Deep French Tip", price: "$12" },
    { name: "Chrome", price: "$12" },
    { name: "Nail Design (2 Nails)", price: "$5+" },
  ],
  "kids services": [
    { name: "Kid Manicure", price: "$12" },
    { name: "Kid Pedicure/ With Gel Polish", price: "+$10" },
    { name: "Kid Deluxe Pedicure", price: "$40" },
    { name: "Pedicure and Manicure", price: "$45" },
    { name: "Full Pedicure and Hands Color", price: "$35" },
    { name: "Add-on: Shellac Color", price: "+$10" },
    { name: "Services include free designs", price: "❤️" },
  ],
  "addition services": [
    { name: "Finger/ Toe Nails Color Change", price: "" },
    { name: "Nail Shape Change", price: "" },
    { name: "Color Change On Acrylic Nail", price: "" },
    { name: "Nail Repair", price: "" },
    { name: "Finger/ Toes Nails Cutting", price: "" },
    { name: "Take Off ", price: "$8" },
    { name: "Shellac Removal: Toes", price: "$10" },
    { name: "Dipping Removal", price: "$12" },
    { name: "Ombre Style Extra", price: "$15" },
    { name: "French Extra", price: "$5" },
    { name: "French Tips", price: "+$7" },
    { name: "Nails Sculpture Add-on", price: "+$15" },
  ],
};

export default function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const capitalizeFirstLetter = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <div>
      {isMobile ? (
            <div className="all-services-container">
      <div className="cta-image-container mb-10 mobile:h-3/5">
        <img
          src={Images.bannerService}
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
          <h3 className="text-2xl text-center py-4 uppercase font-bold">
            {capitalizeFirstLetter(category)}
          </h3>
          <div className="price-detail-container flex flex-col gap-8 py-4">
            {services.map((service, index) => (
              <div className="flex w-3/4 justify-between mx-auto" key={index}>
                <h4 className="uppercase font-bold">{service.name}</h4>
                <h4>{service.price}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      ) : (
          <div className="service-wrapper flex flex-col items-center h-auto">
      <div className="cta-image-container mb-10 mobile:h-3/5">
        <img
          src={Images.bannerService}
          alt="gallery-banner"
          loading="lazy"
        />
      </div>
      <div className="service-link-container">
        <nav className="flex mobile:flex-wrap mobile:justify-center desktop:gap-6 mobile:gap-8 pt-10 mobile:pb-4 uppercase">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/manicure and pedicure"
          >
            Manicure and Pedicure
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/nail enhancement"
          >
            Nail Enhancement
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/waxing"
          >
            Waxing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/design"
          >
            Design
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/kids services"
          >
            Kids Services
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/addition services"
          >
            Addition Services
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
      )}
    </div>
  );
  // if (isMobile) {
  //   console.log("Is mobile:", isMobile);
  //   // Mobile: Display all services on one page
  //   return (
      
  //     <div className="all-services-container">
  //     <div className="cta-image-container mb-10 mobile:h-3/5">
  //       <img
  //         src={Images.bannerService}
  //         alt="service-banner"
  //         loading="lazy"
  //       />
  //     </div>
  //     <h2 className="text-center py-6 text-4xl">Our Services</h2>
  //     <p className="text-center italic pb-8">
  //       Explore our wide range of services tailored to meet all your beauty
  //       needs.
  //     </p>
  //     {Object.entries(serviceDetails).map(([category, services], categoryIndex) => (
  //       <div key={categoryIndex} className="service-category-container py-6">
  //         <h3 className="text-2xl text-center py-4 uppercase font-bold">
  //           {capitalizeFirstLetter(category)}
  //         </h3>
  //         <div className="price-detail-container flex flex-col gap-8 py-4">
  //           {services.map((service, index) => (
  //             <div className="flex w-3/4 justify-between mx-auto" key={index}>
  //               <h4 className="uppercase font-bold">{service.name}</h4>
  //               <h4>{service.price}</h4>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  //   );
  // }

  // Desktop: Use category-based navigation
  // return (
  //   <div className="service-wrapper flex flex-col items-center h-auto">
  //     <div className="cta-image-container mb-10 mobile:h-3/5">
  //       <img
  //         src={Images.bannerService}
  //         alt="gallery-banner"
  //         loading="lazy"
  //       />
  //     </div>
  //     <div className="service-link-container">
  //       <nav className="flex mobile:flex-wrap mobile:justify-center desktop:gap-6 mobile:gap-8 pt-10 mobile:pb-4 uppercase">
  //         <NavLink
  //           style={({ isActive }) => (isActive ? activeStyles : null)}
  //           to="/services/manicure and pedicure"
  //         >
  //           Manicure and Pedicure
  //         </NavLink>

  //         <NavLink
  //           style={({ isActive }) => (isActive ? activeStyles : null)}
  //           to="/services/nail enhancement"
  //         >
  //           Nail Enhancement
  //         </NavLink>

  //         <NavLink
  //           style={({ isActive }) => (isActive ? activeStyles : null)}
  //           to="/services/waxing"
  //         >
  //           Waxing
  //         </NavLink>
  //         <NavLink
  //           style={({ isActive }) => (isActive ? activeStyles : null)}
  //           to="/services/design"
  //         >
  //           Design
  //         </NavLink>

  //         <NavLink
  //           style={({ isActive }) => (isActive ? activeStyles : null)}
  //           to="/services/kids services"
  //         >
  //           Kids Services
  //         </NavLink>

  //         <NavLink
  //           style={({ isActive }) => (isActive ? activeStyles : null)}
  //           to="/services/addition services"
  //         >
  //           Addition Services
  //         </NavLink>
  //       </nav>
  //     </div>
  //     <div>
  //       <Outlet />
  //     </div>
  //   </div>
  // );
}