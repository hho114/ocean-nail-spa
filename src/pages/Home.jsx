import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Carousel, Button } from "flowbite-react";
import * as Images from "../assets/images/index";

export default function Home() {
  const heroBanners = [
    Images.heroBanner,
    Images.heroBanner1,
    Images.heroBanner2,
    Images.heroBanner3,
  ];
  const productImages = [
    Images.productOne,
    Images.productTwo,
    Images.productThree,
    Images.productFour,
    Images.productFive,
    Images.productSix,
    Images.productSeven,
    Images.productEight,
    Images.productNine,
    Images.productTen,
    Images.productEleven,
    Images.productTwelve,
  ];

  const scrollToTopOnClick = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="home-container w-screen mb-20">
        <div className="cta-image-container">
          <Carousel slideInterval={3000}>
            {heroBanners.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`hero-banner-${index}`}
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
        <div className="story-container w-3/4 mx-auto py-20 desktop:flex mobile:flex-col">
          <div className="story-message-container desktop:w-3/5 mobile:w-full flex flex-col gap-10">
            <p className="number-mark w-12 font-bold pb-10">/01</p>
            <div className="story-title-container pt-4">
              <h3 className="section-title text-4xl">We love doing nails</h3>
              <h4 className="text-5xl">Our story</h4>
            </div>
            <p className="mobile:full desktop:w-2/3 mobile:pb-10">
              Ocean Nail Spa is dedicated to ensuring a delightful experience
              for every customer who visits our shop. Our warm and inviting
              salon creates a comforting and relaxing atmosphere. With our
              expert nail technicians, we stand as your premier destination for
              top-notch nail care!
            </p>
          </div>
          <div className="story-image-container desktop:w-3/5 mobile:h-2/3 mobile:w-full">
            <img
              className="w-full h-full"
              src={Images.bannerStory}
              alt="story-banner"
              loading="lazy"
            />
          </div>
        </div>
        <div className="service-introduction-container desktop:flex mobile:flex-col w-3/4 mx-auto py-20">
          <div className="service-header-container desktop:w-3/5 mobile:w-full flex flex-col gap-10">
            <p className="number-mark w-12 font-bold pb-10">/02</p>
            <div className="story-title-container pt-4 mobile:pb-10">
              <h3 className="section-title text-4xl pb-3">We are proud of</h3>
              <h4 className="text-5xl">Quality Equipment</h4>
            </div>
          </div>
          <div className="service-message-container desktop:w-2/5 mobile:full flex flex-col justify-around mobile:gap-4">
            <p className="w-full p-0 tracking-wider">
              We take pride in delivering superb nail care to our customers,
              upholding the utmost standards of cleanliness and sterilization.
              Our equipment and tools undergo UV sterilization, and we employ
              disposable spa liners, files, and buffers for your safety and
              satisfaction.{" "}
            </p>
            <div className="flex w-3/4">
              <Link to="/services/manicure and pedicure">
                <Button
                  className="service-btn uppercase"
                  color="white"
                  onClick={scrollToTopOnClick}
                >
                  View our services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="product-container desktop:flex mobile:flex-col w-3/4 mx-auto py-20">
          <div className="product-header-container desktop:w-3/5 mobile:w-full flex flex-col gap-10">
            <p className="number-mark w-12 font-bold pb-10">/03</p>
            <div className="product-title-container pt-4 mobile:pb-10">
              <h3 className="section-title text-4xl pb-3">We use</h3>
              <h4 className="text-5xl">Quality Products</h4>
            </div>
          </div>
          <div className="product-slide-container desktop:w-2/5 mobile:w-full">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
              <Carousel slideInterval={3000}>
                {productImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`product-slide-${index}`}
                    loading="lazy"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
