import Header from "components/Header";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import amigo2 from "../assets/images/amigo2.jpg";
import amigo5 from "../assets/images/amigo5.jpg";
import amigo6 from "../assets/images/amigo6.jpg";
import nft2 from "../assets/images/nft2.png";
import nft5 from "../assets/images/nft5.png";
import nft1 from "../assets/images/nft1.png";
import Footer from "components/Footer";
import { Button } from "components/Button";
import ListItem from "components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CircularCarousel from "components/CircularCarousel";

export default function WorksPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header current="works" />
        <div className="flex flex-col text-center text-white mt-24">
          <div className="inline-block">
            <span className="text-4xl md:text-6xl md:p-4 mx-8 md:mx-60 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
              Projects
            </span>
          </div>

          <div className="flex flex-col justify-center md:mt-8">
            <div className="flex flex-row bg-neutral-900 md:px-32">
              <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                <span className="text-2xl md:text-4xl">Amigo</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="w-full object-contain rounded-2xl"
                    src={amigo2}
                  />
                </div>
                <span className="leading-6 items-start flex flex-col">
                  <ListItem
                    label="A travel companion app that takes care of your entire trip"
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Planning itineraries based on your preferences, nearby suggestions, local translations"
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Collaborative and offline functionalities for ease of use"
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                </span>
                <Button
                  onClick={() => {
                    navigate("/amigo");
                  }}
                  className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black mt-8"
                >
                  View Project
                </Button>
              </div>
              <div className="flex p-8 gap-4 flex-row hidden md:flex">
                <CircularCarousel images={[amigo5, amigo2, amigo6]} />
              </div>
            </div>
            <div className="flex flex-row-reverse bg-neutral-800 md:px-32">
              <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
                <span className="text-2xl md:text-4xl">NFT Marketplace</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="w-full object-contain rounded-2xl"
                    src={nft1}
                  />
                </div>
                <span className="leading-6 items-start flex flex-col">
                  <ListItem
                    label="A marketplace website for buying and selling NFTs"
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Explore trending collections, place bids and own valuable NFTs"
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Chat with fellow shoppers, checkout their collection"
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                </span>
                <Button
                  onClick={() => {
                    navigate("/nft");
                  }}
                  className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black mt-8"
                >
                  View Project
                </Button>
              </div>
              <div className="flex p-8 gap-4 flex-row hidden md:flex">
                <CircularCarousel images={[nft5, nft1, nft2]} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
