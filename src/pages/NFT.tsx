import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";
import nft2 from "../assets/images/nft2.png";
import nft5 from "../assets/images/nft5.png";
import nft6 from "../assets/images/nft6.png";
import nft1 from "../assets/images/nft1.png";
import nft3 from "../assets/images/nft3.png";
import nft4 from "../assets/images/nft4.png";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "components/ImageCarousel";
import ListItem from "components/ListItem";
import { Button } from "components/Button";
import Footer from "components/Footer";

export default function NFT() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header />
        <div className="flex flex-col justify-center md:mt-8 text-white">
          <div className="flex flex-row bg-neutral-900 md:px-32">
            <div className="flex flex-1 flex-col p-8 md:text-left text-center justify-evenly">
              <div className="flex items-center justify-center my-8">
                <ImageCarousel images={[nft1, nft2, nft3, nft4, nft5, nft6]} />
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-sm md:text-lg text-neutral-500">
                  Mar 2024 - Jul 2024
                </span>
                <span className="text-2xl md:text-4xl">NFT marketplace</span>
                <span className="text-sm md:text-lg font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent leading-normal">
                  Web Development
                </span>
              </div>
              <div className="leading-6 items-start flex flex-col my-8">
                <span className="text-lg md:text-2xl">Overview</span>
                <span className="text-md md:text-lg text-neutral-500 my-4">
                  NFT is a travel app available to download on Google PlayStore.
                  It is a one stop solution to all your travel needs. From
                  discovering locations to planning trips, all based on your
                  personal preferences, Amigo does it all. You can create
                  itineraries, share them with others, track your entire trip -
                  including directions to your next destination, expenses,
                  things to shop etc.
                </span>
                <span className="text-lg md:text-2xl text-neutral-400 mb-2">
                  Key Features:
                </span>

                <ListItem
                  variant="description"
                  label="A travel companion app that takes care of your entire trip"
                  description="A travel companion app that takes care of your entire trip nskjadn asjdbajks asjkdajks asdbajksd sajdbkjdb adbaskjd mnbdjkasbd masdbakj."
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Planning itineraries based on your preferences, nearby suggestions, local translations"
                  description="Planning itineraries based on your preferences, nearby suggestions, local translations"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Collaborative and offline functionalities for ease of use"
                  description="Collaborative and offline functionalities for ease of use"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="A travel companion app that takes care of your entire trip"
                  description="A travel companion app that takes care of your entire trip"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Planning itineraries based on your preferences, nearby suggestions, local translations"
                  description="Planning itineraries based on your preferences, nearby suggestions, local translations"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Collaborative and offline functionalities for ease of use"
                  description="Collaborative and offline functionalities for ease of use"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="A travel companion app that takes care of your entire trip"
                  description="A travel companion app that takes care of your entire trip"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Planning itineraries based on your preferences, nearby suggestions, local translations"
                  description="Planning itineraries based on your preferences, nearby suggestions, local translations"
                  size="small"
                />
                <ListItem
                  variant="description"
                  label="Collaborative and offline functionalities for ease of use"
                  description="Collaborative and offline functionalities for ease of use"
                  size="small"
                />
              </div>
              <Button
                onClick={() => {
                  // navigate("/amigo");
                }}
                className="bg-gradient-to-r from-black to-teal-600 font-urbanistNormal hover:from-white hover:to-white hover:text-black mt-8"
              >
                View Project
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
