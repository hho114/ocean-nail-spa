import React from "react";
import { Button } from "flowbite-react";
import * as Images from "../assets/images/index";
import SocialIcon from "../components/SocialIcon";

export default function Gallery() {
  const images = [
    Images.pic1,
    Images.pic2,
    Images.pic3,
    Images.pic4,
    Images.pic5,
    Images.pic6,
    Images.pic7,
    
    

  ];

  const initialVisibleImages = 9;
  const [visibleImages, setVisibleImages] =
    React.useState(initialVisibleImages);
  const [isSpinning, setIsSpinning] = React.useState(false);

  const loadMoreImages = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setVisibleImages((prevVisibleImages) => prevVisibleImages + 9);
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div>
      <div className="cta-image-container mobile:h-3/5">
        <img
          src={Images.bannerGallery}
          alt="gallery-banner"
          loading="lazy"
        />
      </div>
      <div className="gallery-container pt-20 mx-auto mb-36 mobile:w-screen">
        <div className="collection-container mx-auto grid desktop:grid-cols-3 mobile:grid-cols-1 gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <img
                className="gallery-image max-w-full desktop:h-auto mobile:h-full mobile:w-full rounded-lg"
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          ))}
          {visibleImages < images.length && (
            <div className="load-more-container pb-5">
              <Button
                color="dark"
                className={` text-sm ${isSpinning ? "animate-spin" : ""}`}
                onClick={loadMoreImages}
              >
                {" "}
                {isSpinning ? "+" : "Load more..."}
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col gallery-icon-container p-10 items-center">
          <h2 className="text-3xl">Follow us on</h2>
          <div>
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
