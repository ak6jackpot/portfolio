import React from "react";
import { getImageURL } from "utils";
import { Button } from "./Button";
interface Props {
  className?: string;
}

const footerData = [
  {
    image: getImageURL("linkedin"),
    link: "https://www.linkedin.com/in/akshat-singh-1847461a0/",
  },
  {
    image: getImageURL("facebook"),
    link: "https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d",
  },
  {
    image: getImageURL("instagram"),
    link: "https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr",
  },
  { image: getImageURL("github"), link: "https://github.com/ak6jackpot" },
  {
    image: getImageURL("x"),
    link: "https://x.com/akshats91819699?s=21&t=wJe_d0aRdoP17N-ziMxwoQ",
  },
];

export default function Footer({ ...props }: Props) {
  return (
    <div className="w-full flex text-white font-urbanistNormal flex-col">
      <div className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 h-[4px]"></div>
      <div className=" bg-neutral-900 py-4 px-4 flex flex-row items-center justify-end">
        <div className="items-center justify-center flex flex-row">
          {footerData?.map((item) => {
            return (
              <a target="none" href={item?.link}>
                <Button className="h-[48px] aspect-square">
                  <img src={item?.image} />
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
