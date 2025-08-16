import emailjs from "@emailjs/browser";
import { Button } from "components/Button";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getImageURL } from "utils";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_MAIL } from "../../secrets.json";

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
      name: "LinkedIn",
    },
    {
      image: getImageURL("facebook"),
      link: "https://www.facebook.com/akshat6jackpot?mibextid=LQQJ4d",
      name: "Facebook",
    },
    {
      image: getImageURL("instagram"),
      link: "https://www.instagram.com/ak.jackpot?igsh=d3cza3owZnR6ZnVp&utm_source=qr",
      name: "Instagram",
    },
    {
      image: getImageURL("github"),
      link: "https://github.com/ak6jackpot",
      name: "GitHub",
    },
    {
      image: getImageURL("x"),
      link: "https://x.com/akshats91819699?s=21&t=wJe_d0aRdoP17N-ziMxwoQ",
      name: "Twitter",
    },
  ];

  const sendMail = () => {
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID_MAIL,
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

      <div className="min-h-screen bg-neutral-900 font-urbanistNormal">
        <Header current="contact" />

        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text leading-tight mb-6">
                Let's Connect!
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Profile & Social */}
              <div className="space-y-8">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-blue-600/30 to-amber-500/30 rounded-full blur-3xl scale-110"></div>

                    {/* Image container */}
                    <div className="relative bg-gradient-to-br from-violet-900 via-blue-600 to-amber-500 p-1 rounded-full shadow-2xl">
                      <div className="relative overflow-hidden rounded-full">
                        <img
                          className="w-48 h-48 sm:w-64 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                          src={getImageURL("ProfilePic")}
                          alt="Akshat Singh"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white text-center lg:text-left">
                    Connect with me on social media
                  </h3>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {socialData?.map((item, index) => (
                      <a
                        key={index}
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20"
                        aria-label={item.name}
                      >
                        <img
                          src={item?.image}
                          alt={item.name}
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Hover glow effect - further reduced */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="space-y-6">
                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send me a message
                  </h2>

                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-300"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Contact Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact"
                        className="block text-sm font-medium text-neutral-300"
                      >
                        Email or Phone *
                      </label>
                      <input
                        id="contact"
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="your@email.com or +91 1234567890"
                        className={`w-full px-4 py-3 bg-neutral-700/50 border rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 ${
                          contact && !validContact
                            ? "border-red-500 focus:border-red-500"
                            : "border-neutral-600 focus:border-violet-500"
                        }`}
                        required
                      />
                      {contact && !validContact && (
                        <p className="text-sm text-red-400">
                          Please enter a valid email or phone number
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-300"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      onClick={sendMail}
                      disabled={!buttonEnabled || loading}
                      loading={loading}
                      size="lg"
                      className="w-full bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white hover:from-amber-500 hover:via-blue-600 hover:to-violet-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>

                {/* Additional Info */}
                <div className="text-center lg:text-left space-y-2">
                  <p className="text-sm text-neutral-400">
                    I typically respond within 24 hours
                  </p>
                  <p className="text-sm text-neutral-400">
                    Feel free to reach out for collaborations, opportunities, or
                    just to chat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
