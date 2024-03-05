import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Input, Button, TextArea, Text } from "../components";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[54px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-row justify-between items-center w-full p-[15px]">
            <Img
              src="images/img_group_642.svg"
              alt="image"
              className="h-[50px] ml-[149px]"
            />
            <div className="flex flex-row justify-between items-start w-[30%] mr-[166px]">
              <Heading as="h6" className="text-center">
                Home
              </Heading>
              <Heading as="h6" className="text-center">
                About
              </Heading>
              <Heading as="h6" className="text-center">
                Works
              </Heading>
              <div className="flex flex-col items-center justify-start w-[16%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  Contact
                </Heading>
                <div className="h-1.5 w-1.5 bg-red-400_01 rounded-[50%]" />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end justify-start w-full gap-[108px] mx-auto max-w-[1311px]">
          <div className="flex flex-col items-center justify-start w-[91%] gap-[100px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-start w-full p-[51px] bg-blue-50 rounded-[90px]">
                <div className="h-[381px] w-[98%] mt-[72px] mb-[91px] relative">
                  <Img
                    src="images/img_group_767.svg"
                    alt="image_one"
                    className="justify-center h-[381px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex flex-col items-center justify-center w-full h-full gap-[76px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Heading size="5xl" as="h1" className="text-center">
                      <span className="text-black-900">Get in </span>
                      <span className="text-red-400_01">touch</span>
                    </Heading>
                    <Text as="p" className="text-center !leading-10">
                      Stay connected with us, we will help you with your various
                      needs. we will provide the best service in technical and
                      consulting matters. You can provide your needs or
                      something you ask in the form below
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[41px]">
              <div className="flex flex-row justify-start w-[66%]">
                <div className="flex flex-col items-start justify-start w-full pl-[72px] pr-14 gap-[23px] py-[72px] bg-white-A700 shadow-2xl rounded-[20px]">
                  <div className="flex flex-col items-center justify-start w-[89%] ml-[39px] gap-[23px]">
                    <Input
                      size="xs"
                      name="message"
                      placeholder="Send Message"
                      className="w-full"
                    />
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                        <div className="flex flex-row justify-start w-full gap-[30px]">
                          <Input
                            color="gray_100"
                            variant="fill"
                            shape="round"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-[48%]"
                          />
                          <Input
                            color="gray_100"
                            variant="fill"
                            shape="round"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-[48%]"
                          />
                        </div>
                        <TextArea
                          name="your_message"
                          placeholder="Your Message"
                          className="w-full text-gray-400 font-bold"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    color="green_600"
                    size="sm"
                    rightIcon={<Img src="images/img_group.svg" alt="Group" />}
                    className="mb-[30px] ml-[39px] gap-[13px] min-w-[182px] rounded-[25px]"
                  >
                    Send
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[32%] mb-3 gap-[30px] p-12 bg-white-A700 shadow-2xl rounded-[20px]">
                <div className="flex flex-col items-start justify-start w-[97%] mt-6 gap-[33px]">
                  <Input
                    size="sm"
                    name="contact"
                    placeholder="Contact Information"
                    className="w-full"
                  />
                  <div className="flex flex-col items-start justify-start w-[92%] ml-1 gap-7">
                    <div className="flex flex-row justify-start items-center gap-[25px]">
                      <Img
                        src="images/img_frame_666.svg"
                        alt="image_two"
                        className="h-6 w-6 mb-px"
                      />
                      <Heading size="s" as="h2" className="!text-gray-400_01">
                        hello@mail.com
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[25px]">
                      <Img
                        src="images/img_frame_665.svg"
                        alt="image_three"
                        className="h-6 w-6"
                      />
                      <a href="www.abc.com" target="_blank" rel="noreferrer">
                        <Heading size="s" as="h3" className="!text-gray-400_01">
                          www.abc.com
                        </Heading>
                      </a>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-[25px]">
                      <Img
                        src="images/img_frame_664.svg"
                        alt="image_four"
                        className="h-6 w-6 mt-[3px]"
                      />
                      <Heading
                        size="s"
                        as="h4"
                        className="w-4/5 !text-gray-400_01"
                      >
                        Sudirman street, holgan, melbourne
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[25px]">
                      <Img
                        src="images/img_frame_663.svg"
                        alt="image_five"
                        className="h-6 w-6"
                      />
                      <Heading size="s" as="h5" className="!text-gray-400_01">
                        1234 - 5678
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-full mb-[25px] gap-[41px]">
                  <div className="flex flex-col items-start justify-start w-[98%] mr-2 gap-6">
                    <Heading size="lg" as="h6" className="!text-gray-600">
                      Social Media
                    </Heading>
                    <div className="h-px w-full bg-gray-200" />
                  </div>
                  <Img
                    src="images/img_group_623.png"
                    alt="image_six"
                    className="w-[89%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800">
            <div className="flex flex-row justify-between items-start w-[92%] mt-[19px]">
              <div className="flex flex-col items-start justify-start w-[70%] gap-1">
                <div className="flex flex-row justify-between items-start w-full">
                  <Img
                    src="images/img_group_642_red_400.svg"
                    alt="image_seven"
                    className="h-[50px]"
                  />
                  <div className="flex flex-row w-[47%] mt-[25px] gap-[123px]">
                    <div className="flex flex-col items-center justify-start w-[29%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Heading
                          size="lg"
                          as="h2"
                          className="ml-px !text-white-A700 tracking-[4.00px]"
                        >
                          ABOUT
                        </Heading>
                        <div className="h-0.5 w-[45%] mt-2.5 bg-deep_orange-A100" />
                        <div className="flex flex-col items-start justify-start mt-[38px] gap-[29px]">
                          <Heading
                            as="h3"
                            className="!text-white-A700 tracking-[0.90px] !font-semibold"
                          >
                            About
                          </Heading>
                          <Heading
                            as="h4"
                            className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold"
                          >
                            What we do
                          </Heading>
                          <Heading
                            as="h5"
                            className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold"
                          >
                            Works
                          </Heading>
                          <Heading
                            as="h6"
                            className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold"
                          >
                            Testimonial
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[38%] gap-[37px]">
                      <div className="flex flex-col items-start justify-start w-full gap-2.5">
                        <Heading
                          size="lg"
                          as="h5"
                          className="!text-white-A700 tracking-[4.00px]"
                        >
                          FOLLOW US
                        </Heading>
                        <div className="h-0.5 w-[34%] bg-deep_orange-A100" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[30px]">
                        <Heading
                          as="h6"
                          className="!text-white-A700 tracking-[0.90px] !font-semibold"
                        >
                          Dribbble
                        </Heading>
                        <Heading
                          as="h6"
                          className="!text-white-A700 tracking-[0.90px] !font-semibold"
                        >
                          Instagram
                        </Heading>
                        <Heading
                          as="h6"
                          className="!text-white-A700 tracking-[0.90px] !font-semibold"
                        >
                          Behance
                        </Heading>
                        <Heading
                          as="h6"
                          className="!text-white-A700 tracking-[0.90px] !font-semibold"
                        >
                          Pinterest
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <Heading size="xs" as="p" className="!text-white-A700">
                  All Rights Reserved
                </Heading>
              </div>
              <Img
                src="images/img_group_710.svg"
                alt="image_eight"
                className="h-[311px] mt-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
