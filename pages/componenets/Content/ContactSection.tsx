import React from "react";
import CustomButton from "../atoms/button";

interface ConatctSectionProps {}
const ConatctSection: React.FC<ConatctSectionProps> = () => {
  return (
    <>
      <section className="text-gray-600 body-font mb-10" style={{backgroundColor:"#FAFAFC"}}>
        <div className="container md:px-56 mt-12 md:py-12 py-10 mx-auto">
          <div className="flex flex-col text-center mt-10 justify-center items-center w-full">
            <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-indigo-900">
              Need help with a project?
            </span>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
              We have wonderful types of technological expertise, they will help
              you as kind of digital partner with the type of end to end
              solution services.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600  body-font mb-24" style={{backgroundColor:"#FAFAFC"}}>
        <div className="container p-5   md:px-48   mx-auto">
          <div className="flex  flex-wrap sm:-m-4  -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:z-10   md:py-14 md:p md:mb-24 md:w-1/2 bg-white rounded-3xl border-4 border-indigo-600 flex flex-col text-center items-center">
              <div className=" inline-flex  mb-5 items-center bg-white justify-center rounded-2xl  text-indigo-500  flex-shrink-0">
               <img  className="rounded-3xl" src={"https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f359cd0935a5ccdc335c951_icon-cta-01-growth-template.svg"}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-1000 text-2xl  font-bold mb-3">
                 {"Get in touch today!"}
                </h2>
                <p className="leading-relaxed text-base">
                 {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi malesuada commodo mattis enim, ac nunc, arcu mi. Viverra mattis."}
                </p>
                <CustomButton
              label="Contact Us"
              children={null}
              click={null}
              classN={
                "duration-500 mt-5 md:w-auto w-full hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-indigo-500 border-2 border-gray-200 md:h-18 text-white rounded-xl p-4 md:w-48"
              }
            />
              </div>
            </div>
            <div className="md:px-16   px-5 py-5 md:py-10 md:h-full  md:w-1/2 bg-white md:-ml-2  rounded-2xl border-2 border-gray-300 flex flex-col text-center items-center" style={{marginTop:"3rem"}}>
              <div className="  inline-flex  items-center bg-white justify-center rounded-2xl  text-indigo-500  flex-shrink-0">
               <img  className="rounded-3xl" 
               src={"https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f359cd02b04044f780d35a6_icon-cta-02-growth-template.svg"}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-1000 text-2xl  font-bold mb-3">
                 {"Browse our Packages"}
                </h2>
                <p className="leading-relaxed text-base">
                 {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisi malesuada.  "}
                </p>
                <CustomButton
              label="Browse Pakages"
              children={null}
              click={null}
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
