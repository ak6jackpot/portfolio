import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
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
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  About
                </Heading>
                <div className="h-1.5 w-1.5 bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="text-center">
                Works
              </Heading>
              <Heading as="h6" className="text-center">
                Contact
              </Heading>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full gap-[98px] max-w-[1180px]">
            <div className="flex flex-row justify-start w-full p-[53px] bg-yellow-100 rounded-[90px]">
              <div className="flex flex-row justify-start items-start w-[88%] mt-[19px] ml-[60px]">
                <div className="flex flex-col items-start justify-start w-[10%] gap-[60px]">
                  <Img
                    src="images/img_ellipse_11.png"
                    alt="circleimage"
                    className="h-[89px] w-[89px] rounded-[50%]"
                  />
                  <div className="h-3.5 w-3.5 ml-[23px] bg-pink-400 rounded-[50%]" />
                </div>
                <div className="flex flex-col items-end justify-start w-[91%] gap-[61px]">
                  <div className="h-3.5 w-3.5 mr-[134px] bg-deep_orange-A100 rounded-[50%]" />
                  <div className="flex flex-row justify-end w-full">
                    <div className="flex flex-row justify-end items-start w-full">
                      <div className="flex flex-col items-center justify-start w-[91%] gap-[15px] z-[1]">
                        <Heading
                          size="5xl"
                          as="h1"
                          className="w-[66%] text-center leading-[60px]"
                        >
                          <span className="text-black-900">
                            Get to know more{" "}
                          </span>
                          <span className="text-red-400_01">about us</span>
                        </Heading>
                        <Text as="p" className="text-center !leading-10">
                          We are an agency engaged in the creative industry and
                          business, we are ready to help you to improve your
                          business performance together with our great team
                        </Text>
                      </div>
                      <Img
                        src="images/img_ellipse_13.png"
                        alt="circleimage_one"
                        className="h-[89px] w-[89px] ml-[-11px] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse_12.png"
                    alt="circleimage_two"
                    className="h-[89px] w-[89px] mr-[89px] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
            <div className="justify-center w-full gap-[30px] grid-cols-3 grid min-h-[auto]">
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_16.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[44%] gap-3">
                  <Heading size="xl" as="h2" className="!text-gray-800_01">
                    Sarah Jae
                  </Heading>
                  <Text as="p" className="!text-black-900_68">
                    Branding Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[35px]">
                <Img
                  src="images/img_rectangle_15.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[39%] gap-3 py-1">
                  <Heading size="xl" as="h3" className="!text-gray-800_01">
                    John Doe
                  </Heading>
                  <Text as="p" className="!text-black-900_68 text-center">
                    Product Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_17.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[33%] gap-3">
                  <Heading
                    size="xl"
                    as="h4"
                    className="!text-gray-800_01 text-center"
                  >
                    Samantha
                  </Heading>
                  <Text as="p" className="!text-black-900_68 text-center">
                    SEO Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_18.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[44%] gap-[7px]">
                  <Heading size="2xl" as="h5">
                    Lila laconsia
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900_68 text-center"
                  >
                    UI Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_19.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[39%] gap-1">
                  <Heading size="2xl" as="h6" className="text-center">
                    Ana louren
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900_68 text-center"
                  >
                    Illustrator
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_20.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[37%] gap-1">
                  <Heading size="2xl" as="h3" className="text-center">
                    Rico john
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900_68 text-center"
                  >
                    UX Principles
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_21.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[57%] gap-1">
                  <Heading size="2xl" as="h3">
                    Randy okla
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900_68 text-center"
                  >
                    Interaction Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_22.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[46%] gap-[5px]">
                  <Heading size="2xl" as="h3">
                    Sinta Marcus
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900_68 text-center"
                  >
                    UX Writer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_23.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-2/5 gap-1">
                  <Heading size="2xl" as="h3" className="text-center">
                    Sam Rivald
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900_68 text-center"
                  >
                    Front-end Dev
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[63px]">
              <Heading size="4xl" as="h1">
                Our Moment
              </Heading>
              <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[32%] gap-[30px]">
                  <Img
                    src="images/img_rectangle_29.png"
                    alt="image_one"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_30.png"
                    alt="image_two"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-[30px]">
                  <Img
                    src="images/img_rectangle_31.png"
                    alt="image_three"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_mask_group.png"
                    alt="image_four"
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-[29px]">
                  <Img
                    src="images/img_kelly_sikkema_c.png"
                    alt="kellysikkemac"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_woman_sitting_o.png"
                    alt="womansittingo"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_mask_group_206x374.png"
                    alt="image_five"
                    className="w-full object-cover"
                  />
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
