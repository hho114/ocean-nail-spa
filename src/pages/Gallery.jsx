

import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import * as Images from "../assets/images/index";
import SocialIcon from "../components/SocialIcon";
import Stories from "react-insta-stories";

export default function Gallery() {
  const images = [
    Images.pic1,
    Images.pic2,
    Images.pic3,
    Images.pic4,
    Images.pic5,
    Images.pic6,
    Images.pic7,
    Images.pic8,
    Images.pic9,
    Images.pic10,
    Images.pic11,
    Images.pic12,
    Images.pic13,
  ];

  const initialVisibleImages = 9;
  const [visibleImages, setVisibleImages] = useState(initialVisibleImages);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // New State for Image Popup Modal (Only for Desktop)
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!isStoryOpen) {
      openStory();
    }
  }, []);

  const openStory = () => {
    const storyData = images.map((img) => ({ url: img }));
    setSelectedStory(storyData);
    setCurrentStoryIndex(0);
    setIsStoryOpen(true);
  };

  const closeStory = () => {
    setIsStoryOpen(false);
  };

  const loadMoreImages = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setVisibleImages((prev) => prev + 9);
      setIsSpinning(false);
    }, 1000);
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const goToNextStory = () => {
    if (currentStoryIndex < selectedStory.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      closeStory();
    }
  };

  // Open Image in Modal (Only for Desktop)
  const openImageModal = (image) => {
    if (window.innerWidth >= 768) { // Only open on desktop/laptop
      setSelectedImage(image);
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Banner */}
      <div className="cta-image-container mobile:h-3/5">
        <img src={Images.bannerGallery} alt="gallery-banner" loading="lazy" />
      </div>

      
      {/* Auto-opening Stories */}
{isStoryOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
    {/* Left Arrow Button - Navigate Previous Story */}
    {currentStoryIndex > 0 && (
      <button
        className="absolute left-5 text-white text-3xl bg-gray-800 bg-opacity-70 rounded-full p-4 z-[9999]"
        onClick={goToPreviousStory}
      >
        ˂
      </button>
    )}

    {/* Right Arrow Button - Navigate Next Story */}
    {currentStoryIndex < Math.min(4, selectedStory.length) - 1 && (
      <button
        className="absolute right-5 text-white text-3xl bg-gray-800 bg-opacity-70 rounded-full p-4 z-[9999]"
        onClick={goToNextStory}
      >
        ˃
      </button>
    )}

    {/* Close (X) Button */}
    <div className="absolute top-5 right-5 flex gap-4 z-[9999] pointer-events-auto">
      <button
        className="text-white text-2xl bg-gray-800 bg-opacity-70 rounded-full p-4"
        onClick={closeStory}
      >
        ✕
      </button>
    </div>

    <div className="absolute bottom-20 right-5 flex gap-4 z-[9999] pointer-events-auto">
      <a
        href="tel:+1 804 684 5086"
        className="hover-button call-button flex items-center px-6 py-3 mx-4 text-black dark:text-white rounded-full gap-2"
      >
        📞
        <span>Book Your Appointment</span>
      </a>
    </div>

    {/* Stories Viewer */}
    <div className="relative w-[380px] h-[700px] bg-black rounded-lg shadow-lg flex items-center">
      <Stories
        stories={selectedStory.slice(-4)} // Only pass last 4 images
        defaultInterval={3000} // 3 seconds per story
        width="100%"
        height="100%"
        currentIndex={currentStoryIndex} // Track current index
        onStoryStart={(index) => setCurrentStoryIndex(index)} // Update when story starts
        onStoryEnd={() => {
          if (currentStoryIndex < Math.min(4, selectedStory.length) - 1) {
            setCurrentStoryIndex((prevIndex) => prevIndex + 1); // Move to next story
          } else {
            closeStory(); // Close after last story
          }
        }}
        onAllStoriesEnd={closeStory} // Close modal when all stories finish
      />
    </div>
  </div>
)}

      {/* Image Popup Modal (Only for Desktop) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative p-4">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-2xl bg-gray-800 bg-opacity-70 rounded-full p-4"
              onClick={closeImageModal}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg"
              style={{ maxWidth: "100%", maxHeight: "100vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <div className="gallery-container pt-20 mx-auto mb-36 mobile:w-screen">
        <div className="collection-container mx-auto grid desktop:grid-cols-3 mobile:grid-cols-1 gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openImageModal(image)}>
              <img
                className="gallery-image max-w-full desktop:h-auto mobile:h-full mobile:w-full rounded-lg"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < images.length && (
          <div className="flex justify-center mt-6">
            <Button
              color="dark"
              className={`text-sm ${isSpinning ? "animate-spin" : ""}`}
              onClick={loadMoreImages}
            >
              {isSpinning ? "Loading..." : "Load more"}
            </Button>
          </div>
        )}
      </div>
      {/* Hover Buttons Section */}
      {/* <div className="hover-buttons-container text-center mt-10">
        <a
          href="tel:+1 804 684 5086"
          className="hover-button call-button inline-block px-6 py-3 mx-4 text-black dark:text-white rounded-full"
        >
          📞 Call Us
        </a>

        <a
          href="https://maps.app.goo.gl/SK4GQSCv9hTRTJpp9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-button directions-button inline-block px-6 py-3 mx-4 dark:text-white rounded-full"
        >
          📍 Get Directions
        </a>
      </div> */}
      
      {/* Follow Us Section */}
      <div className="flex flex-col gallery-icon-container p-10 items-center">
        <h2 className="text-3xl">Follow us on</h2>
        <div>
          <SocialIcon />
        </div>
      </div>
    </div>
  );
}