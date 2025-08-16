import React, { useState, useEffect } from "react";

interface AnimatedNumberProps {
  num: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  num,
  delay = 0,
  duration = 1000,
  className = "",
}: AnimatedNumberProps) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = num < 50 ? 1 : Math.max(1, Math.floor(num / 50));
      let currentNumber = 0;

      const interval = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= num) {
          setNumber(num);
          clearInterval(interval);
        } else {
          setNumber(currentNumber);
        }
      }, duration / (num / increment));

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [num, delay, duration]);

  return (
    <span className={`inline-block ${className}`}>
      {number.toLocaleString()}
    </span>
  );
}
