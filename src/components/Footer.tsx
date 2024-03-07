import React from "react";
import { Img, Heading } from ".";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer>
      <div className="absolute w-full flex text-white rounded-tr-[50px] bg-gray-800">
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
