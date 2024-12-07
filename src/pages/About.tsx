import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "components/Footer";

import ListItem from "components/ListItem";
import UI from "../assets/images/UI.jpg";
import bits from "../assets/images/bits.png";
import bits_full from "../assets/images/bits_full.jpeg";
import mobileDev from "../assets/images/mobileDev.jpg";
import problemsolving from "../assets/images/problemsolving.jpg";
import webDev from "../assets/images/webDev.jpg";
import AnimatedNumber from "components/AnimatedNumber";

export default function AboutPage() {
  const [aboutMe, setAboutMe] = useState("scale-0");
  const [LI1, setLI1] = useState("translate-x-[1600px] opacity-0");
  const [LI2, setLI2] = useState("translate-x-[1600px] opacity-0");
  const [LI3, setLI3] = useState("translate-x-[1600px] opacity-0");
  const [LI4, setLI4] = useState("translate-x-[1600px] opacity-0");

  useEffect(() => {
    setTimeout(() => {
      setAboutMe("scale-100");
    }, 500);

    setTimeout(() => {
      setLI1("translate-x-0 opacity-1");
    }, 1000);

    setTimeout(() => {
      setLI2("translate-x-0 opacity-1");
    }, 1250);

    setTimeout(() => {
      setLI3("translate-x-0 opacity-1");
    }, 1500);

    setTimeout(() => {
      setLI4("translate-x-0 opacity-1");
    }, 1750);
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
            <div className="hidden md:block">
              <ListItem
                className={`${LI1} transform transition duration-1000`}
                label="Graduated in '23 with a degree in Computer Science from BITS Pilani, Pilani Campus."
              />
              <ListItem
                className={`${LI2} transform transition duration-1000`}
                label="Technical proficiency in Mobile and Web Development using React & TSX."
              />
              <ListItem
                className={`${LI3} transform transition duration-1000`}
                label="Natural aptitude for analysing and solving seemingly-tricky challenges."
              />
              <ListItem
                className={`${LI4} transform transition duration-1000`}
                label="Keen understanding of design systems, creating functional & intuitive user interfaces."
              />
            </div>
            <div className="md:hidden">
              <ListItem
                className={`${LI1} transform transition duration-1000`}
                label="BITS Pilani CSE graduate"
              />
              <ListItem
                className={`${LI2} transform transition duration-1000`}
                label="Mobile and Web Developer"
              />
              <ListItem
                className={`${LI3} transform transition duration-1000`}
                label="Inherent problem solving skills"
              />
              <ListItem
                className={`${LI4} transform transition duration-1000`}
                label="Good sense of design systems"
              />
            </div>
            <div className="flex flex-row py-4 md:py-12 justify-between md:space-x-20">
              <div className="flex flex-col items-start md:items-center">
                <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  <AnimatedNumber num={9} delay={3000} />+
                </span>
                <span className=" font-urbanistNormal my-2 text-sm pr-2 md:text-lg">
                  Apps & Websites Developed
                </span>
              </div>
              <div className="flex flex-col items-start md:items-center">
                <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  <AnimatedNumber num={950} delay={2000} />+
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
      </div>
      <Footer />
    </>
  );
}
