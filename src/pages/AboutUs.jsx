import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function AboutUs() {


  const reviews = [
    {
      stars: 5,
      description: "This was the BEST nail experience of my life! The staff is so kind, the salon is clean and tastefully decorated, and my nails have never looked better. I will absolutely be coming back. I’ve already recommended to all my friends!!",
      name: "Olivia C.",
      link: "https://maps.app.goo.gl/hFqo9LGg5mS65s156",
    },
    {
      stars: 5,
      description: "Absolutely amazing! The best nail salon I have ever been to in my life! Extremely friendly, great work, and excellent prices. It was beautifully decorated and spotless. I would definitely go back again! Highly recommend!",
      name: "Sondra C.",
      link: "https://maps.app.goo.gl/YzAKUPRTxG4T2ngc8",
    },
    {
      stars: 5,
      description: "The BEST place. Their prices are absolutely amazing and the time and dedication into my nails was amazing. So glad we have a good nail place at the point now.",
      name: "Mattie S.",
      link: "https://maps.app.goo.gl/UvVjU3jD8DvMCnma8",
    },
    {
      stars: 5,
      description: "Highly recommend!! Such nice people and such a beautiful and clean place inside! They do AMAZING nails as well. I will definitely be back! 😊",
      name: "Lakyn J.",
      link: "https://maps.app.goo.gl/iJDZYe7rigSbRqGx9",
    },
    {
      stars: 5,
      description: "They did an amazing job with my gel manicure! The place is very clean and the staff are friendly. Normally I hate going to nail salons because it’s always chaotic but this one feels very refreshing compared to all the others around.",
      name: "Lilly H.",
      link: "https://maps.app.goo.gl/7YGiuABa3sjKDHDF7",
    },
    {
      stars: 5,
      description: "I enjoyed getting a pedicure, every one was so nice.",
      name: "Melodi V.",
      link: "https://maps.app.goo.gl/npio6jzXAGKqKu9k9",
    },
    {
      stars: 5,
      description: "Beautiful, salon, excellent service.  I am so impressed with this new salon.  My nail technician, Vicky, is an expert who I have followed for 6 years.  She is a true artist, and a delightful lady.  I highly recommend this salon!",
      name: "Jeryl D.",
      link: "https://maps.app.goo.gl/H3aLFP8toDpn8NMh7",
    },
    {
      stars: 5,
      description: "I always love my nails! Been going to Andy for years. Great service and will try to give you whatever design you want :) My recent twist for St Patty’s rainbow.",
      name: "Crystal D.",
      link: "https://maps.app.goo.gl/3hKPvrsAigRdJHtk7",
    },
    {
      stars: 5,
      description: "First visit to Ocean Nail Spa. Great service. Just needed a manicure and gel polish. Decided on \"cat eye\" polish. Andy was my technician. He was very professional, informative and did a great job. Will be a repeat customer!",
      name: "Jeanne R.",
      link: "https://maps.app.goo.gl/6ASENKgfqQi8LhPp6",
    },
    {
      stars: 5,
      description: "First time going to Ocean Nails, and they were amazing! The place was so clean, and the employees were so kind! Hannah did an amazing job!",
      name: "Coral S.",
      link: "https://maps.app.goo.gl/hprnma2y7YuCawnbA",
    },

  ];

  return (
    <div className="flex flex-col items-center text-center px-6 py-12">
      {/* Banner Image */}
      {/* <div className="cta-image-container mb-10 mobile:h-3/5">
        <img
          src={Images.heroBanner}
          alt="service-banner"
          loading="lazy"
          className="rounded-lg shadow-lg"
        />
      </div> */}

      {/* Introduction Section */}
      <div className="max-w-3xl">
        <h1 className="theme-text text-4xl font-bold dark:text-white mb-4">
          Welcome to Ocean Nail Spa
        </h1>
        <p className="theme-text text-lg dark:text-gray-300 mb-6">
          At <strong>Ocean Nail Spa</strong>, we believe beauty and relaxation should go hand in hand. 
          Our team of professional nail artists is dedicated to providing top-notch services in 
          a serene and luxurious environment. Whether you're looking for a classic manicure, 
          stunning nail art, or a relaxing pedicure, we have you covered!
        </p>

        <p className="theme-text text-lg dark:text-gray-300 mb-6">
          We prioritize hygiene, use high-quality products, and stay up-to-date with the latest 
          trends to ensure you get the best experience possible. Your satisfaction is our mission!
        </p>
      </div>

      <div className="text-center mt-10">
      <h2 className="theme-text text-3xl font-bold">What Our Clients Say</h2>
      <p className="theme-text ">Real reviews from happy customers!</p>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="mt-6 max-w-lg mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
              <p className="text-lg">{"⭐".repeat(review.stars)}</p>
              <p className="theme-text mt-2">{review.description}</p>
              <p className="theme-text mt-4 font-semibold">- {review.name}</p>
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 block"
              >
                View on Google Map
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Call Button */}
        <a
          href="tel:+1 804 684 5086"
          className="hover-button flex items-center justify-center px-6 py-3 text-white rounded-full shadow-lg"
        >
          📞 Call Us
        </a>

        {/* Directions Button */}
        <a
          href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button flex items-center justify-center px-6 py-3 text-white rounded-full shadow-lg"
        >
          📍 Get Directions
        </a>
      </div>
    </div>
  );
}