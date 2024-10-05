import React, { useState } from "react";

import { useEffect, useRef } from "react";

const useInterval = (
  callback: () => object | null | void,
  delay?: number | null
) => {
  const savedCallback = useRef<() => null | object | void>(() => null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

const Card = ({
  content,
  idx,
  onClick,
  onMouseEnter,
  onMouseLeave,
  orientation,
}: {
  content: string;
  idx: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  orientation: string;
}) => {
  let style = {};

  if (idx === 0)
    style = {
      opacity: 0.4,
      transform: "translateX(-80%) scale(0.8)",
      zIndex: 0,
    };
  if (idx === 1) style = { zIndex: 1 };
  if (idx === 2)
    style = {
      opacity: 0.4,
      transform: "translateX(80%) scale(0.8)",
      zIndex: 0,
    };

  return (
    <div
      className={`absolute ${
        orientation == "portrait"
          ? "w-[100px] md:w-[200px]"
          : "w-[150px] md:w-[400px]"
      } rounded-lg object-cotain left-0 top-20 right-0 cursor-pointer transform transition duration-700 p-1 ease bg-white flex items-center flex-col justify-center m-auto`}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={content} className="w-full rounded-md h-full" />
    </div>
  );
};

function ImageCarousel({ images, orientaion = "portrait" }) {
  const [arr, setArr] = useState(images.slice(0, 3));
  const [rest, setRest] = useState(images.slice(3));

  const [isScrolling, setIsScrolling] = useState(true);

  const updateArr = (idx?: number) => {
    const [a, b, c] = arr;

    if (idx === 0) {
      const lastRem = rest[rest.length - 1];
      const beforeArr = [lastRem, a, b];
      const beforeRem = [c, ...rest.slice(0, rest.length - 1)];
      setArr(beforeArr);
      setRest(beforeRem);
    } else {
      const firstRem = rest[0];
      const afterArr = [b, c, firstRem];
      const afterRem = [...rest.slice(1), a];
      setArr(afterArr);
      setRest(afterRem);
    }
  };

  useInterval(
    () => {
      updateArr();
    },
    isScrolling ? 3000 : null
  );
  return (
    <div>
      {arr.map((item, idx) => (
        <Card
          key={item}
          idx={idx}
          content={item}
          onClick={() => updateArr(idx)}
          onMouseEnter={() => setIsScrolling(false)}
          onMouseLeave={() => setIsScrolling(true)}
          orientation={orientaion}
        />
      ))}
    </div>
  );
}

export default ImageCarousel;
