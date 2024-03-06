import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";
import facebook from "../assets/images/Social/facebook.png";
import threads from "../assets/images/Social/threads.png";
import instagram from "../assets/images/Social/instagram.png";
import x from "../assets/images/Social/x.png";
import github from "../assets/images/Social/github.png";
import linkedin from "../assets/images/Social/linkedin.png";

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
          <div className="w-[60%] aspect-video p-0.5 bg-gradient-to-r from-deep_purple via-indigo rounded-lg to-orange">
            <div className="bg-black rounded-lg aspect-video p-2">
              <div className="flex flex-col items-start">
                <span className="text-white">Let's Connect</span>
                <span className="text-white">You can reach out to me on</span>
              </div>
              <div className="items-center justify-center flex h-[35px] w-auto flex-row px-16">
                <img className="h-[30px] aspect-square mx-1" src={facebook} />
                <img className="h-[30px] aspect-square mx-1" src={instagram} />
                <img className="h-[30px] aspect-square mx-1" src={threads} />
                <img className="h-[30px] aspect-square mx-1" src={x} />
                <img className="h-[30px] aspect-square mx-1" src={github} />
                <img className="h-[30px] aspect-square mx-1" src={linkedin} />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
