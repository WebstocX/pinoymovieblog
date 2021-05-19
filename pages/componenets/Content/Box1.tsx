import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton from "../atoms/button";
import Hero from "../atoms/Hero";

interface Box1Props {}
const Box1: React.FC<Box1Props> = () => {
  const router = useRouter();
  const [data, setData] = useState(undefined);

  useEffect(() => {
   fetch(`/api/Box1`).then(async(response)=>{
     if(response.status ===200){
       
       console.log(response)
     }
   })
  }, []);
  return (
    <>
      <Hero
        sectionstyle="null"
        tag={"your idea our creativity"}
        para={
          "Webstocx is the Team of Professionals who has an expertise of technologies,varied background of high qualified technical gurus with vast domain and industry experience."
        }
        head={"We help you to grow your business to the next level"}
        children={
          <div className="flex lg:w-2/3 justify-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative ">
              <CustomButton
                label="Contact Us"
                children={null}
                click={() => {
                  router.push("/contact");
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
                click={() => {
                  router.push("/services");
                }}
                classN={
                  "duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-white border-2 border-gray-200 md:h-18 text-black rounded-xl p-4 md:w-48"
                }
              />
            </div>
          </div>
        }
      />
     
    </>
  );
};

export default Box1;
