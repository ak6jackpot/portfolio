import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getImageURL, getNthVisit, isFrontend } from "utils";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_VISIT } from "../../secrets.json";
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const sendMail = () => {
    let ip = "";
    let city = "";
    let country = "";
    let network = "";
    let coordinates = "";

    let visit = Number(localStorage?.getItem("visit"));

    if (visit) {
      visit++;
      localStorage?.setItem("visit", String(visit));
    } else {
      visit = 1;
      localStorage?.setItem("visit", String(visit));
    }

    fetch("https://ipinfo.io/json")
      .then((response) => response.json())
      .then((data) => {
        ip = data?.ip ? data?.ip : "Unknown";
        city = data?.city ? data?.city : "Unknown";
        country = data?.country ? data?.country : "Unknown";
        coordinates = data?.loc ? data?.loc : "Unknown";
        network = data?.org ? data?.org : "Unknown";
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });

    setTimeout(() => {
      const message = `City: ${city}\nCountry: ${country}\nIP: ${ip}\nCoordinates: ${coordinates}\nNetwork: ${network}\n`;

      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID_VISIT,
          {
            visit: getNthVisit(visit),
            message: message,
          },
          {
            publicKey: PUBLIC_KEY,
          }
        )
        .then(
          (result) => {
            console.log("Email successfully sent:", result.text);
          },
          (error) => {
            console.error("Error sending email:", error);
            alert("Failed to send the message. Please try again.");
          }
        );
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    sendMail();
    searchParams.get("t") === "f"
      ? localStorage?.setItem("type", "fe")
      : localStorage?.setItem("type", "be");
  }, []);

  const onButtonClick = async () => {
    const pdfUrl = isFrontend()
      ? "https://fe-assets-all.s3.ap-south-1.amazonaws.com/Akshat_FE.pdf"
      : "https://fe-assets-all.s3.ap-south-1.amazonaws.com/Akshat_BE.pdf";

    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = isFrontend() ? "Akshat_FE.pdf" : "Akshat_SDE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  const [footer, setFooter] = useState("translate-y-[100px] opacity-0");
  const [text, setText] = useState("translate-x-[-100px] opacity-0");

  const title = isFrontend() ? "Front-end Developer" : "Software Developer";
  const description = isFrontend()
    ? "I am a passionate Front-end Developer with over 2 years of industry experience. I am a capable engineer with technical prowess in developing, deploying and maintaining Mobile applications (Android & iOS) and Web applications (For desktop and mobile viewing)."
    : "I am a passionate Software Developer with over 2 years of industry experience. I am a capable engineer with technical prowess in developing, deploying and maintaining backend systems, including REST APIs and development operations.";

  const socialData = [
    {
      image: getImageURL("linkedin"),
      link: "https://www.linkedin.com/in/akshat-singh-1847461a0/",
    },
    {
      image: getImageURL("facebook"),
      link: "https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d",
    },
    {
      image: getImageURL("instagram"),
      link: "https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr",
    },
    { image: getImageURL("github"), link: "https://github.com/ak6jackpot" },
    {
      image: getImageURL("x"),
      link: "https://x.com/akshats91819699?s=21&t=wJe_d0aRdoP17N-ziMxwoQ",
    },
  ];

  useEffect(() => {
    // Staggered animations
    setTimeout(() => setFooter("translate-y-0 opacity-100"), 100);
    setTimeout(() => setText("translate-x-0 opacity-100"), 300);
  }, []);

  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta name="Akshat Singh" />
      </Helmet>

      <div className="min-h-screen bg-neutral-900 font-urbanistNormal">
        <Header current="home" />

        {/* Hero Section */}
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              {/* Main Content */}
              <div
                className={`space-y-8 ${text} transform transition-all duration-1000 ease-out`}
              >
                {/* Greeting */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Hi 👋🏼
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                      I'm
                    </span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text">
                      Akshat Singh
                    </span>
                  </div>
                </div>

                {/* Title with gradient line */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-500 via-blue-600 to-violet-900 rounded-full max-w-xs"></div>
                  <span className="text-lg sm:text-xl font-medium text-white whitespace-nowrap">
                    {title}
                  </span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 rounded-full max-w-xs"></div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={onButtonClick}
                    size="md"
                    className="w-full sm:w-auto bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white hover:from-amber-500 hover:via-blue-600 hover:to-violet-900"
                  >
                    Download CV
                  </Button>
                  <Button
                    onClick={() => navigate("/about")}
                    size="md"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white"
                  >
                    View Portfolio
                  </Button>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pt-8">
                  <p className="text-sm font-medium text-neutral-400">
                    Connect with me:
                  </p>
                  <div className="flex justify-center space-x-4">
                    {socialData?.map((item, index) => (
                      <a
                        key={index}
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20"
                      >
                        <img
                          src={item?.image}
                          alt="social"
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        {/* <div
          className={`${footer} transform transition-all duration-1000 ease-out`}
        >
          <Footer />
        </div> */}
      </div>
    </>
  );
}
