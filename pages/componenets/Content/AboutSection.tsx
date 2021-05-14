import React from "react";
import Icons from "../../constatnts/Icons";
import CustomButton from "../atoms/button";

interface AboutSectionProps {}
const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:px-10 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              about us
            </span>

            <span className=" md:text-4xl text-4xl   leading-1 font-bold   mb-4 text-gray-700">
              The great team of industry experts behind Growth
            </span>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <CustomButton
                label="About Us"
                children={null}
                click={null}
                classN={
                  "transform hover:scale-110 transition-all hover:shadow-2xl	 motion-reduce:transform-none bg-indigo-500 md:h-18 text-white rounded-xl p-4 md:w-48"
                }
              />
            </div>
          </div>
          <div className="lg:max-w-lg shadow-xl -rounded-5xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover -p-16  shadow-2xl object-center rounded-3xl"
              alt="hero"
              src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f35863ee484acfae8c58da7_image-about-section-growth-template.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;