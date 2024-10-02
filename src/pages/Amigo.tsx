import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import ImageCarousel from "components/ImageCarousel";
import ListItem from "components/ListItem";
import React from "react";
import { Helmet } from "react-helmet";
import amigo1 from "../assets/images/amigo1.jpg";
import amigo2 from "../assets/images/amigo2.jpg";
import amigo3 from "../assets/images/amigo3.jpg";
import amigo4 from "../assets/images/amigo4.jpg";
import amigo5 from "../assets/images/amigo5.jpg";
import amigo6 from "../assets/images/amigo6.jpg";
import aws from "../assets/images/aws.png";
import cloud from "../assets/images/cloud.png";
import node from "../assets/images/node.png";
import openai from "../assets/images/openai.png";
import play from "../assets/images/play.png";
import react from "../assets/images/react.png";
import tripadvisor from "../assets/images/tripadvisor.png";
import xcode from "../assets/images/xcode.png";

export default function Amigo() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header />
        <div className="flex flex-col justify-center mt-8 text-white">
          <div className="flex flex-row bg-neutral-900 md:px-32">
            <div className="flex flex-1 flex-col pt-8 md:text-left text-center justify-evenly">
              <div className="flex items-center justify-center">
                <ImageCarousel
                  images={[amigo1, amigo2, amigo3, amigo4, amigo5, amigo6]}
                />
              </div>
              <div className="flex flex-row md:px-8 justify-between items-center">
                <span className="text-sm md:text-lg text-neutral-500">
                  Jun 2024 onwards
                </span>
                <span className="text-2xl md:text-4xl">Amigo</span>
                <span className="text-sm md:text-lg font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  Mobile App Development
                </span>
              </div>
              <div className="leading-6 items-start flex flex-col my-8 px-4 text-left">
                <div className="flex flex-col md:flex-row">
                  <div className="flex flex-col md:w-[80%] md:pr-8">
                    <span className="text-lg md:text-2xl">Overview</span>
                    <span className="text-md md:text-lg text-neutral-500 my-4">
                      Amigo is a travel app available to download on Google
                      PlayStore. It is a one stop solution to all your travel
                      needs. From discovering locations to planning trips, all
                      based on your personal preferences, Amigo does it all. You
                      can create itineraries, share them with others, track your
                      entire trip - including directions to your next
                      destination, expenses, things to shop etc.
                    </span>
                  </div>

                  <div className="flex flex-row md:flex-col justify-between md:justify-evenly md:w-[20%] mb-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.amigoAK.app&hl=en"
                      target="none"
                      className="w-[50%] md:w-full pr-2 md:pr-0"
                    >
                      <Button
                        onClick={() => {}}
                        className="bg-gradient-to-r w-full from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black"
                      >
                        See it in action!
                      </Button>
                    </a>
                    <a
                      href="https://github.com/ak6jackpot/amigo"
                      target="none"
                      className="w-[50%] md:w-full pl-2 md:pl-0"
                    >
                      <Button
                        onClick={() => {}}
                        className="bg-gradient-to-r w-full from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black"
                      >
                        Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </Button>
                    </a>
                  </div>
                </div>
                <span className="text-lg md:text-2xl text-neutral-400 mb-2">
                  Key Features:
                </span>

                <ListItem
                  variant="description"
                  label="Personalized Itineraries"
                  description={`Amigo allows users to create fully customizable itineraries tailored to their preferences, whether it’s selecting destinations, activities, or travel dates.\nThis flexibility is key to addressing the demand for personalized experiences in travel.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Simplified Travel Planning"
                  description={`The app consolidates all aspects of trip planning—such as selecting destinations, organizing accommodation, and mapping out activities—into one platform,\nreducing the need to juggle multiple apps and sources of information.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Collaborative Features"
                  description={`Users can share itineraries with friends, family, or travel companions, allowing for real-time collaboration.\nThis makes group trip planning easier and reduces communication issues.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Integrated Tools"
                  description={`Amigo offers integrated maps, checklists, and reminders to ensure that travelers have all the necessary tools at their fingertips for a seamless trip.\nThis organization helps eliminate the stress of forgetting important tasks.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Smart Suggestions"
                  description={`By offering local recommendations, weather forecasts, and activity suggestions based on a user’s preferences,\nAmigo helps users find relevant experiences and makes the process of choosing activities less daunting.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Offline Access"
                  description={`The app’s offline mode ensures users can access their itineraries and plans even without internet connectivity, which is essential for international travel and remote destinations.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Expense Tracking and Notifications:"
                  description={`Amigo simplifies budgeting and spending by offering expense tracking tools and notifications for bookings and payments,\ngiving users peace of mind and control over their finances during travel.`}
                  size="small"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-neutral-900 md:px-32">
            <span className="text-xl px-4">Technologies I worked with:</span>
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 p-6 md:px-12">
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
                  src={openai}
                />
                <span className="text-black md:text-lg flex flex-3">
                  OpenAI
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={tripadvisor}
                />
                <span className="text-black md:text-lg flex flex-3">
                  TripAdvisor
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={cloud}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Google Cloud
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
                  src={node}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Node JS
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={play}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Google Play
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
