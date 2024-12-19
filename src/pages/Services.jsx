import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import * as Images from "../assets/images/index"

export default function Services() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
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
            to="/services/manicure"
          >
            Manicure
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/pedicure"
          >
            Pedicure
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/packages"
          >
            Packages
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/artificial-nails"
          >
            Artificial Nails
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/kids-services"
          >
            Kids Services
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/eyeslash-extension"
          >
            Eyeslash Extension
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/extra-services"
          >
            Extra services
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
