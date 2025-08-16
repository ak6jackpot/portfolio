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
    name: "LinkedIn",
  },
  {
    image: getImageURL("facebook"),
    link: "https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d",
    name: "Facebook",
  },
  {
    image: getImageURL("instagram"),
    link: "https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr",
    name: "Instagram",
  },
  {
    image: getImageURL("github"),
    link: "https://github.com/ak6jackpot",
    name: "GitHub",
  },
  {
    image: getImageURL("x"),
    link: "https://x.com/akshats91819699?s=21&t=wJe_d0aRdoP17N-ziMxwoQ",
    name: "Twitter",
  },
];

export default function Footer({ ...props }: Props) {
  return (
    <footer className="w-full text-white font-urbanistNormal">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500"></div>

      {/* Main footer content */}
      <div className="bg-neutral-900 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Social links */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-lg font-medium text-neutral-300">
              Connect with me
            </h3>

            <div className="flex items-center justify-center space-x-4">
              {footerData?.map((item, index) => (
                <a
                  key={item.name}
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={item.name}
                >
                  <div className="relative p-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20">
                    <img
                      src={item?.image}
                      alt={item.name}
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Hover glow effect - further reduced */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-neutral-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
            <p className="text-sm text-neutral-500">
              © 2024 Akshat Singh. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
