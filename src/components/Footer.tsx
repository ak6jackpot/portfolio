import React from "react";
import { Img, Heading } from ".";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer>
      <div className="absolute inset-x-0 bottom-0 w-full flex justify-center items-center pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800">
        <Heading size="xs" as="p" className="!text-white-A700">
          All Rights Reserved
        </Heading>
      </div>
    </footer>
  );
}
