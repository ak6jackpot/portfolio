import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import ListItem from "components/ListItem";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import amigo2 from "../assets/images/amigo2.jpg";
import nft1 from "../assets/images/nft1.png";

export default function WorksPage() {
  const navigate = useNavigate();
  const [amigo, setAmigo] = useState("translate-x-[1600px] opacity-0");
  const [NFT, setNFT] = useState("translate-x-[-1600px] opacity-0");

  useEffect(() => {
    setTimeout(() => {
      setAmigo("translate-x-0 opacity-1");
      setNFT("translate-x-0 opacity-1");
    }, 500);
    window.scrollTo(0, 0);
  }, []);

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
              className={` ${amigo} transform transition duration-1000 flex flex-row bg-neutral-900 md:px-32`}
            >
              <div className="flex flex-1 flex-col p-8 text-left justify-evenly">
                <span className="text-2xl md:text-4xl">Amigo</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="w-full object-contain rounded-2xl"
                    src={amigo2}
                  />
                </div>
                <span className="leading-6 items-start flex flex-col md:hidden">
                  <ListItem
                    label="A one-stop travel app for your trips."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Plan itineraries based on your likes."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Collaborate & share trips with friends."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                </span>
                <span className="leading-6 items-start flex flex-col  hidden md:block">
                  <ListItem
                    label="Amigo is a one-stop travel companion app that takes care of your entire trip."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Key Features - Planning itineraries based on your preferences, nearby suggestions, local translations."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Includes collaborative and offline functionalities to improve networking and ease of use."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
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
                  src={amigo2}
                />
              </div>
            </div>
            <div
              className={` ${NFT} transform transition duration-1000 flex flex-row-reverse bg-neutral-800 md:px-32`}
            >
              <div className="flex flex-1 flex-col p-8 text-left justify-evenly">
                <span className="text-2xl md:text-4xl">NFT Marketplace</span>
                <div className="flex flex-1 md:hidden my-8">
                  <img
                    className="w-full object-contain rounded-2xl"
                    src={nft1}
                  />
                </div>
                <span className="leading-6 items-start flex flex-col md:hidden">
                  <ListItem
                    label="A marketplace website for NFTs."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Explore collections, bid on sale items."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Checkout creators, chat with buyers."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                </span>
                <span className="leading-6 items-start flex flex-col hidden md:block">
                  <ListItem
                    label="It is a marketplace website for buying, selling, and collecting NFTs."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Explore trending collections, place bids and own valuable NFTs."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
                  <ListItem
                    label="Chat with fellow shoppers and creators - checkout their collection."
                    icon={<FontAwesomeIcon icon={faHandPointRight} />}
                    size="small"
                  />
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
                  src={nft1}
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
