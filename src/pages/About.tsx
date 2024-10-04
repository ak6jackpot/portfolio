import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Artwork_0 from "../assets/images/Artworks/Artwork_0.jpg";
import Artwork_1 from "../assets/images/Artworks/Artwork_1.jpg";
import Artwork_10 from "../assets/images/Artworks/Artwork_10.jpg";
import Artwork_11 from "../assets/images/Artworks/Artwork_11.jpg";
import Artwork_12 from "../assets/images/Artworks/Artwork_12.jpg";
import Artwork_13 from "../assets/images/Artworks/Artwork_13.jpg";
import Artwork_2 from "../assets/images/Artworks/Artwork_2.jpg";
import Artwork_3 from "../assets/images/Artworks/Artwork_3.jpg";
import Artwork_4 from "../assets/images/Artworks/Artwork_4.jpg";
import Artwork_5 from "../assets/images/Artworks/Artwork_5.jpg";
import Artwork_6 from "../assets/images/Artworks/Artwork_6.jpg";
import Artwork_7 from "../assets/images/Artworks/Artwork_7.jpg";
import Artwork_8 from "../assets/images/Artworks/Artwork_8.jpg";
import Artwork_9 from "../assets/images/Artworks/Artwork_9.jpg";

import badminton from "../assets/images/Sports/badminton.jpeg";
import cricket from "../assets/images/Sports/cricket.jpg";
import formula1 from "../assets/images/Sports/formula1.jpg";
import tabletennis from "../assets/images/Sports/tabletennis.jpg";
import Footer from "components/Footer";

import bits from "../assets/images/bits.png";
import bits_full from "../assets/images/bits_full.jpeg";
import mobileDev from "../assets/images/mobileDev.jpg";
import webDev from "../assets/images/webDev.jpg";
import UI from "../assets/images/UI.jpg";
import problemsolving from "../assets/images/problemsolving.jpg";
import { Button } from "components/Button";
import ListItem from "components/ListItem";
import { useNavigate } from "react-router-dom";

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

  const sports = [badminton, cricket, formula1, tabletennis];

  const navigate = useNavigate();

  const [aboutMe, setAboutMe] = useState("scale-0");

  useEffect(() => {
    setTimeout(() => {
      setAboutMe("scale-100");
    }, 100);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="Akshat Singh" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full h-auto font-urbanistThin text-white gap-[42px] bg-neutral-900">
        <Header current="about" />
        <div
          className={`md:mx-32 ${aboutMe} transform transition duration-1000 mt-24 md:mt-32 m-4 rounded-3xl items-center flex flex-col md:flex-row py-2`}
        >
          <div className="flex-1 hidden md:block align-center justify-center ml-2">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src={bits}
            />
          </div>
          <div className="md:hidden flex-1 overflow-hidden items-center jusify-center flex">
            <img
              className="object-contain w-full h-full rounded-2xl"
              src={bits_full}
            />
          </div>
          <div className="flex flex-col items-start flex-2 md:pl-4 mx-4">
            <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
              About Me
            </span>
            <ListItem label="BITS Pilani CSE graduate" />
            <ListItem label="Technical expertise in Mobile and Web Development" />
            <ListItem label="Inherent problem solving skills" />
            <ListItem label="Good sense of design systems" />
            <div className="flex flex-row py-4 justify-between md:space-x-8">
              <div className="flex flex-col items-start md:items-center">
                <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  9+
                </span>
                <span className=" font-urbanistNormal my-2 text-sm pr-2 md:text-lg">
                  Apps & Websites Developed
                </span>
              </div>
              <div className="flex flex-col items-start md:items-center">
                <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  950+
                </span>
                <span className=" font-urbanistNormal my-2 text-sm pr-2 md:text-lg">
                  Github Contributions
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <div className="hidden md:block inline-block">
            <span className="text-4xl md:text-6xl font-urbanistNormal md:p-4 mx-8 md:mx-60 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
              What I bring to the table
            </span>
          </div>

          <span className="text-4xl md:hidden md:text-6xl font-urbanistNormal md:p-4 mx-8 md:mx-60 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
            What I bring to the table
          </span>

          <div className="h-screen flex flex-col justify-center sticky top-8 md:top-0">
            <div className="flex flex-row bg-neutral-900 md:px-32">
              <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                <span className="text-2xl md:text-4xl ">
                  Mobile Development
                </span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="h-full w-full object-cover rounded-2xl"
                    src={mobileDev}
                  />
                </div>
                <span className=" leading-6">
                  I specialize in creating intuitive, responsive mobile
                  applications that provide a seamless user experience across
                  iOS and Android platforms. From concept to deployment, I
                  handle the entire development process with a focus on
                  performance, security, and scalability, ensuring apps that are
                  both robust and user-friendly.
                </span>
              </div>
              <div className="flex flex-1 p-8 hidden md:block">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src={mobileDev}
                />
              </div>
            </div>
          </div>
          <div className="h-screen flex flex-col justify-center sticky top-8 md:top-0">
            <div className="flex flex-row-reverse bg-neutral-800 md:px-32">
              <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                <span className="text-2xl md:text-4xl ">Web Development</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="h-full w-full object-cover rounded-2xl"
                    src={webDev}
                  />
                </div>
                <span className=" leading-6">
                  I specialize in developing dynamic, high-performance websites
                  using latest technologies to deliver a seamless user
                  experience across all devices. My approach emphasizes writing
                  clean, maintainable code and best practices, whether crafting
                  responsive landing pages, complex web applications, or robust
                  services.
                </span>
              </div>
              <div className="flex flex-1 p-8 hidden md:block">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src={webDev}
                />
              </div>
            </div>
          </div>
          <div className="h-screen flex flex-col justify-center sticky top-8 md:top-0">
            <div className="flex flex-row bg-neutral-900 md:px-32">
              <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                <span className="text-2xl md:text-4xl ">UI Design</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="h-full w-full object-cover rounded-2xl"
                    src={UI}
                  />
                </div>
                <span className=" leading-6">
                  I design user interfaces that are not only aesthetically
                  pleasing, but also highly functional and intuitive. By
                  combining creativity with user-centered design principles, I
                  create interfaces that enhance usability, accessibility, and
                  overall user satisfaction, ensuring every interaction feels
                  intuitive and efficient.
                </span>
              </div>
              <div className="flex flex-1 p-8 hidden md:block">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src={UI}
                />
              </div>
            </div>
          </div>
          <div className="h-screen flex flex-col justify-center sticky top-8 md:top-0">
            <div className="flex flex-row-reverse bg-neutral-800 md:px-32">
              <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                <span className="text-2xl md:text-4xl ">Problem Solving</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="h-full w-full object-cover rounded-2xl"
                    src={problemsolving}
                  />
                </div>
                <span className=" leading-6">
                  I thrive on tackling complex challenges, using both logical
                  and creative approaches to develop innovative and effective
                  solutions. My problem-solving skills are backed by strong
                  technical expertise, enabling me to address complex issues
                  while aligning solutions with user needs, business goals, and
                  long-term scalability.
                </span>
              </div>
              <div className="flex flex-1 p-8 hidden md:block">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src={problemsolving}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <WavyBorder color={"#F59E0B"} />

        <div className="flex flex-col bg-amber-500 w-full -mt-20 pl-16">
          <span className="text-white text-lg">In my free time I enjoy,</span>
          <span className="text-white text-2xl">Artworks →</span>
          <div className="h-[370px] flex flex-row overflow-x-scroll overflow-y-hidden pr-8 my-4">
            {artworks.map((item) => (
              <div className="h-[300px] aspect-square pr-4">
                <img
                  className="border-4 border-black object-contain"
                  src={item}
                />
              </div>
            ))}
          </div>
          <span className="text-white text-2xl">
            Playing and watching sports →
          </span>
          <div className="h-[250px] flex flex-row overflow-x-scroll overflow-y-hidden pr-8 my-4">
            {sports.map((item) => (
              <div className="w-[500px] aspect-video pr-4">
                <img className="border-4 border-black" src={item} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
