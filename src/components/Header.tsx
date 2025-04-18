import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useOutsideClick } from "utils";

interface Props {
  className?: string;
  current?: string;
}

export default function Header({ ...props }: Props) {
  const { current = "home" } = props;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamRef = useRef<HTMLDivElement>(null);
  const [header, setHeader] = useState("translate-y-[-72px]");

  useEffect(() => {
    setTimeout(() => {
      setHeader("translate-y-0");
    }, 100);
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOutsideClick({
    ref: hamRef,
    handler: () => setIsMenuOpen(false),
  });

  return (
    <div
      className={`flex flex-row ${header} transform transition duration-1000 justify-between items-center w-full h-[72px] fixed top-0 z-50 py-[10px] text-white bg-neutral-900`}
    >
      <div className="flex flex-1 border-b-2 hover:opacity-80 border-neutral-600 items-center md:items-start h-full justify-start px-8 md:px-0 md:justify-center">
        {current !== "home" && (
          <div
            className="h-[40px] aspect-square font-urbanistBold flex items-center justify-center hidden md:block cursor-pointer bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 rounded-full"
            onClick={() => navigate("/")}
          >
            <span className="text-white flex items-center justify-center w-full h-full text-xl">
              AK
            </span>
          </div>
        )}
        <FontAwesomeIcon
          icon={faBars}
          className="h-[28px] md:hidden cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div className="md:flex hidden flex-3 md:block md:flex-row md:justify-between h-full cursor-pointer font-urbanistNormal items-end">
        <div
          className={`flex flex-1 ${
            current == "about" ? "" : "border-b-2 border-neutral-600"
          } items-center justify-center hover:opacity-80 `}
          onClick={() => navigate("/about")}
        >
          <div className="flex flex-col w-full items-center">
            <span className="py-4">About</span>
            {current == "about" && (
              <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
            )}
          </div>
        </div>
        <div
          className={`flex flex-1 ${
            current == "exp" ? "" : "border-b-2 border-neutral-600"
          } items-center justify-center hover:opacity-80 `}
          onClick={() => navigate("/exp")}
        >
          <div className="flex flex-col w-full items-center">
            <span className="py-4">Experience</span>
            {current == "exp" && (
              <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
            )}
          </div>
        </div>
        <div
          className={`flex flex-1 ${
            current == "works" || current == "amigo" || current == "nft"
              ? ""
              : "border-b-2 border-neutral-600"
          } items-center justify-center hover:opacity-80 `}
          onClick={() => navigate("/works")}
        >
          <div className="flex flex-col w-full items-center">
            <span className="py-4">Projects</span>
            {(current == "works" || current == "amigo" || current == "nft") && (
              <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-1 border-b-2 border-neutral-600 items-start h-full justify-end px-8 md:px-0 md:justify-center">
        {current !== "contact" && (
          <Button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white font-urbanistNormal hover:from-white hover:to-white hover:text-black"
          >
            Let's Talk
          </Button>
        )}
      </div>

      {isMenuOpen && (
        <div
          ref={hamRef}
          className={`absolute top-[72px] ${header} transform transition duration-1000 left-0 w-full border-b-4 border-neutral-600 rounded-md bg-neutral-900 text-white flex flex-col items-center space-y-4 pb-8 md:hidden z-10`}
        >
          <div
            className={`flex flex-1 w-[40%] ${
              current == "home" ? "" : "border-b-2 border-neutral-600"
            } items-center justify-center hover:opacity-80 `}
            onClick={() => navigate("/")}
          >
            <div className="flex flex-col w-full items-center">
              <span className="py-4">Home</span>
              {current == "home" && (
                <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
              )}
            </div>
          </div>
          <div
            className={`flex flex-1 w-[40%] ${
              current == "about" ? "" : "border-b-2 border-neutral-600"
            } items-center justify-center hover:opacity-80 `}
            onClick={() => navigate("/about")}
          >
            <div className="flex flex-col w-full items-center">
              <span className="py-4">About</span>
              {current == "about" && (
                <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
              )}
            </div>
          </div>
          <div
            className={`flex flex-1 w-[40%] ${
              current == "exp" ? "" : "border-b-2 border-neutral-600"
            } items-center justify-center hover:opacity-80 `}
            onClick={() => navigate("/exp")}
          >
            <div className="flex flex-col w-full items-center">
              <span className="py-4">Experience</span>
              {current == "exp" && (
                <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
              )}
            </div>
          </div>
          <div
            className={`flex flex-1 w-[40%] ${
              current == "works" || current == "amigo" || current == "nft"
                ? ""
                : "border-b-2 border-neutral-600"
            } items-center justify-center hover:opacity-80 `}
            onClick={() => navigate("/works")}
          >
            <div className="flex flex-col w-full items-center">
              <span className="py-4">Projects</span>
              {(current == "works" ||
                current == "amigo" ||
                current == "nft") && (
                <div className="h-[2px] w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
