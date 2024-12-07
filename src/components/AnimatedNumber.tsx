import React, { useState, useEffect } from "react";

export default function AnimatedNumber(props: any) {
  const { num, delay } = props;
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const increment = num < 50 ? 1 : 50;
      let currentNumber = 0;
      const interval = setInterval(() => {
        currentNumber += increment;
        setNumber(currentNumber);

        if (currentNumber === num) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, delay);
  }, []);

  return <>{number}</>;
}
