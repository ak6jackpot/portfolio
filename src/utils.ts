import { RefObject, useEffect, useMemo, useState } from "react";

export function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

interface OutsideClickHandlerProps {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
}

export const useOutsideClick = ({ ref, handler }: OutsideClickHandlerProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};

export const getImageURL = (name: string, format: string = "png") => {
  return `https://fe-assets-all.s3.ap-south-1.amazonaws.com/portfolio/${name}.${format}`;
};

export const isFrontend = () => {
  const type = localStorage?.getItem("type");

  if (type == "fe") {
    return true;
  } else {
    return false;
  }
};
