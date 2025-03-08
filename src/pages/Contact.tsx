import emailjs from "@emailjs/browser";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getImageURL } from "utils";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../secrets.json";

export default function ContactPage() {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const validContact =
    contact?.match(/^\S+@\S+\.\S+$/) ||
    contact?.match(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/);
  const buttonEnabled = name?.length > 0 && validContact && content?.length > 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const sendMail = () => {
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          message: `${content}\n\n${name}\n${contact}`,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setLoading(false);
          alert("Message sent successfully!");
          setName("");
          setContact("");
          setContent("");
        },
        (error) => {
          console.error("Error sending email:", error);
          setLoading(false);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="Akshat Singh" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full md:h-screen font-urbanistNormal gap-[70px] pb-4 bg-neutral-900">
        <Header current="contact" />
        <div className="flex flex-col md:flex-row md:w-[60%] w-full mt-24 items-center ">
          <div
            className={`rounded-full w-[200px] md:w-[600px]  transform transition duration-1000 p-0.5 aspect-square bg-gradient-to-r mx-16 from-violet-900 via-blue-600 to-amber-500`}
          >
            <div className="p-2 bg-neutral-900 rounded-full">
              <img
                className="rounded-full w-[500px] aspect-square"
                src={getImageURL("ProfilePic")}
              />
            </div>
          </div>
          <div
            className={`w-[90%] md:w-full aspect-video p-0.5 transform transition duration-1000 bg-gradient-to-r from-violet-900 via-blue-600 rounded-lg to-amber-500 mt-16 md:mt-4`}
          >
            <div className="bg-neutral-900 rounded-lg aspect-video p-2 items-center justify-between">
              <div className="flex flex-col  items-center justify-center py-4">
                <span className="text-white py-1 text-lg font-urbanistBold">
                  Let's Connect!
                </span>
                <span className="text-white py-1">
                  You can reach out to me on
                </span>
              </div>
              <div className="items-center justify-center flex flex-row md:px-16 md:py-4">
                {socialData?.map((item) => {
                  return (
                    <a target="none" href={item.link}>
                      <Button className="h-[50px] md:h-[60px] aspect-square">
                        <img src={item.image} />
                      </Button>
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col items-center justify-center py-4 mx-4">
                <span className="text-white py-1">Or drop me a mail</span>
                <div className="flex flex-col md:flex-row my-4 w-full justify-between">
                  <input
                    className="bg-neutral-200 w-full md:w-[48%] mb-2 md:mb-0 p-2 pl-4 rounded-md md:rounded-lg"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="bg-neutral-200 w-full md:w-[48%] p-2 pl-4 rounded-md md:rounded-lg"
                    placeholder="Email / phone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  {!validContact && contact?.length > 5 && (
                    <span className="text-red-300 absolute right-2 text-xs top-2">
                      {"* invalid e-mail or phone"}
                    </span>
                  )}
                </div>
                <textarea
                  className="bg-neutral-200 w-full p-2 rounded-md md:rounded-lg"
                  placeholder="Type your message here..."
                  rows={4}
                  maxLength={250}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <Button
                  onClick={sendMail}
                  loading={loading}
                  disabled={!buttonEnabled}
                  className={`bg-gradient-to-r text-white font-urbanistNormal ${
                    buttonEnabled
                      ? "from-violet-900 via-blue-600 to-amber-500"
                      : "from-white to-white text-black"
                  } mt-4 w-full`}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transform transition duration-1000 md:absolute bottom-0 w-full`}
      >
        <Footer />
      </div>
    </>
  );
}
