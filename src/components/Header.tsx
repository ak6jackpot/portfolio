import React, { useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import AK_cover from "../assets/images/AK_cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  className?: string;
  current?: string;
}

export default function Header({ ...props }: Props) {
  const { current = "home" } = props;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full px-4 md:px-[10%] fixed top-0 z-50 py-[10px] text-white bg-neutral-900 border-b-2 border-slate-600">
      <img
        src={AK_cover}
        alt="image_one"
        className="h-[40px] hidden md:block"
        onClick={() => navigate("/")}
      />
      <FontAwesomeIcon
        icon={faBars}
        className="h-[28px] md:hidden"
        onClick={toggleMenu}
      />
      <div className="md:flex hidden md:block md:flex-row md:justify-between font-urbanistNormal items-center">
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
      </div>
      <Button
        onClick={() => navigate("/contact")}
        className="bg-gradient-to-r from-black to-teal-600 text-white font-urbanistNormal hover:from-white hover:to-white hover:text-black"
      >
        Let's Talk
      </Button>

      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-neutral-900 text-white flex flex-col items-center space-y-4 py-8 md:hidden z-10">
          <Button
            className={current === "about" ? "border-b-4 border-red-300" : ""}
            onClick={() => {
              navigate("/about");
              toggleMenu();
            }}
          >
            About
          </Button>
          <Button
            className={current === "exp" ? "border-b-4 border-red-300" : ""}
            onClick={() => {
              navigate("/exp");
              toggleMenu();
            }}
          >
            Experience
          </Button>
          <Button
            className={current === "works" ? "border-b-4 border-red-300" : ""}
            onClick={() => {
              navigate("/works");
              toggleMenu();
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-black to-teal-600 text-white font-urbanistNormal hover:from-white hover:to-white hover:text-black"
          >
            Let's Talk
          </Button>
        </div>
      )}
    </div>
  );
}
