import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "components/Footer";
import AnimatedNumber from "components/AnimatedNumber";
import ListItem from "components/ListItem";
import { getImageURL, isFrontend } from "utils";

export default function AboutPage() {
  const [aboutMe, setAboutMe] = useState("scale-0 opacity-0");
  const [LI1, setLI1] = useState("translate-x-[100px] opacity-0");
  const [LI2, setLI2] = useState("translate-x-[100px] opacity-0");
  const [LI3, setLI3] = useState("translate-x-[100px] opacity-0");
  const [LI4, setLI4] = useState("translate-x-[100px] opacity-0");

  const textData = isFrontend()
    ? {
        sm: [
          "BITS Pilani CSE graduate",
          "Mobile and Web Developer",
          "Inherent problem solving skills",
          "Good sense of design systems",
        ],
        md: [
          "Graduated in '23 with a degree in Computer Science from BITS Pilani, Pilani Campus.",
          "Technical proficiency in Mobile and Web Development using React & TSX.",
          "Natural aptitude for solving and analysing case-studies & challenging problems.",
          "Keen understanding of design systems, creating functional & intuitive user interfaces.",
        ],
      }
    : {
        sm: [
          "BITS Pilani CSE graduate",
          "Backend Developer",
          "System Architecture enthusiast",
          "Inherent problem solving skills",
        ],
        md: [
          "Graduated in '23 with a degree in Computer Science from BITS Pilani, Pilani Campus.",
          "Technical proficiency in server-side development using Python, AWS and PostgreSQL.",
          "Keen understanding of designing systems, considering tradeoffs and efficient structure.",
          "Natural interest in exploring algorithms and data structures to overcome challenges.",
        ],
      };

  const counterData = isFrontend()
    ? [
        { num: 10, text: "Apps & Websites Developed", delay: 1000 },
        { num: 8, text: "Frameworks Used", delay: 1000 },
      ]
    : [
        { num: 8, text: "Production Projects", delay: 1000 },
        { num: 30, text: "Database Schemas Optimized", delay: 1000 },
      ];

  const stickyData = isFrontend()
    ? [
        {
          title: "Mobile Development",
          text: ` I specialize in creating intuitive, responsive mobile
                  applications that provide a seamless user experience across
                  iOS and Android platforms. From concept to deployment, I
                  handle the entire development process with a focus on
                  performance, security, and scalability, ensuring apps that are
                  both robust and user-friendly.`,
          image: getImageURL("mobileDev", "jpg"),
        },
        {
          title: "Web Development",
          text: `I specialize in developing dynamic, high-performance websites
                  using latest technologies to deliver a seamless user
                  experience across all devices. My approach emphasizes writing
                  clean, maintainable code and best practices, whether crafting
                  responsive landing pages, complex web applications, or robust
                  services.`,
          image: getImageURL("webDev", "jpg"),
        },
        {
          title: "UI Design",
          text: `I design user interfaces that are not only aesthetically
                  pleasing, but also highly functional and intuitive. By
                  combining creativity with user-centered design principles, I
                  create interfaces that enhance usability, accessibility, and
                  overall user satisfaction, ensuring every interaction feels
                  intuitive and efficient.`,
          image: getImageURL("UI", "jpg"),
        },
        {
          title: "Problem Solving",
          text: `I thrive on tackling complex challenges, using both logical
                  and creative approaches to develop innovative and effective
                  solutions. My problem-solving skills are backed by strong
                  technical expertise, enabling me to address complex issues
                  while aligning solutions with user needs, business goals, and
                  long-term scalability.`,
          image: getImageURL("problemsolving", "jpg"),
        },
      ]
    : [
        {
          title: "Backend Development",
          text: `I develop scalable, secure backend systems that power seamless experiences for mobile applications. From database architecture to API development, I ensure efficient data flow and server performance. My expertise lies in building robust systems that handle high traffic, maintain security, and integrate smoothly with frontend applications.`,
          image: getImageURL("backend"),
        },
        {
          title: "System Design",
          text: `I design user interfaces that are not only aesthetically
                  pleasing, but also highly functional and intuitive. By
                  combining creativity with user-centered design principles, I
                  create interfaces that enhance usability, accessibility, and
                  overall user satisfaction, ensuring every interaction feels
                  intuitive and efficient.`,
          image: getImageURL("system"),
        },
        {
          title: "App & Web Development",
          text: `I specialize in developing dynamic, high-performance websites and mobile apps
                  using latest technologies to deliver a seamless user
                  experience across all devices. My approach emphasizes writing
                  clean, maintainable code and best practices, whether crafting
                  responsive landing pages, complex web applications, or robust
                  services.`,
          image: getImageURL("webDev", "jpg"),
        },
        {
          title: "Problem Solving",
          text: `I thrive on tackling complex challenges, using both logical
                  and creative approaches to develop innovative and effective
                  solutions. My problem-solving skills are backed by strong
                  technical expertise, enabling me to address complex issues
                  while aligning solutions with user needs, business goals, and
                  long-term scalability.`,
          image: getImageURL("problemsolving", "jpg"),
        },
      ];

  useEffect(() => {
    setTimeout(() => setAboutMe("scale-100 opacity-100"), 500);
    setTimeout(() => setLI1("translate-x-0 opacity-100"), 1000);
    setTimeout(() => setLI2("translate-x-0 opacity-100"), 1250);
    setTimeout(() => setLI3("translate-x-0 opacity-100"), 1500);
    setTimeout(() => setLI4("translate-x-0 opacity-100"), 1750);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="Akshat Singh" />
      </Helmet>

      <div className="min-h-screen bg-neutral-900 font-urbanistNormal">
        <Header current="about" />

        {/* About Me Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${aboutMe} transform transition-all duration-1000 ease-out`}
            >
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  {/* Background glow - reduced size */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-blue-600/10 to-amber-500/10 rounded-3xl blur-xl scale-105"></div>

                  {/* Image container - reduced size */}
                  <div className="relative overflow-hidden rounded-3xl shadow-xl max-w-sm mx-auto">
                    <img
                      className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                      src={getImageURL("bits")}
                      alt="BITS Pilani"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text leading-tight">
                  About Me
                </h1>

                {/* Desktop list items */}
                <div className="hidden lg:block space-y-4">
                  {textData?.md?.map((item, index) => (
                    <ListItem
                      key={index}
                      className={`${
                        index == 0
                          ? LI1
                          : index == 1
                          ? LI2
                          : index == 2
                          ? LI3
                          : LI4
                      } transform transition-all duration-1000 ease-out`}
                      label={item}
                    />
                  ))}
                </div>

                {/* Mobile list items */}
                <div className="lg:hidden space-y-4">
                  {textData?.sm?.map((item, index) => (
                    <ListItem
                      key={index}
                      className={`${
                        index == 0
                          ? LI1
                          : index == 1
                          ? LI2
                          : index == 2
                          ? LI3
                          : LI4
                      } transform transition-all duration-1000 ease-out`}
                      label={item}
                    />
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 py-8">
                  {counterData?.map((item, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text">
                        <AnimatedNumber num={item?.num} delay={item?.delay} />+
                      </div>
                      <p className="text-sm sm:text-base text-neutral-300 font-medium">
                        {item?.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <div className="flex flex-col text-center">
          <div className="hidden md:block inline-block">
            <span className="text-4xl md:text-6xl font-urbanistNormal md:p-4 mx-8 md:mx-60 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
              What I bring to the table
            </span>
          </div>

          <span className="text-4xl md:hidden md:text-6xl font-urbanistNormal md:p-4 mx-8 md:mx-60 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
            What I bring to the table
          </span>

          {stickyData?.map((item, index) => {
            return (
              <div
                key={index}
                className="h-screen flex flex-col justify-center sticky top-8 md:top-0"
              >
                <div
                  className={`flex ${
                    index % 2 == 0
                      ? "flex-row bg-neutral-900"
                      : "flex-row-reverse bg-neutral-800"
                  } md:px-32`}
                >
                  <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                    <span className="text-2xl md:text-4xl text-white">
                      {item?.title}
                    </span>
                    <div className="flex flex-1 md:hidden my-8">
                      <img
                        className="h-full w-full object-cover rounded-2xl"
                        src={item?.image}
                      />
                    </div>
                    <span className=" leading-6 text-white">{item?.text}</span>
                  </div>
                  <div className="flex flex-1 p-8 hidden md:block">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item?.image}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
