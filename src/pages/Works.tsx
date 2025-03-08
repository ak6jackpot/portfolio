import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import ListItem from "components/ListItem";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { getImageURL } from "utils";

export default function WorksPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textData = {
    amigo: {
      sm: [
        "An AI-based travel app for your trips",
        "Plan itineraries based on your likes",
        "Collaborate & share trips with friends",
      ],
      md: [
        "Amigo is an AI-based travel planning application that provides you with your dream vacation",
        "Planning itineraries based on your preferences, nearby suggestions, reviews & local translations",
        "Includes collaborative and offline functionalities to improve networking and ease of use",
      ],
    },
    nft: {
      sm: [
        "A marketplace website for NFTs",
        "Explore collections, bid on sale items",
        "Checkout creators, chat with buyers",
      ],
      md: [
        "It is a marketplace website for buying, selling, and collecting NFTs",
        "Explore trending collections, place bids and own valuable NFTs",
        "Chat with fellow shoppers and creators - checkout their collection",
      ],
    },
  };
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="Akshat Singh" />
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
            <div
              className={`transform transition duration-1000 flex flex-row bg-neutral-900 md:px-32`}
            >
              <div className="flex flex-1 flex-col p-8 text-left justify-evenly">
                <span className="text-2xl md:text-4xl">Amigo</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="w-full object-contain rounded-2xl"
                    src={getImageURL("amigo2", "jpg")}
                  />
                </div>
                <span className="leading-6 items-start flex flex-col md:hidden">
                  {textData.amigo.sm.map((item) => {
                    return (
                      <ListItem
                        label={item}
                        icon={<FontAwesomeIcon icon={faHandPointRight} />}
                        size="small"
                      />
                    );
                  })}
                </span>
                <span className="leading-6 items-start flex flex-col  hidden md:block">
                  {textData.amigo.md.map((item) => {
                    return (
                      <ListItem
                        label={item}
                        icon={<FontAwesomeIcon icon={faHandPointRight} />}
                        size="small"
                      />
                    );
                  })}
                </span>
                <Button
                  onClick={() => {
                    navigate("/amigo");
                  }}
                  className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 font-urbanistNormal hover:from-white hover:to-white hover:text-black mt-8"
                >
                  View Project
                </Button>
              </div>
              <div className="flex p-8 gap-4 flex-row hidden md:flex">
                <img
                  className="object-contain rounded-2xl w-[200px]"
                  src={getImageURL("amigo2", "jpg")}
                />
              </div>
            </div>
            <div
              className={`transform transition duration-1000 flex flex-row-reverse bg-neutral-800 md:px-32`}
            >
              <div className="flex flex-1 flex-col p-8 text-left justify-evenly">
                <span className="text-2xl md:text-4xl">NFT Marketplace</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="w-full object-contain rounded-2xl"
                    src={getImageURL("nft1")}
                  />
                </div>
                <span className="leading-6 items-start flex flex-col md:hidden">
                  {textData.nft.sm.map((item) => {
                    return (
                      <ListItem
                        label={item}
                        icon={<FontAwesomeIcon icon={faHandPointRight} />}
                        size="small"
                      />
                    );
                  })}
                </span>
                <span className="leading-6 items-start flex flex-col hidden md:block">
                  {textData.nft.md.map((item) => {
                    return (
                      <ListItem
                        label={item}
                        icon={<FontAwesomeIcon icon={faHandPointRight} />}
                        size="small"
                      />
                    );
                  })}
                </span>
                <Button
                  onClick={() => {
                    navigate("/nft");
                  }}
                  className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 font-urbanistNormal hover:from-white hover:to-white hover:text-black mt-8"
                >
                  View Project
                </Button>
              </div>
              <div className="flex p-8 gap-4 flex-row hidden md:flex">
                <img
                  className="object-cover rounded-2xl w-[500px]"
                  src={getImageURL("nft1")}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
