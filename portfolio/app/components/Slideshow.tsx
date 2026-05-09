"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SlideshowProps {
  images: string[];
  demo?: string;
  github?: string;
  title?: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, demo, github, title }) => {
  const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

  return () => clearInterval(interval);
}, [isHovered, images.length]);
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group"   onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
      <Image
        src={images[current]}
        fill
        className="object-fit transition-transform duration-500 ease-in-out transition-opacity duration-500 opacity-100"
        alt={title || "Project Screenshot"}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-80 text-black p-2 rounded-full shadow hover:bg-opacity-100 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-80 text-black p-2 rounded-full shadow hover:bg-opacity-100 transition"
          >
            <FaArrowRight />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                idx === current ? "bg-black" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;