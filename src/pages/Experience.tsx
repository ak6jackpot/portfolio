import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "components/Footer";
import Header from "components/Header";
import ListItem from "components/ListItem";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { getImageURL, isFrontend } from "utils";

export default function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const points = isFrontend()
    ? [
        "Developed the SuperPe & Spaid apps from currently having 1.5M+ and 700k+ downloads on PlayStore resp",
        "Enabled live app updates by using backend-generated app bundles, reducing deployment time by 95%",
        "Developed a remote repository for reusable components and functions, reducing duplicacy and bugs",
        "Integrated an in-app call scheduler, lowering fraud by 40%, with screen monitoring and live notifications.",
      ]
    : [
        "Created payment microservices from scratch, handling average transaction count of 12,000 per day.",
        "Developed & set up a cron-based anomaly detection system that identified & reduced outages by 70%.",
        "Enabled live updates for mobile app by developing a ‘Codepush’ system, also reducing bugs by 40%",
        "Reduced fraud chargeback cases to 0.01% by developing a credit-card risk engine for fraud prevention",
      ];

  const skills = isFrontend()
    ? [
        { text: "React Native", image: getImageURL("react") },
        { text: "xCode", image: getImageURL("xcode") },
        { text: "TypeScript", image: getImageURL("typescript") },
        { text: "Firebase", image: getImageURL("firebase") },
        { text: "AWS", image: getImageURL("aws") },
        { text: "React JS", image: getImageURL("react") },
      ]
    : [
        { text: "Python", image: getImageURL("python") },
        { text: "FastAPI", image: getImageURL("fastapi") },
        { text: "AWS", image: getImageURL("aws") },
        { text: "PostgreSQL", image: getImageURL("postgres") },
        { text: "Redis", image: getImageURL("redis") },
        { text: "Kafka", image: getImageURL("kafka") },
      ];

  function monthDiff() {
    const dateFrom = new Date("Jun 26, 23 00:20:18");
    const dateTo = new Date(Date.now());
    const total_months =
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear());
    const years = Math.floor(total_months / 12);
    const months = total_months % 12;

    const yearString = years > 0 ? `${years} years ` : "";
    const monthString = months > 0 ? `${months} months` : "";
    return yearString + monthString;
  }

  return (
    <>
      <Helmet>
        <title>Experience</title>
        <meta name="Akshat Singh" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header current="exp" />
        <div className="flex mt-24 flex-col text-white text-center">
          <div className="inline-block">
            <span className="text-4xl md:text-6xl md:p-4 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
              Work Experience
            </span>
          </div>

          <div className="flex flex-row bg-neutral-900 md:px-32">
            <div className="flex flex-1 flex-col p-8 justify-evenly text-left">
              <div
                className={`  transform transition duration-1000 flex flex-row justify-between items-end md:mb-4`}
              >
                <div className="flex flex-col">
                  <span className="text-2xl md:text-4xl ">SuperPe</span>
                  <span className="text-md md:text-xl text-neutral-400">
                    Software Developer
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-neutral-400">
                    Jun 2023 onwards
                  </span>
                  <span className="text-xs md:text-sm text-neutral-400">
                    {monthDiff()}
                  </span>
                </div>
              </div>
              <div
                className={`transform transition duration-1000 flex flex-1 md:hidden my-8`}
              >
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={getImageURL("superpe", "jpg")}
                />
              </div>
              {points?.map((item) => {
                return (
                  <ListItem
                    className={`transform transition duration-1000`}
                    label={item}
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                );
              })}
            </div>
            <div
              className={`transform transition duration-1000 flex flex-1 p-8 hidden md:block`}
            >
              <img
                className="h-full w-full object-contain rounded-lg"
                src={getImageURL("superpe", "jpg")}
              />
            </div>
          </div>

          <div
            className={`transform transition duration-1000 flex flex-col bg-neutral-900 md:px-32`}
          >
            <span className="text-xl px-8">Technologies I worked with:</span>
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 p-6 md:px-32">
              {skills.map((item) => {
                return (
                  <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                    <img
                      className="h-full object-contain flex-2 flex rounded-2xl"
                      src={item.image}
                    />
                    <span className="text-black md:text-lg flex-3 flex">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
