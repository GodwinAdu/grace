"use client"
import { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { images } from "../lightbox/imageData";
import { Button } from "../ui/button";
import Image from "next/image";

function SlidingImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          fill
          src={image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transform transition-transform duration-1000 ${index === currentIndex ? "translate-x-0" : "-translate-x-full"
            }`}
        />
      ))}
      <Button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-l-full left-0"
        size="icon"
        onClick={prevSlide}
      >
        <MdArrowBackIos className='text-xl md:text-2xl' />
      </Button>
      <Button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-r-full right-0"
        size="icon"
        onClick={nextSlide}
      >
        <MdArrowForwardIos className='text-xl md:text-2xl' />
      </Button>
    </div>
  );
}

export default SlidingImage;
