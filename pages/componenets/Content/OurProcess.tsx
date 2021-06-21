import React from "react";
import Hero from "../atoms/Hero";
interface OurProcessProps {}
const OurProcess: React.FC<OurProcessProps> = () => {
  const List = [
    
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3581dfb4462e7d78278b3e_image-process-02-growth-template.svg",
      Heading: "1. Execution",
      para: "We could do it with your Ideas merge with our expertise and experience.It could be a part of process that will make difference in your web designing.",
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3587a32b0404227a0d019e_image-process-03-growth-template.svg",
      Heading: "2. Growth & Scale",
      para: "Our growth is described by our proficiency in how could we providing services to our customers. You can go with us without hesitation. We grow together.",
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3581df603d9960e96c4cef_image-process-01-growth-template.svg",
      Heading: "3. Team work",
      para: "The main thing which can give you assurity is your business is in good hand We could make it impossible to possible by working together as a team.",
    },
  ];
  return (
    <>
      
      <Hero
      sectionstyle={null}
      tag={"our services"}
      head={" A simple, yet powerful and efficient process"}
      children={null}
       para={"We have wonderful types of technological expertise, they will help you as kind of digital partner with the type of end to end solution services."}
      />
      <section className="text-gray-600 mb-16 body-font">
        <div className="container px-1 py-2 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {List.map((list)=>{
                return(
                    <div  className="p-4 md:px-10 md:w-1/3 flex flex-col text-center items-center">
              <div className=" inline-flex mb-5 items-center bg-white justify-center rounded-2xl  text-indigo-500  flex-shrink-0">
               <img  className="rounded-3xl" src={list.Icon}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-1000 text-2xl  font-bold mb-3">
                 {list.Heading}
                </h2>
                <p className="leading-relaxed text-base">
                 {list.para}
                </p>
                
              </div>
            </div>
                )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
