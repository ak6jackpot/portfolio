import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import ImageCarousel from "components/ImageCarousel";
import ListItem from "components/ListItem";
import React, { useEffect, useState } from "react";
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
  const [type, setType] = useState("translate-x-[-1600px] opacity-0");
  const [date, setDate] = useState("translate-x-[1600px] opacity-0");
  const [overview, setOverview] = useState("translate-y-[1600px] opacity-0");

  useEffect(() => {
    setTimeout(() => {
      setType("translate-x-0 opacity-1");
      setDate("translate-x-0 opacity-1");
    }, 500);

    setTimeout(() => {
      setOverview("translate-y-0 opacity-1");
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>NFT-Marketplace</title>
        <meta name="Akshat Singh" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header current="nft" />
        <div className="flex flex-col justify-center mt-8 text-white">
          <div className="flex flex-row bg-neutral-900 md:px-32">
            <div className="flex flex-1 flex-col pt-8 md:text-left text-center justify-evenly">
              <div className="flex items-center justify-center h-[150px] md:h-[300px]">
                <ImageCarousel
                  images={[nft1, nft2, nft3, nft4, nft5, nft6]}
                  orientaion="landscape"
                />
              </div>
              <div className="flex flex-row md:px-8 justify-between items-center">
                <span
                  className={` ${type} transform transition duration-1000 text-sm md:text-lg font-extrabold flex flex-1 bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal`}
                >
                  Web Development
                </span>
                <span className="text-lg md:text-4xl flex-2 md:flex-5 justify-center flex">
                  NFT Marketplace
                </span>
                <span
                  className={` ${date} transform transition duration-1000 text-sm md:text-lg flex flex-1 justify-end text-neutral-500`}
                >
                  Mar 2024 - Jul 2024
                </span>
              </div>
              <div
                className={` ${overview} transform transition duration-1000 leading-6 items-start flex flex-col my-8 px-4 text-left`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex flex-col md:w-[80%] md:pr-8">
                    <span className="text-lg md:text-2xl">Overview</span>
                    <span className="text-md md:text-lg text-neutral-500 my-4">
                      This is a marketplace website for buying and selling NFTs.
                      You can list your NFTs on the market and other customers
                      can place bids on it. The winning bid takes home the
                      digital asset. Explore other creators and their
                      collections, checkout special art pieces that grab your
                      attention, and bid! You also chat and have conversation
                      with fellow shoppers or creators to get knowledge, connect
                      in the real world, and have fun.
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
                        className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 w-full font-urbanistNormal hover:from-white hover:to-white hover:text-black"
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
                        className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 w-full font-urbanistNormal hover:from-white hover:to-white hover:text-black"
                      >
                        Github
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          style={{ marginLeft: 8 }}
                        />
                      </Button>
                    </a>
                  </div>
                </div>
                <span className="text-lg md:text-2xl text-neutral-400 mb-2">
                  Key Features:
                </span>

                <ListItem
                  variant="description"
                  label="Vast collection of Digital Artworks"
                  description={`Discover an extensive and ever-growing collection of NFTs from talented creators all around the globe. Explore the Market section to find\nrare and unique digital assets that cater to your interests, whether you're a seasoned collector or new to the NFT space.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Wishlist items"
                  description={`Found something you love? Simply like and save any NFTs that catch your eye, so you can easily revisit them at your convenience.\nAll your wishlisted items will be neatly organized in the Saved section, ensuring quick access to your favorite pieces whenever you're ready to engage.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Digital Walet"
                  description={`Seamlessly load funds into your digital wallet using a variety of payment methods, including credit cards, debit cards, and net banking.\nOnce your wallet is funded, you’ll be able to participate in auctions and place bids on any items of interest using your wallet balance, streamlining the transaction process.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Ongoing Bids"
                  description={`Every product listed in the marketplace has a designated bidding window, and once that time expires, the sale closes. To participate in the auction,\nmake sure you place your bid before the clock runs out. You can monitor and track all the ongoing bids you’ve placed within the Active Bids section.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Messaging"
                  description={`Have questions or want to discuss a deal? Our chat feature allows you to connect with other buyers and creators directly. Whether it’s to clarify details\nor negotiate terms, communicating within the platform ensures smoother and more informed transactions.`}
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Contact Support"
                  description={`For any questions, visit our Help Center, where you'll find a comprehensive list of Frequently Asked Questions. If you still need help, our dedicated support team\nis just an email away, ready to assist you with any technical issues, inquiries, or concerns you may have.`}
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
