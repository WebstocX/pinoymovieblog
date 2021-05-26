import { useRouter } from "next/router";
import React, { useState } from "react";
import CustomButton from "../atoms/button";
import Hero from "../atoms/Hero";

interface ConatctSectionProps {}
const ConatctSection: React.FC<ConatctSectionProps> = () => {
  const router = useRouter();

  return (
    <>
     
      <Hero
      tag={null}
      sectionstyle={"#FAFAFC"}
      children={null}
      head={"Need help with a project?"}
      para={"Here's a advice on finding good.. Check out our services and Projects that would help you out to make a decision."}
      />
      <section 
        className="text-gray-600  body-font mb-24"
        style={{ backgroundColor: "#FAFAFC" }}>
        <div className="container p-5   md:px-48   mx-auto">
          <div className="flex  flex-wrap sm:-m-4  -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:z-10   md:py-14 md:p md:mb-24 md:w-1/2 bg-white rounded-3xl border-4 border-indigo-600 flex flex-col text-center items-center">
              <div className=" inline-flex  mb-5 items-center bg-white justify-center rounded-2xl  text-indigo-500  flex-shrink-0">
                <img
                  className="rounded-3xl"
                  src={
                    "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f359cd0935a5ccdc335c951_icon-cta-01-growth-template.svg"
                  }
                />
              </div>
              <div data-aos="zoom-out-down" data-aos-duration="1000" className="flex-grow">
                <h2 className="text-indigo-1000 text-2xl  font-bold mb-3">
                  {"Get in touch today!"}
                </h2>
                <p className="leading-relaxed text-base">
                  You will definitely get the satisfaction once you touch with
                  us We get you to find a solution on your Ideas with your
                  Business on a digital platform.
                </p>
                <CustomButton
                  label="Contact Us"
                  children={null}
                  click={() => {
                    router.push("/contact");
                  }}
                  classN={
                    "duration-500 mt-5 md:w-auto w-full hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-indigo-500 border-2 border-gray-200 md:h-18 text-white rounded-xl p-4 md:w-48"
                  }
                />
              </div>
            </div>
            <div
              className="md:px-16   px-5 py-5 md:py-10 md:h-full  md:w-1/2 bg-white md:-ml-2  rounded-2xl border-2 border-gray-300 flex flex-col text-center items-center"
              style={{ marginTop: "3rem" }}>
              <div className="  inline-flex  items-center bg-white justify-center rounded-2xl  text-indigo-500  flex-shrink-0">
                <img
                  className="rounded-3xl"
                  src={
                    "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f359cd02b04044f780d35a6_icon-cta-02-growth-template.svg"
                  }
                />
              </div>
              <div data-aos="zoom-out-down" data-aos-duration="1000" className="flex-grow">
                <h2 className="text-indigo-1000 text-2xl  font-bold mb-3">
                  {"Browse our Packages"}
                </h2>
                <p className="leading-relaxed text-base">
                We ensure you that once you look in to our plans will connect with us with such a wide features and services.
                </p>
                <CustomButton
                  label="Browse Pakages"
                  children={null}
                  click={() => {
                    router.push("/pakages");
                  }}
                  classN={
                    "duration-500 mt-5  hover:ease-in-out transform hover:scale-110 hover:shadow-2xl mb-8 bg-white border-2 border-gray-200 md:h-18 text-black rounded-xl p-4 md:w-48"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConatctSection;
