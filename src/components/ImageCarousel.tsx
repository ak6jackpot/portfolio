import React, { useEffect, useState } from "react";

const ImageCarousel = ({ images, orientaion = "portrait" }) => {
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

  const portraitForeground = "z-20 w-[100px] md:w-[250px]";
  const portraitBackground = "z-10 w-[90px] md:w-[220px] opacity-70";
  const landscapeForeground = "z-20 w-[150px] md:w-[500px]";
  const landscapeBackground = "z-10 w-[100px] md:w-[300px] opacity-70";

  return (
    <div className="relative w-full flex overflow-hidden items-center justify-center my-8">
      <div className="flex items-end">
        {displayImages.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            className={`${
              index == 0
                ? orientaion == "portrait"
                  ? `${portraitBackground} -mr-4`
                  : `${landscapeBackground} -mr-8`
                : index == 1
                ? orientaion == "portrait"
                  ? `${portraitForeground}`
                  : `${landscapeForeground}`
                : orientaion == "portrait"
                ? `${portraitBackground} -ml-4`
                : `${landscapeBackground} -ml-8`
            } object-cover rounded-lg md:rounded-2xl ${
              orientaion == "portrait" ? "aspect-[1/2]" : "aspect-[3/2]"
            }`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
