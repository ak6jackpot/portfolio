import React, { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //   );
    // }, 5000);
    // return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full flex overflow-hidden my-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.concat(images[0]).map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-[300px] object-cover rounded-2xl"
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
