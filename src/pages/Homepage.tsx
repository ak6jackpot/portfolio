import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ProfilePic_removebg from "../assets/images/ProfilePic-removebg.png";
import facebook from "../assets/images/Social/facebook.png";
import github from "../assets/images/Social/github.png";
import instagram from "../assets/images/Social/instagram.png";
import linkedin from "../assets/images/Social/linkedin.png";
import threads from "../assets/images/Social/threads.png";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onButtonClick = () => {
    const pdfUrl = "Akshat_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Akshat_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [footer, setFooter] = useState("translate-y-[90px]");
  const [image, setImage] = useState("translate-y-[600px] opacity-0");
  const [text, setText] = useState("translate-x-[-800px] opacity-0");

  useEffect(() => {
    setTimeout(() => {
      setFooter("translate-y-0");
    }, 100);

    setTimeout(() => {
      setImage("translate-y-0 opacity-1");
      setText("translate-x-0 opacity-1");
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta name="Akshat Singh" />
      </Helmet>
      <div className="flex flex-col items-center md:h-screen justify-start w-full font-urbanistNormal gap-[70px] bg-neutral-900">
        <Header current="home" />
        <div
          className={`flex mt-24 flex-col text-white text-center pb-20 md:pb-0`}
        >
          <div className="flex flex-row mx-4 md:mx-60 md:p-4">
            <div
              className={`flex flex-col ${text} transform transition duration-1000 items-start flex-2 md:pr-8`}
            >
              <span className="text-white text-3xl md:text-6xl ">Hi 👋🏼</span>
              <div className="flex flex-row">
                <span className="text-white text-3xl md:text-6xl ">I'm</span>
                <div className="inline-block">
                  <span className="text-3xl md:text-6xl px-2 font-extrabold bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                    Akshat Singh
                  </span>
                </div>
              </div>
              <div className="flex flex-row w-full items-center my-2 md:my-4">
                <div className="h-[2px] w-full bg-gradient-to-r from-amber-500 via-blue-600 to-violet-900"></div>
                <span className="text-white text-sm md:text-lg text-nowrap whitespace-nowrap pl-2">
                  Front-end Developer
                </span>
              </div>
              <div className="flex flex-row items-center justify-center">
                <span className="text-left text-xs md:text-lg flex-1 flex text-neutral-400">
                  {
                    "I am a passionate Front-end Developer with over 2 years of industry experience. I am a capable engineer with technical prowess in developing, deploying and maintaining Mobile applications (Android & iOS) and Web applications (For desktop and mobile viewing)."
                  }
                </span>
                <div className="bg-pattern md:hidden flex-1 flex rounded-3xl overflow-hidden m-2">
                  <div className="w-full h-[full] flex items-end z-20">
                    <img
                      src={ProfilePic_removebg}
                      alt="image_one"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center my-8">
                <Button
                  onClick={onButtonClick}
                  className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white font-urbanistNormal hover:from-white hover:to-white hover:text-black"
                >
                  Download CV
                </Button>

                <Button
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="ml-4 bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white font-urbanistNormal hover:from-white hover:to-white hover:text-black"
                >
                  View Portfolio
                </Button>
              </div>
              <span className="text-left hidden md:flex">
                {"Connect with me:"}
              </span>
              <div className="items-center md:flex hidden justify-center flex flex-row my-2 -ml-[10px]">
                <a href="https://www.linkedin.com/in/akshat-singh-1847461a0/">
                  <Button className="h-[48px] aspect-square">
                    <img src={linkedin} />
                  </Button>
                </a>
                <a href="https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d">
                  <Button className="h-[48px] aspect-square">
                    <img src={facebook} />
                  </Button>
                </a>
                <a href="https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr">
                  <Button className="h-[48px] aspect-square">
                    <img src={instagram} />
                  </Button>
                </a>
                <a href="https://github.com/ak6jackpot">
                  <Button className="h-[48px] aspect-square">
                    <img src={github} />
                  </Button>
                </a>
                <a href="https://www.threads.net/@ak.jackpot">
                  <Button className="h-[48px] aspect-square">
                    <img src={threads} />
                  </Button>
                </a>
              </div>
            </div>
            <div
              className={`bg-pattern ${image} transform transition duration-1000  hidden md:block flex-1 rounded-3xl overflow-hidden m-2`}
            >
              <div className="w-full h-full flex items-end z-20">
                <img
                  src={ProfilePic_removebg}
                  alt="image_one"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${footer} transform transition duration-1000 fixed bottom-0 w-full`}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
