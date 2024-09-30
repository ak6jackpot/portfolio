import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/images/ProfilePic.png";

export default function NFT() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header />
        <div className="w-[80%] aspect-video flex mt-24 flex-row border-2 border-white">
          <div className="flex flex-col items-start flex-1">
            <span className="text-white">NFT</span>
          </div>
          <div className="flex flex-row items-start flex-1">
            <img
              src={ProfilePic}
              alt="image_one"
              className="w-1/3 rounded-3xl"
            />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
