import React from "react";
import { Button } from "./Button";
import facebook from "../assets/images/Social/facebook.png";
import github from "../assets/images/Social/github.png";
import instagram from "../assets/images/Social/instagram.png";
import linkedin from "../assets/images/Social/linkedin.png";
import threads from "../assets/images/Social/threads.png";
interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <div className="w-full flex text-white font-urbanistNormal flex-col">
      <div className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 h-[4px]"></div>
      <div className=" bg-neutral-900 py-4 px-4 flex flex-row items-center justify-end">
        <div className="items-center justify-center flex flex-row">
          <a href="https://www.linkedin.com/in/akshat-singh-1847461a0/">
            <Button className="h-[48px] aspect-square">
              <img src={linkedin} />
            </Button>
          </a>
          <a href="https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d">
            <Button className="h-[48px] aspect-square">
              <img src={facebook} />
            </Button>
          </a>
          <a href="https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr">
            <Button className="h-[48px] aspect-square">
              <img src={instagram} />
            </Button>
          </a>
          <a href="https://github.com/ak6jackpot">
            <Button className="h-[48px] aspect-square">
              <img src={github} />
            </Button>
          </a>
          <a href="https://www.threads.net/@ak.jackpot">
            <Button className="h-[48px] aspect-square">
              <img src={threads} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
