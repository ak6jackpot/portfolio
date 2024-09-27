import Header from "components/Header";
import WavyBorder from "components/WavyBorder";
import React from "react";
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
import mobileDev from "../assets/images/mobileDev.jpg";
import webDev from "../assets/images/webDev.jpg";
import UI from "../assets/images/UI.jpg";
import problemsolving from "../assets/images/problemsolving.jpg";
import { Button } from "components/Button";

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
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full h-auto font-urbanistThin text-white gap-[70px] bg-black">
        <Header current="about" />
        <div className="w-[70%] aspect-video border-2 border-white rounded-3xl flex flex-row p-2">
          <div className="flex-1 align-center justify-center ">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src={bits}
            />
          </div>
          <div className="flex flex-col items-start flex-2 pl-4">
            <span className="text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
              About Me
            </span>
            <span className=" font-urbanistNormal">Akshat Singh</span>
            <span className=" font-urbanistNormal">
              - BITS Pilani CSE graduate - Technical expertise in Mobile and App
              Development - Inherent problem solving skills - Good sense of
              design systems
              {/* bullet point component here*/}
            </span>
            <div className="flex flex-row p-4">
              <div className="flex flex-row space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                    3+
                  </span>
                  <span className=" font-urbanistNormal">
                    Applications Developed
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                    20+
                  </span>
                  <span className=" font-urbanistNormal">XYZ done</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                    1500+
                  </span>
                  <span className=" font-urbanistNormal">Github Commits</span>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-black to-teal-600  font-urbanistNormal hover:from-white hover:to-white hover:text-black">
              Let's Talk
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-[70%]">
          <span className="text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
            What I bring to the table
          </span>

          <div className="flex flex-row">
            <div className="flex flex-1 flex-col p-8">
              <span className="text-4xl">Mobile Development</span>
              <span className="my-8 leading-6">
                I specialize in creating intuitive, responsive mobile
                applications that provide a seamless user experience across iOS
                and Android platforms. From concept to deployment, I handle the
                entire development process with a focus on performance,
                security, and scalability, ensuring apps that are both robust
                and user-friendly.
              </span>
              <Button className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black">
                View Project
              </Button>
            </div>
            <div className="flex flex-1 p-8">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={mobileDev}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex flex-1 flex-col p-8">
              <span className="text-4xl">Web Development</span>
              <span className="my-8 leading-6">
                I develop dynamic, high-performance websites using the latest
                technologies, ensuring a smooth user experience across all
                devices. My work focuses on clean, maintainable code and best
                practices, whether building responsive landing pages, complex
                web applications, or backend services.
              </span>
              <Button className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black">
                View Project
              </Button>
            </div>
            <div className="flex flex-1 p-8">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={webDev}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col p-8">
              <span className="text-4xl">UI Design</span>
              <span className="my-8 leading-6">
                I design user interfaces that are both aesthetically pleasing
                and highly functional. My approach combines creativity with
                user-centered design principles, ensuring interfaces that not
                only look great but enhance usability and accessibility.
              </span>
              <Button className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black">
                View Project
              </Button>
            </div>
            <div className="flex flex-1 p-8">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={UI}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex flex-1 flex-col p-8">
              <span className="text-4xl">Problem Solving</span>
              <span className="my-8 leading-6">
                I thrive on tackling complex challenges, using logical and
                creative approaches to develop effective solutions. My
                problem-solving skills are backed by strong technical expertise
                and a deep understanding of how to align solutions with user
                needs and business goals.
              </span>
              <Button className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black">
                View Project
              </Button>
            </div>
            <div className="flex flex-1 p-8">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={problemsolving}
              />
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
