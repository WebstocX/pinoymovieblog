import { useRouter } from "next/router";
import React from "react";
import CustomButton from "./componenets/atoms/button";
import ConatctSection from "./componenets/Content/ContactSection";
import OurOffice from "./componenets/Content/OurOffice";
import OurTeam from "./componenets/Content/OurTeam";

interface AboutProps {}
const About: React.FC<AboutProps> = () => {
  const router = useRouter();
  return (
    <>
      <section data-aos="fade-left" data-aos-duration="2000" className="   text-gray-600 body-font">
        <div className="container md:px-56 md:py-12 py-10 mx-auto">
          <div className="flex flex-col text-center justify-center items-center w-full mb-8">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              about the team
            </span>
            <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
              A great company has a great team behind
            </span>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
              We are young and talented team behind the WebStocX to enusre all small business come as online store to increase your business 
              and popularity .
            </p>
          </div>
          <div className="flex lg:w-2/3 justify-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl rounded-3xl bg-blue-100 shadow-3xl ">
              <a href="https://www.facebook.com/web.stocx" target="_blank">
                {" "}
                <img
                  className="rounded-2xl bg-blue-100 shadow-5xl"
                  src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f440bbd375d6f0b24a5d041_icon-social-media-full-color-01-growth-template.svg"
                />
              </a>
            </div>

            <div className="relative duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl rounded-3xl bg-blue-100 shadow-3xl ">
              <a href="https://www.instagram.com/webstocx/" target="_blank">
                <img
                  className="rounded-2xl bg-blue-100 shadow-5xl"
                  src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f440bbd66a93d4a880e0205_icon-social-media-full-color-03-growth-template.svg"
                />
              </a>
            </div>
            <div className="relative duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl rounded-3xl bg-blue-100 shadow-3xl ">
              <a
                href="https://www.linkedin.com/in/web-stocx-744595212/"
                target="_blank">
                {" "}
                <img
                  className="rounded-2xl bg-blue-100 shadow-5xl"
                  src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f440bbdd4f86af8b2337c82_icon-social-media-full-color-04-growth-template.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-left" data-aos-duration="2000" className="text-gray-600 -mt-16 body-font">
        <div className="container mx-auto flex md:px-10  py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              our mission
            </span>

            <span className=" md:text-4xl text-4xl   leading-1 font-bold   mb-4 text-gray-700">
              We thrive to help our clients have global impact
            </span>
            <p className="mb-8 leading-relaxed">
             We have a proper planing to get your business online asap with lowest cost you will be see on internet
             & make our client happy :)
            </p>
            <div className="flex justify-center">
              <CustomButton
                label="Conatct Us"
                children={null}
                click={() => {
                  router.push("/contact");
                }}
                classN={
                  "duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-indigo-500 md:h-18 text-white rounded-xl p-4 md:w-48"
                }
              />
            </div>
          </div>
          <div className="lg:max-w-lg shadow-xl -rounded-5xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover -p-16  shadow-2xl object-center rounded-3xl"
              alt="hero"
              src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36d8fba570657f81dfb859_image-mission-growth-template-p-800.jpeg"
            />
          </div>
        </div>
      </section>

      <section data-aos="fade-left" data-aos-duration="2000" className="  text-gray-600 body-font">
        <div className="container md:px-56  md:py-12 py-10 mx-auto">
          <div className="flex flex-col text-center justify-center items-center w-full mb-8">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              our values
            </span>
            <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
              The core values behind our work
            </span>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
              We Worked with plans and execute it to 100% to get desire outcome the main values we put in this are 
              Planing , Excution , Tracking , Followup's to our clients
            </p>
          </div>
        </div>
      </section>

      <section data-aos="fade-left" data-aos-duration="2000" className=" mb-24 text-gray-600 body-font">
        <div className="container   md:px-16 mx-auto flex flex-wrap">
          <div className="flex flex-wrap  md:-m-4">
            <div className="p-4 lg:w-1/2 -px-16 md:w-full">
              <div className="flex border-2  rounded-3xl border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 hidden md:block sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <img
                    className="rounded-4xl "
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36dd196e439f239cd25864_icon-value-01-growth-template.svg"
                  />
                </div>
                
                <div className="flex-col md:mt-0 mt-20">
                <img
                    className=" md:hidden rounded-4xl md:mt-0 -mt-24  mb-10 "
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36dd196e439f239cd25864_icon-value-01-growth-template.svg"
                  />
                  <h2 className="text-gray-900 text-lg md:text-left title-font font-bold mb-3">
                    Execution
                  </h2>
                  <p className="leading-relaxed text-base">
                    We could do it with your Ideas merge with our expertise and
                    experience. It could be a part of process that will make
                    difference in your web designing.
                  </p>
                </div>
              </div>
            </div>
           
            <div data-aos="fade-left" data-aos-duration="2000" className="p-4 lg:w-1/2 -px-16 md:w-full">
              <div className="flex border-2  rounded-3xl border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 hidden md:block sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <img
                    className="rounded-4xl "
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36dd19fb8e3e6613ced5ed_icon-value-03-growth-template.svg"
                  />
                </div>
                
                <div className="flex-col md:mt-0 mt-20">
                <img
                    className=" md:hidden rounded-4xl md:mt-0 -mt-24  mb-10 "
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36dd19fb8e3e6613ced5ed_icon-value-03-growth-template.svg"
                  />
                  <h2 className="text-gray-900 text-lg md:text-left title-font font-bold mb-3">
                  Growth
                  </h2>
                  <p className="leading-relaxed text-base">
                  Our growth is described by our proficiency in how could we providing services to our customers. You can go with us without hesitation. We grow together.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="p-4 lg:w-1/2 -px-16 md:w-full">
              <div className="flex border-2  rounded-3xl border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 hidden md:block sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <img
                    className="rounded-4xl "
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36dd193eba5d46a8308c36_icon-value-04-growth-template.svg"
                  />
                </div>
                
                <div className="flex-col md:mt-0 mt-20">
                <img
                    className=" md:hidden rounded-4xl md:mt-0 -mt-24  mb-10 "
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f36dd193eba5d46a8308c36_icon-value-04-growth-template.svg"
                  />
                  <h2 className="text-gray-900 text-lg md:text-left title-font font-bold mb-3">
                  Team work
                  </h2>
                  <p className="leading-relaxed text-base">
                  The main thing which can give you assurity is your business is in good hand We could make it impossible to possible by working together as a team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurTeam/>
      <OurOffice/>
      <ConatctSection />
    </>
  );
};

export default About;
