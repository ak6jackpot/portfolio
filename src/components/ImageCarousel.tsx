import React, { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [displayImages, setDisplayImages] = useState(images);
  const arrayRotate = (arr, reverse) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayImages((prevImages) => arrayRotate([...prevImages], false));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full flex overflow-hidden items-center justify-center my-8">
      <div className="flex items-end">
        {displayImages.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            className={`${
              index == 0
                ? "z-10 w-[90px] md:w-[220px] opacity-70 -mr-4"
                : index == 1
                ? "z-20 w-[100px] md:w-[250px]"
                : "z-10 w-[90px] md:w-[220px] opacity-70 -ml-4"
            } object-cover rounded-lg md:rounded-2xl aspect-[1/2]`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
