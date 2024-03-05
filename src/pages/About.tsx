import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../components";
import Footer from "../components/Footer";
import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import Ticker from "react-ticker";
import Artwork_0 from "../../public/images/Artworks/Artwork_0.jpg";
import Artwork_1 from "../../public/images/Artworks/Artwork_1.jpg";
import Artwork_2 from "../../public/images/Artworks/Artwork_2.jpg";
import Artwork_3 from "../../public/images/Artworks/Artwork_3.jpg";
import Artwork_4 from "../../public/images/Artworks/Artwork_4.jpg";
import Artwork_5 from "../../public/images/Artworks/Artwork_5.jpg";
import Artwork_6 from "../../public/images/Artworks/Artwork_6.jpg";
import Artwork_7 from "../../public/images/Artworks/Artwork_7.jpg";
import Artwork_8 from "../../public/images/Artworks/Artwork_8.jpg";
import Artwork_9 from "../../public/images/Artworks/Artwork_9.jpg";
import Artwork_10 from "../../public/images/Artworks/Artwork_10.jpg";
import Artwork_11 from "../../public/images/Artworks/Artwork_11.jpg";
import Artwork_12 from "../../public/images/Artworks/Artwork_12.jpg";
import Artwork_13 from "../../public/images/Artworks/Artwork_13.jpg";

export default function AboutPage() {
  const artworks = [
    Artwork_0,
    Artwork_1,
    Artwork_2,
    Artwork_3,
    Artwork_4,
    Artwork_5,
    Artwork_6,
    Artwork_7,
    Artwork_8,
    Artwork_9,
    Artwork_10,
    Artwork_11,
    Artwork_12,
    Artwork_13,
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
          <div className="h-[300px] w-full relative">
            <span className="text-white">art carousel</span>
          </div>
          <span className="text-white">Playing and watching sports</span>
          <div className="h-[300px] w-full relative">
            <span className="text-white">sports carousel</span>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
