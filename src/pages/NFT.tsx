import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import ImageCarousel from "components/ImageCarousel";
import ListItem from "components/ListItem";
import React from "react";
import { Helmet } from "react-helmet";
import aws from "../assets/images/aws.png";
import css from "../assets/images/css.png";
import fuse from "../assets/images/fuse.png";
import html from "../assets/images/html.png";
import nft1 from "../assets/images/nft1.png";
import nft2 from "../assets/images/nft2.png";
import nft3 from "../assets/images/nft3.png";
import nft4 from "../assets/images/nft4.png";
import nft5 from "../assets/images/nft5.png";
import nft6 from "../assets/images/nft6.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";

export default function NFT() {
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
                <ImageCarousel images={[nft1, nft2, nft3, nft4, nft5, nft6]} />
              </div>
              <div className="flex flex-row md:px-8 justify-between items-center">
                <span className="text-sm md:text-lg text-neutral-500">
                  Mar 2024 - Jul 2024
                </span>
                <span className="text-2xl md:text-4xl">NFT Marketplace</span>
                <span className="text-sm md:text-lg font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  Web Development
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
                      href="http://nft-marketplace-akshat.s3-website.ap-south-1.amazonaws.com/"
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
                      href="https://github.com/ak6jackpot/nft-marketplace"
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
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 p-6 md:px-32">
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex-2 flex rounded-2xl"
                  src={react}
                />
                <span className="text-black md:text-lg flex-3 flex">
                  React JS
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={css}
                />
                <span className="text-black md:text-lg flex flex-3">CSS</span>
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
                  src={tailwind}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Tailwind
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={fuse}
                />
                <span className="text-black md:text-lg flex flex-3">
                  Fuse JS
                </span>
              </div>
              <div className="bg-white h-12 rounded-md flex items-center justify-evenly p-2 md:p-1 text-white">
                <img
                  className="h-full object-contain flex flex-2 rounded-2xl"
                  src={html}
                />
                <span className="text-black md:text-lg flex flex-3">HTML</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
