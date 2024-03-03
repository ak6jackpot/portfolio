import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[70px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
          <header className="flex flex-row justify-between items-center w-full p-[15px]">
            <Img
              src="images/img_group_642.svg"
              alt="image"
              className="h-[50px] ml-[149px]"
            />
            <div className="flex flex-row justify-between items-start w-[30%] mr-[166px]">
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  Home
                </Heading>
                <div className="h-1.5 w-1.5 bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="text-center">
                About
              </Heading>
              <Heading as="h6" className="text-center">
                Works
              </Heading>
              <Heading as="h6" className="text-center">
                Contact
              </Heading>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col items-center justify-start w-full gap-[95px] max-w-[1181px]">
              <div className="h-[646px] w-full relative">
                <div className="flex flex-col items-start justify-center w-full h-full pl-[71px] pr-14 gap-[39px] left-0 bottom-0 right-0 top-0 py-[71px] m-auto bg-cyan-50 absolute rounded-[35px]">
                  <Text
                    as="p"
                    className="w-[42%] mt-[245px] ml-[3px] !text-black-900_60 !leading-[35px]"
                  >
                    Maximize your business with a variety of services and
                    services from us
                  </Text>
                  <div className="flex flex-row justify-start mb-[83px] gap-6">
                    <Button
                      size="md"
                      className="font-bold min-w-[201px] rounded-[5px]"
                    >
                      Contact Us
                    </Button>
                    <Button
                      size="md"
                      variant="outline"
                      className="font-bold min-w-[201px] rounded-[5px]"
                    >
                      About Us
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-start w-[94%] h-full right-0 bottom-0 top-0 m-auto absolute">
                  <Heading
                    size="6xl"
                    as="h1"
                    className="w-[55%] mt-[45px] z-[1]"
                  >
                    <span className="text-black-900">
                      Maximize your company with{" "}
                    </span>
                    <span className="text-red-400_01">us</span>
                  </Heading>
                  <Img
                    src="images/ProfilePic.png"
                    alt="image_one"
                    className="w-1/3 rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Button
                  color="red_400_01"
                  size="lg"
                  shape="circle"
                  className="w-[68px] ml-[124px] z-[1] border-white-A700 border-[9px] border-solid"
                >
                  <Img src="images/img_group_682.svg" />
                </Button>
                <div className="h-[525px] w-full mt-[-34px] relative">
                  <Img
                    src="images/img_bg.png"
                    alt="bg_one"
                    className="justify-center h-[525px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-center justify-center w-max h-max gap-[61px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-between items-start w-full">
                      <Heading size="4xl" as="h1">
                        What our clients are saying
                      </Heading>
                      <div className="flex flex-row justify-start w-[13%] mt-0.5 gap-[9px]">
                        <div className="flex flex-row justify-start w-[48%]">
                          <div className="flex flex-row justify-center w-full p-[11px] bg-red-400_01">
                            <Img
                              src="images/img_frame_660.svg"
                              alt="image_two"
                              className="h-4 mx-[7px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[48%]">
                          <div className="flex flex-row justify-center w-full p-[11px] bg-red-400_01">
                            <Img
                              src="images/img_frame_661.svg"
                              alt="image_three"
                              className="h-4 mx-[7px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-[30px]">
                      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5">
                          I am very satisfied with the work on the Nexus team.
                          good service, satisfying work results and can also
                          increase my business turnover. Thank you so much to
                          the Nexus team.
                        </Text>
                        <div className="flex flex-row justify-start w-3/5 mb-[11px] ml-1.5 gap-[25px]">
                          <Img
                            src="images/img_rectangle_52.png"
                            alt="image"
                            className="w-[49px] object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[61%] gap-1">
                            <Heading
                              size="lg"
                              as="h5"
                              className="!font-semibold"
                            >
                              John Richard
                            </Heading>
                            <Text size="xs" as="p">
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
