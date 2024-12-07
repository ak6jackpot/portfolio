import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import superpe from "../assets/images/superpe.jpg";
import react from "../assets/images/react.png";
import xcode from "../assets/images/xcode.png";
import aws from "../assets/images/aws.png";
import amplitude from "../assets/images/amplitude.png";
import sentry from "../assets/images/sentry.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import ListItem from "components/ListItem";

export default function ExperiencePage() {
  const [title, setTitle] = useState("translate-y-[-800px] opacity-0");
  const [imageMD, setImageMD] = useState("translate-x-[1600px] opacity-0");
  const [imageSM, setImageSM] = useState("translate-x-[-1600px] opacity-0");
  const [tech, setTech] = useState("translate-y-[800px]");
  const [LI1, setLI1] = useState("translate-x-[1600px] opacity-0");
  const [LI2, setLI2] = useState("translate-x-[1600px] opacity-0");
  const [LI3, setLI3] = useState("translate-x-[1600px] opacity-0");
  const [LI4, setLI4] = useState("translate-x-[1600px] opacity-0");

  useEffect(() => {
    setTimeout(() => {
      setTitle("translate-y-0 opacity-1");
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
      setImageMD("translate-x-0 opacity-1");
      setImageSM("translate-x-0 opacity-1");
      setLI4("translate-x-0 opacity-1");
    }, 1750);

    setTimeout(() => {
      setTech("translate-y-0");
    }, 2000);
    window.scrollTo(0, 0);
  }, []);

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
                className={` ${title} transform transition duration-1000 flex flex-row justify-between items-end md:mb-4`}
              >
                <div className="flex flex-col">
                  <span className="text-2xl md:text-4xl ">SuperPe</span>
                  <span className="text-md md:text-xl text-neutral-400">
                    Software Developer
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-neutral-400">
                    2022 onwards
                  </span>
                  <span className="text-xs md:text-sm text-neutral-400">
                    2 yrs 3 months
                  </span>
                </div>
              </div>
              <div
                className={` ${imageSM} transform transition duration-1000 flex flex-1 md:hidden my-8`}
              >
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={superpe}
                />
              </div>
              <ListItem
                className={`${LI1} transform transition duration-1000`}
                label="Built the SuperPe application from scratch, which has currently 1M+ downloads on Google PlayStore."
                icon={<FontAwesomeIcon icon={faHandPointRight} />}
                size="small"
              />
              <ListItem
                className={`${LI2} transform transition duration-1000`}
                label="Integrated multiple payment gateway SDKs like Juspay, Razorpay, Easebuzz etc. for a robust payment experience."
                icon={<FontAwesomeIcon icon={faHandPointRight} />}
                size="small"
              />
              <ListItem
                className={`${LI3} transform transition duration-1000`}
                label="Integrated tools like Amplitude, Google Analytics, FbSDK, OneSignal and Sentry for effective monitoring, marketing, and error tracking."
                icon={<FontAwesomeIcon icon={faHandPointRight} />}
                size="small"
              />
              <ListItem
                className={`${LI4} transform transition duration-1000`}
                label="Setup pipelines to deploy builds to both - Google PlayConsole and AppStore Connect."
                icon={<FontAwesomeIcon icon={faHandPointRight} />}
                size="small"
              />
            </div>
            <div
              className={` ${imageMD} transform transition duration-1000 flex flex-1 p-8 hidden md:block`}
            >
              <img
                className="h-full w-full object-contain rounded-lg"
                src={superpe}
              />
            </div>
          </div>

          <div
            className={` ${tech} transform transition duration-1000 flex flex-col bg-neutral-900 md:px-32`}
          >
            <span className="text-xl px-8">Technologies I worked with:</span>
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 p-6 md:px-32">
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex-2 flex rounded-2xl"
                  src={react}
                />
                <span className="text-black md:text-lg flex-3 flex">
                  React Native
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={xcode}
                />
                <span className="text-black md:text-lg flex flex-3">xCode</span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={amplitude}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Amplitude
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={sentry}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Sentry
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={aws}
                />
                <span className="text-black md:text-lg flex flex-3">AWS</span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={react}
                />
                <span className="text-black md:text-lg flex flex-3">
                  React JS
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
