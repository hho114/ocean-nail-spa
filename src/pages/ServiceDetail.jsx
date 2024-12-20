import React from "react";
import { useParams } from "react-router-dom";

const serviceDetails = {
  manicure: [
    { name: "Dipping Powder Manicure", price: "$0" },
    { name: "Regular Manicure", price: "$25" },
    { name: "Shellac Manicure", price: "$35" },
    { name: "Deluxe Manicure", price: "$37" },
    { name: "Regular Hand Polish Change", price: "$10" },
    { name: "Shellac Hand Polish Change", price: "$25" },
    { name: "Paraffin wax for hands", price: "$12" },
  ],
  pedicure: [
    { name: "Bath Bomb Pedicure", price: "$48" },
    { name: "Shellac Pedicure", price: "$50" },
    { name: "Collagen Deluxe Pedicure", price: "$55" },
    { name: "Regular Toe Polish Change", price: "$15" },
    { name: "Shellac Toes Polish Change", price: "$27" },
    { name: "Paraffin wax for feet", price: "$15" },
    { name: "Deluxe Seasonal Pedicure", price: "$57" },
    { name: "Basic Pedicure | with Gel", price: "$50" },
    { name: "Deluxe Spa Pedicure | with Gel", price: "$60" },
    { name: "Volcano Spa Pedicure | with Gel", price: "$65" },
    { name: "Special Spa Pedicure ", price: "$60 " },
    { name: "Special Spa Pedicure | with Gel", price: "$75" },
  ],
  packages: [
    { name: "Regular Manicure and Pedicure", price: "$55" },
    { name: "Regular pedicure and shellac manicure", price: "$65" },
    { name: "Shellac pedicure and regular manicure", price: "$70" },
    { name: "Shellac pedicure and shellac manicure", price: "$80" },   
    { name: " Bath Bomb Pedicure", price: "+$15" },
    { name: "Collagen Pedicure", price: "+$20" },
    { name: "Deluxe Seasonal Pedicure", price: "+$25" },
  ],
  "artificial-nails": [
    { name: "Shellac Color Change", price: "$30" },
    { name: "Arcrylic Fullset", price: "+$50" },
    { name: "Arcrylic Fill", price: "+$45" },
    { name: "Solar Powder Gel Fullset", price: "+$60" },
    { name: "Solar Powder Gel Fill", price: "+$50" },
    { name: "Bio Gel Fullset", price: "+$60" },
    { name: "Bio Gel Overlay/ Plexi Gel", price: "$50" },
    { name: "Dipping Powder Fullset", price: "$50" },
    { name: "Bio Gel Refill", price: "$50" },
    { name: "Polygel Fullset", price: "$60" },
    { name: "Polygel Refill", price: "$50" },
    { name: "Long Nails", price: "+$5" },
    { name: "Nails Design/ Nails Artist (2 fingers)", price: "+$5" },
    { name: "Nails Design/ Nails Artist (10 fingers)", price: "+$15" },
  ],
  waxing: [
    { name: "Full Body", price: "-10%" },
    { name: "Eyebrows", price: "$10" },
    { name: "Upper/Lower Lips", price: "$7" },
    { name: "Chin", price: "$7" },
    { name: "Sideburn", price: "+$10" },
    { name: "Ears", price: "+$8" },
    { name: "Eyebrow and Upper Lips", price: "$15" },
    { name: "Full Face", price: "+$30" },
    { name: "Under Arms", price: "$15" },
    { name: "Half Arms", price: "$20" },
    { name: "Full Arms", price: "$30" },
    { name: "Half Legs", price: "$25" },
    { name: "Full Legs", price: "$45" },
    { name: "Men's Chest", price: "+$30" },
    { name: "Back", price: "+$40" },
    { name: "Stomach", price: "$10" },
    { name: "Bikini", price: "$25+" },
    { name: "Brazilian", price: "$40+" },
    { name: "Eyebrows Tinted", price: "$12" },
    { name: "Lashes Tinted", price: "$20" },
    { name: "Brows and Lashes Tinted", price: "$28" },
  ],
  "kids-services": [
    { name: "Kid Manicure", price: "$15" },
    { name: "Hands Color", price: "$8" },
    { name: "Toes Color", price: "$10" },
    { name: "Hands and Toes Color", price: "$16" },
    { name: "Kid Pedicure", price: "$30" },
    { name: "Kid Deluxe Pedicure", price: "$40" },
    { name: "Pedicure and Manicure", price: "$45" },
    { name: "Full Pedicure and Hands Color", price: "$35" },
    { name: "Add-on: Shellac Color", price: "+$10" },
    { name: "Services include free designs", price: "❤️" },
  ],
  "eyeslash-extension": [
    { name: "Fullset", price: "$120" },
    { name: "Refill in 2 weeks", price: "$55" },
    { name: "Refill in 3 weeks", price: "$65" },
    { name: "Removal", price: "$20" },
    { name: "Lash Lift", price: "$80" },
  ],
  "extra-services": [
    { name: "Nails Trim - Hand", price: "$7" },
    { name: "Nails Trim - Toes", price: "$12" },
    { name: "Nail Repair", price: "+$5" },
    { name: "Nail Removal", price: "$15" },
    { name: "Nail Design", price: "+$5" },
    { name: "Shellac Removal: Hand", price: "$8" },
    { name: "Shellac Removal: Toes", price: "$10" },
    { name: "Dipping Removal", price: "$12" },
    { name: "Ombre Style Extra", price: "$15" },
    { name: "French Extra", price: "$5" },
    { name: "French Tips", price: "+$7" },
    { name: "Nails Sculpture Add-on", price: "+$15" },
  ],
};

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const formattedServiceName = capitalizeFirstLetter(serviceName);
  const selectedService = serviceDetails[serviceName];

  if (!selectedService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-price-container">
      <h2 className="text-center py-6 text-4xl">{formattedServiceName}</h2>
      <h3 className="text-center text-2xl pb-4">Services and Price</h3>
      <div className="w-full container flex justify-center mx-auto p-6">
        <p className="w-3/4 text-sm italic text-center">
          *Explore a world of endless possibilities with our nail services! Our
          store proudly offers an extensive palette of colors, boasting a
          remarkable collection of 700 shades
        </p>
      </div>
      <div className="price-detail-container flex flex-col gap-8 py-12">
        {selectedService.map((service, index) => (
          <div className="flex w-3/4 justify-between mx-auto" key={index}>
            <h4 className="uppercase font-bold">{service.name}</h4>
            <h4>{service.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
