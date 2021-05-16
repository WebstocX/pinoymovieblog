import { useRouter } from "next/router";
import React from "react";
import CustomButton from "../atoms/button";

interface Box1Props {
 
}
const Box1: React.FC<Box1Props> = () => {
  const router = useRouter()
  return (
    <section className="text-gray-600 body-font">
      <div className="container md:px-56 md:py-12 py-10 mx-auto">
      <div className="flex flex-col text-center justify-center items-center w-full mb-8" >
          <span className="text-indigo-500 md:text-xl textt-center mb-2 ">marketing agency
</span>
          <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
            We help you to grow your business to the next level
          </span>
          <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
            Webstocx is the Team of Professionals who has an expertise of
            technologies,varied background of high qualified technical gurus
            with vast domain and industry experience.
          </p>
        </div>
        <div className="flex lg:w-2/3 justify-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative ">
            <CustomButton
              label="Contact Us"
              children={null}
              click={()=>{
                router.push("/contact")
              }}
              classN={
                "duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-indigo-500 md:h-18 text-white rounded-xl p-4 md:w-48"
              }
            />
          </div>
          <div className="relative ">
            <CustomButton
              label="Our Services"
              children={null}
              click={()=>{
                router.push("/services")
              }}
              classN={
                "duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-white border-2 border-gray-200 md:h-18 text-black rounded-xl p-4 md:w-48"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box1;
