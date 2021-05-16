import React from "react";
import CustomButton from "../atoms/button";

interface Box2Props {}
const Box2: React.FC<Box2Props> = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container md:px-56 md:py-12 py-10 mx-auto">
        <div className="flex flex-col text-center justify-center items-center w-full mb-8">
          <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
            our services
          </span>
          <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
            High-impact services to take your business to the next level
          </span>
          <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
            We have wonderful types of designing and development expertise, they will help
            you as kind of digital partner with the type of end to end solution
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Box2;
