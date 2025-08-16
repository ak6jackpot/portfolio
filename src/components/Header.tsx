import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
  const [header, setHeader] = useState("translate-y-[-100px] opacity-0");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Smooth header entrance
    setTimeout(() => {
      setHeader("translate-y-0 opacity-100");
    }, 100);

    // Scroll effect for header
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOutsideClick({
    ref: hamRef,
    handler: () => setIsMenuOpen(false),
  });

  const navItems = [
    { path: "/about", label: "About", current: current === "about" },
    { path: "/exp", label: "Experience", current: current === "exp" },
    {
      path: "/works",
      label: "Projects",
      current: current === "works" || current === "amigo" || current === "nft",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-md shadow-lg"
          : "bg-neutral-900"
      } ${header}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Home Button */}
          <div className="flex items-center">
            {current !== "home" && (
              <button
                onClick={() => navigate("/")}
                className="group relative p-2 rounded-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 hover:from-amber-500 hover:via-blue-600 hover:to-violet-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <span className="text-white font-bold text-lg md:text-xl">
                  AK
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 group ${
                  item.current
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {item.current && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-blue-600/10 to-amber-500/10 rounded-lg border border-violet-500/30"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/5 via-blue-600/5 to-amber-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center">
            {current !== "contact" && (
              <Button
                onClick={() => navigate("/contact")}
                className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white font-medium px-6 py-2 rounded-lg hover:from-amber-500 hover:via-blue-600 hover:to-violet-900 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-blue-600 to-violet-900 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={hamRef}
          className="md:hidden absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-700/50 animate-fadeInDown"
        >
          <div className="px-4 py-6 space-y-2">
            <button
              onClick={() => navigate("/")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                current === "home"
                  ? "bg-gradient-to-r from-violet-900/10 via-blue-600/10 to-amber-500/10 text-white border border-violet-500/30"
                  : "text-neutral-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  item.current
                    ? "bg-gradient-to-r from-violet-900/10 via-blue-600/10 to-amber-500/10 text-white border border-violet-500/30"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
