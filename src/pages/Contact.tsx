import Header from "components/Header";
import React from "react";
import { Helmet } from "react-helmet";
import facebook from "../assets/images/Social/facebook.png";
import github from "../assets/images/Social/github.png";
import instagram from "../assets/images/Social/instagram.png";
import linkedin from "../assets/images/Social/linkedin.png";
import threads from "../assets/images/Social/threads.png";
import Footer from "components/Footer";
import { Button } from "components/Button";
import ProfilePic from "../assets/images/ProfilePic.png";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="Akshat Singh" content="Front End Developer Portfolio" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full h-screen font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header current="contact" />
        <div className="flex flex-col md:flex-row md:w-[60%] w-full mt-24 md:mt-48 items-center ">
          <div className="rounded-full w-[200px] md:w-[600px] p-0.5 aspect-square bg-gradient-to-r mx-16 from-violet-900 via-blue-600 to-amber-500">
            <div className="p-2 bg-neutral-900 rounded-full">
              <img
                className="rounded-full w-[500px] aspect-square"
                src={ProfilePic}
              />
            </div>
          </div>
          <div className="w-[90%] md:w-full aspect-video p-0.5 bg-gradient-to-r from-violet-900 via-blue-600 rounded-lg to-amber-500 mt-16 md:mt-4">
            <div className="bg-neutral-900 rounded-lg aspect-video p-2 items-center justify-between">
              <div className="flex flex-col  items-center justify-center py-4">
                <span className="text-white py-1">Let's Connect!</span>
                <span className="text-white py-1">
                  You can reach out to me on
                </span>
              </div>
              <div className="items-center justify-center flex flex-row md:px-16 md:py-4">
                <a href="https://www.linkedin.com/in/akshat-singh-1847461a0/">
                  <Button className="h-[50px] md:h-[60px] aspect-square">
                    <img src={linkedin} />
                  </Button>
                </a>
                <a href="https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d">
                  <Button className="h-[50px] md:h-[60px] aspect-square">
                    <img src={facebook} />
                  </Button>
                </a>
                <a href="https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr">
                  <Button className="h-[50px] md:h-[60px] aspect-square">
                    <img src={instagram} />
                  </Button>
                </a>
                <a href="https://github.com/ak6jackpot">
                  <Button className="h-[50px] md:h-[60px] aspect-square">
                    <img src={github} />
                  </Button>
                </a>
                <a href="https://www.threads.net/@ak.jackpot">
                  <Button className="h-[50px] md:h-[60px] aspect-square">
                    <img src={threads} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}
