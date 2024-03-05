import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../components";
import Footer from "../components/Footer";
import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import Ticker from "react-ticker";

export default function AboutPage() {
  const artworks = [
    "images/Artworks/Artwork_0.jpg",
    "images/Artworks/Artwork_1.jpg",
    "images/Artworks/Artwork_2.jpg",
    "images/Artworks/Artwork_3.jpg",
    "images/Artworks/Artwork_4.jpg",
    "images/Artworks/Artwork_5.jpg",
    "images/Artworks/Artwork_6.jpg",
    "images/Artworks/Artwork_7.jpg",
    "images/Artworks/Artwork_8.jpg",
    "images/Artworks/Artwork_9.jpg",
    "images/Artworks/Artwork_10.jpg",
    "images/Artworks/Artwork_11.jpg",
    "images/Artworks/Artwork_12.jpg",
    "images/Artworks/Artwork_13.jpg",
  ];
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-plusJakartaSans gap-[70px] bg-black">
        <Header current="about" />
        <div className="w-[50%] aspect-video border-2 border-white">
          <div className="flex flex-col items-start flex-1">
            <span className="text-white">Hi I am</span>
            <span className="text-white">Akshat Singh</span>
            <span className="text-white">
              As a BITS Pilani graduate with technical expertise in React Native
              and a hustling mindset, I am a skilled and collaborative front-end
              developer.
            </span>
          </div>
          <div className="items-start flex-1">
            <span className="text-white">social media icons</span>
            <span className="text-white">lets chat button</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <span className="text-white">education</span>
          </div>
          <div>
            <span className="text-white">experience</span>
          </div>
        </div>
        <WavyBorder color={"#ffb039"} />

        <div className="flex flex-col bg-orange w-full -mt-20">
          <span className="text-white">In my free time I enjoy,</span>
          <span className="text-white">Artworks</span>
          <div className="h-[300px] w-full relative flex flex-row">
            <Ticker speed={4}>
              {({ index }) => (
                <img className="w-[300px] ml-4" src={artworks[index]} alt="" />
              )}
            </Ticker>
            <Ticker speed={4}>
              {({ index }) => (
                <img
                  className="w-[300px] ml-4"
                  src={`images/Artworks/Artwork_${index}.jpg`}
                  alt=""
                />
              )}
            </Ticker>
          </div>
          <span className="text-white">Playing and watching sports</span>
          <div className="h-[300px] w-full relative flex flex-row">
            <Ticker speed={4} offset={1}>
              {({ index }) => (
                <img
                  className="w-[300px] ml-4"
                  src={"images/Artworks/Artwork_2.jpg"}
                  alt=""
                />
              )}
            </Ticker>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
