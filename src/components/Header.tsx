import React from "react";
import { Button } from "./Button";
import { Img } from "./Img";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  current?: string;
}

export default function Header({ ...props }: Props) {
  const { current = "home" } = props;
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center w-full px-[100px] py-[10px] text-white bg-black border-b-2 border-slate-600">
      <Img
        src="images/AK_cover.png"
        alt="image_one"
        className="h-[40px]"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-row justify-between font-plusJakartaSans items-center w-[30%]">
        <Button
          className={current == "about" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/about")}
        >
          About
        </Button>
        <Button
          className={current == "exp" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/exp")}
        >
          Experience
        </Button>
        <Button
          className={current == "works" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/works")}
        >
          Projects
        </Button>
        <Button
          className={current == "contact" ? "border-b-4 border-red-300" : null}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Button>
      </div>
      <Button className="bg-gradient-to-r from-deep_purple to-orange text-black font-plusJakartaSans hover:from-black hover:to-red-A200 hover:text-white">
        Let's Talk
      </Button>
    </div>
  );
}
