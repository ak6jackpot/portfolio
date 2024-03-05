import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../components";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-plusJakartaSans gap-[70px] bg-black">
        <Header />
        <div className="w-[80%] aspect-video flex flex-row border-2 border-white">
          <div className="flex flex-col items-start flex-1">
            <span className="text-white">
              Maximize your business with a variety of services and services
              from us
            </span>
          </div>
          <div className="flex flex-row items-start flex-1">
            <Img
              src="images/ProfilePic.png"
              alt="image_one"
              className="w-1/3 rounded-3xl"
            />
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
