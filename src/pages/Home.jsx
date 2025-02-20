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
    {
      name: "Regular Manicure",
      price: "$20",
      description: "Freshen up with a natural soak, delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a regular nail polish. (40 min)"
    },
    {
      name: "Gel Manicure / with Gel Removal",
      price: "$30 / $35",
      description: "Enjoy a gel polish manicure with removal services if needed, offering long-lasting shine and durability."
    },
    {
      name: "Classic Pedicure / with Callus Removal",
      price: "$30 / $35",
      description: "A soothing pedicure with exfoliation and callus removal, ensuring soft, well-groomed feet."
    },
    {
      name: "Signature Spa Pedicure",
      price: "$40",
      description: "An indulgent pedicure featuring a foot soak, exfoliation, massage, and moisturizing treatment."
    },
    {
      name: "Deluxe Spa Pedicure",
      price: "$55",
      description: "Pamper your feet with an extended spa experience, including aromatherapy, a hydrating mask, and hot towel wrap."
    },
    {
      name: "Supreme Spa Pedicure",
      price: "$65",
      description: "Our ultimate pedicure experience with extended massage, luxurious skincare products, and relaxation techniques."
    },
  ],
  "nail enhancement": [
    {
      name: "Regular Fill",
      price: "$25+",
      description: "A maintenance service to refresh your current acrylic nails and fill in new growth areas."
    },
    {
      name: "Gel Fill",
      price: "$35+",
      description: "A refreshing gel application to maintain the strength and beauty of your existing gel nails."
    },
    {
      name: "Regular Full Set",
      price: "$35+",
      description: "A complete acrylic nail set with your choice of shape and length for a polished look."
    },
    {
      name: "Gel Full Set",
      price: "$45+",
      description: "A long-lasting gel nail extension service for a natural, glossy finish and added strength."
    },
    {
      name: "Dipping Powder Set",
      price: "$45+",
      description: "A lightweight, durable nail enhancement using dipping powder for a natural yet strong look."
    },
    {
      name: "Gel X Full Set",
      price: "$50+",
      description: "A revolutionary soft gel extension system that provides a lightweight and natural finish."
    },
    {
      name: "Builder Gel Set",
      price: "$50+",
      description: "A strong and flexible builder gel overlay to enhance the durability of natural nails."
    },
    {
      name: "Builder Gel Fill",
      price: "$40+",
      description: "A follow-up service to maintain and refresh builder gel nails, ensuring strength and beauty."
    },
    {
      name: "Ombre Full Set",
      price: "$55+",
      description: "Beautiful gradient effect on nails with a smooth color transition from light to dark."
    },
    {
      name: "Ombre Fill",
      price: "$40+",
      description: "A maintenance service to refresh your existing ombre nail design."
    },
    {
      name: "White Tip Full Set",
      price: "$40+",
      description: "A classic French tip nail set that provides a clean and elegant look."
    },
  ],
  waxing: [
    {
      name: "Eyebrows",
      price: "$10",
      description: "Shape and define your eyebrows for a polished, natural look."
    },
    {
      name: "Lips",
      price: "$7",
      description: "Quick and gentle lip hair removal for a smooth finish."
    },
    {
      name: "Chin",
      price: "$7",
      description: "Remove unwanted hair from the chin area, leaving skin soft and smooth."
    },
    {
      name: "Face",
      price: "$35+",
      description: "A complete facial waxing service to remove unwanted hair and achieve a flawless look."
    },
    {
      name: "Under Arm",
      price: "$15+",
      description: "Gentle underarm waxing for smooth and hair-free skin."
    },
    {
      name: "Half Arms",
      price: "$20+",
      description: "Hair removal from half the arm, providing a clean and smooth feel."
    },
    {
      name: "Full Arms",
      price: "$30+",
      description: "Complete arm waxing for a sleek, hair-free finish."
    },
    {
      name: "Half Leg",
      price: "$30+",
      description: "Smooth your legs with hair removal from the knee down."
    },
    {
      name: "Full Leg",
      price: "$45+",
      description: "Full leg waxing to remove hair from thigh to ankle, leaving silky-smooth skin."
    },
    {
      name: "Back",
      price: "$50+",
      description: "Efficient back hair removal for a clean and groomed appearance."
    },
  ],
  design: [
    {
      name: "Cat Eyes",
      price: "$5+",
      description: "A unique magnetic nail polish effect that creates a stunning 3D look."
    },
    {
      name: "Regular French Tip",
      price: "$7",
      description: "A timeless and classic French manicure with clean white tips."
    },
    {
      name: "Deep French Tip",
      price: "$12",
      description: "A stylish deep smile line French tip for a dramatic and chic look."
    },
    {
      name: "Chrome",
      price: "$12",
      description: "A shiny, reflective chrome nail effect for a futuristic finish."
    },
    {
      name: "Nail Design (2 Nails)",
      price: "$5+",
      description: "Custom nail art design for two accent nails."
    },
    {
      name: "3+ Colors",
      price: "$5",
      description: "Add more vibrant colors to your nail set for a creative touch."
    },
  ],
  "kids services": [
    {
      name: "Kid Manicure / with Gel Polish",
      price: "$12 / $20",
      description: "A gentle manicure designed for kids, with an option for gel polish."
    },
    {
      name: "Kid Pedicure / with Gel Polish",
      price: "$20 / $28",
      description: "A fun and relaxing pedicure experience for kids with gel polish option."
    },
    {
      name: "Finger / Toe Nail Color Change",
      price: "$8 / $15",
      description: "A simple polish change for fingers or toes to keep kids' nails looking great."
    },
    {
      name: "Toe Nail Color Change with Gel",
      price: "$10 / $18",
      description: "Gel polish change for little toes for a longer-lasting finish."
    },
  ],
  "addition services": [
    {
      name: "Finger Nails Color Change / with Gel",
      price: "$15 / $22",
      description: "Change the color of your fingernails with an option for gel polish."
    },
    {
      name: "Toe Nails Color Change / with Gel",
      price: "$15 / $22",
      description: "Freshen up your toes with a new polish color with gel option available."
    },
    {
      name: "Nail Shape Change",
      price: "$5",
      description: "Modify the shape of your nails to your preferred style."
    },
    {
      name: "Color Change On Acrylic Nail / with Gel",
      price: "$18 / $25",
      description: "Acrylic nail polish change with an optional gel finish."
    },
    {
      name: "Nail Repair",
      price: "$5+",
      description: "Repair broken or damaged nails to restore their beauty."
    },
    {
      name: "Nail Cut Down",
      price: "$5",
      description: "Shorten your nails to your desired length."
    },
    {
      name: "Finger / Toe Nails Cutting",
      price: "$7 / $10+",
      description: "Trimming service for both fingers and toes to maintain neatness."
    },
    {
      name: "Soak Off Acrylic Nail Only",
      price: "$15",
      description: "Gentle removal of acrylic nails without damaging the natural nails."
    },
    {
      name: "Soak Off Gel / Dipping Only",
      price: "$10",
      description: "Safely remove gel or dipping powder polish."
    },
    {
      name: "Toe Nail Extensions (2 Big Toes)",
      price: "$10",
      description: "Add extensions to your big toes for a uniform look."
    },
  ],
};

export default function Home() {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const capitalizeFirstLetter = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="all-services-container">
      <div className="cta-image-container mb-10 mobile:h-3/5">
        <img src={Images.heroBanner} alt="service-banner" loading="lazy" />
      </div>

      {/* Hover Buttons Section */}
      <div className="hover-buttons-container text-center mt-10">
        <a
          href="tel:+1 804 684 5086"
          className="hover-button call-button inline-block px-6 py-3 mx-4 text-black dark:text-white rounded-full"
        >
          Call Us
        </a>

        <a
          href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button directions-button inline-block px-6 py-3 mx-4 text-black dark:text-white rounded-full"
        >
          Get Directions
        </a>
      </div>

      <h2 className="text-center py-6 text-4xl">Our Services</h2>
      <p className="text-center italic pb-8">
      Welcome to Ocean Nail Spa, where beauty meets relaxation. We offer a range of services, from classic manicures and pedicures to stunning nail art, all in a clean and comfortable environment. Our skilled technicians are here to pamper you and ensure you leave feeling refreshed.
      </p>

      {Object.entries(serviceDetailsMobile).map(
        ([category, services], categoryIndex) => (
          <div key={categoryIndex} className="service-category-container py-6">
            <h3 className="text-2xl text-center py-4 font-bold">
              {capitalizeFirstLetter(category)}
            </h3>
            <div className="price-detail-container flex flex-col gap-8 py-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col w-3/4 justify-between mx-auto border-b pb-4 cursor-pointer"
                  onClick={() => toggleDescription(`${categoryIndex}-${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="theme-text font-bold text-black dark:text-white">
                      {service.name}
                    </h4>
                    <div className="flex items-center">
                      <h4 className="theme-text text-black dark:text-white">
                        {service.price}
                      </h4>
                      {service.description && (
                        <span className="theme-text ml-4 text-xl text-black dark:text-white">
                          {expanded[`${categoryIndex}-${index}`] ? "\u25B2" : "\u25BC"}
                        </span>
                      )}
                    </div>
                  </div>
                  {expanded[`${categoryIndex}-${index}`] && service.description && (
                    <p className="theme-text mt-2 text-black dark:text-white text-xs">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      )}

      <div className="note-container text-center mt-10 px-6 py-4 bg-gray-100 border rounded-lg">
        <p className="italic text-sm">
          <strong>Note:</strong> All types of pedicure with additional gel polish will be extra{" "}
          <strong>$12</strong>. Plus sign (<strong>+</strong>) indicates that the price could be
          higher depending on the lengths and shapes.
        </p>
      </div>

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
