import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full font-plusJakartaSans gap-[70px] bg-black">
        <Header current="contact" />
        <div className="flex flex-row">
          <div>
            <span className="text-white">profile pic</span>
          </div>
          <div className="w-[50%] aspect-video bg-white p-0.5 bg-gradient-to-r from-deep_purple via-indigo rounded-lg to-orange">
            <div className="bg-black rounded-lg p-2">
              <div className="flex flex-col items-start flex-1">
                <span className="text-white">Let's Connect</span>
                <span className="text-white">You can reach out to me on</span>
              </div>
              <div className="items-start flex-1">
                <span className="text-white">social media icons</span>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
