import React, { useEffect, useState } from "react";

interface Props {
  images: string[];
}

export default function ImageCarousel({ ...props }: Props) {
  const { images } = props;
  const [current, setCurrent] = useState(1);
  const [previous, setPrevious] = useState(0);

  console.log(images, "images");

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevious((prev) => (prev + 1) % images.length);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getImageClass = (index) => {
    // console.log(current, previous);

    if (current == 2 && previous == 1) {
      console.log("first", images[index]);

      if (index == 0) {
        return "z-10 scale-90 opacity-70 translate-x-0";
      } else {
        if (index == current) {
          console.log(images[index]);

          return "z-20 scale-110 -translate-x-0";
        } else {
          return "z-10 scale-90 opacity-70 -translate-x-0";
        }
      }
    } else if (current == 0 && previous == 2) {
      console.log("second");

      if (index == 1) {
        return "z-10 scale-90 opacity-70 translate-x-0";
      } else {
        if (index == current) {
          return "z-20 scale-110 -translate-x-0";
        } else {
          return "z-10 scale-90 opacity-70 -translate-x-0";
        }
      }
    } else if (current == 1 && previous == 0) {
      console.log("third");
      if (index == 2) {
        return "z-10 scale-90 opacity-70 translate-x-0";
      } else {
        if (index == current) {
          return "z-20 scale-110 -translate-x-0";
        } else {
          return "z-10 scale-90 opacity-70 -translate-x-0";
        }
      }
    } else {
      console.log("none");
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full bg-green-200">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`carousel-img-${index}`}
          className={`relative transition-all duration-700 ease-in-out rounded-2xl ${getImageClass(
            index
          )}`}
          style={{ width: "154px" }}
        />
      ))}
    </div>
  );
}
