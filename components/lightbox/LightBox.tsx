import React, { useState } from 'react';
import { images } from './imageData';

const LightBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length);
  };

  return (
    <div className="lightbox relative">
      <div className={`lightbox-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 ${isOpen ? 'block' : 'hidden'}`}>
        <span className="close-button absolute top-2 right-2 text-white cursor-pointer z-40" onClick={closeLightbox}>&times;</span>
        <img
          src={images[selectedImageIndex]}
          alt={`Image ${selectedImageIndex + 1}`}
          className="lightbox-image max-w-md max-h-md mx-auto"
        />
        <button className="nav-button prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md z-40 md:ml-4 md:mt-0" onClick={goToPreviousImage}>Previous</button>
        <button className="nav-button next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md z-40 md:mr-4 md:mt-0" onClick={goToNextImage}>Next</button>
      </div>
      <div className="lightbox-thumbnails grid gap-2 grid-cols-4 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail cursor-pointer"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {isOpen && (
        <div className="lightbox-overlay fixed inset-0 bg-black opacity-75 z-20" onClick={closeLightbox}></div>
      )}
    </div>
  );
};

export default LightBox;
