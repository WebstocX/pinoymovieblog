import React from "react";
import { useRouter } from "next/router";

interface HeroProps {
  tag: string;
  head: string;
  para: string;
 children:any;
 sectionstyle:any; 
}
const Hero: React.FC<HeroProps> = ({tag,head,para,children, sectionstyle}) => {
  const router = useRouter();
console.log("Hero", tag)
  return (
    <>
      <section data-aos="zoom-out-up" data-aos-duration="1000" style={{backgroundColor:sectionstyle}} className="text-gray-600 body-font">
        <div data-aos="fade-left" data-aos-duration="2000" className="container md:px-56 md:py-12 py-10 mx-auto">
          <div className="flex flex-col text-center justify-center items-center w-full mb-8">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              {tag}
            </span>
            <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
              {head}
            </span>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
             {para}
            </p>
          </div>
         {children}
        </div>
      </section>
    </>
  );
};

export default Hero;
