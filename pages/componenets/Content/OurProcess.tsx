import { link } from "node:fs";
import React from "react";
interface OurProcessProps {}
const OurProcess: React.FC<OurProcessProps> = () => {
  const List = [
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3581df603d9960e96c4cef_image-process-01-growth-template.svg",
      Heading: "1. Marketing Plan",
      para: "Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat lorem ipsum.",
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3581dfb4462e7d78278b3e_image-process-02-growth-template.svg",
      Heading: "2. Execution",
      para: "Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat lorem ipsum.",
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3587a32b0404227a0d019e_image-process-03-growth-template.svg",
      Heading: "3. Growth & Scale",
      para: "Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat lorem ipsum.",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container md:px-56  md:py-12 py-10 mx-auto">
          <div className="flex flex-col text-center justify-center items-center w-full mb-8">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              our services
            </span>
            <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
              A simple, yet powerful and efficient process
            </span>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
              We have wonderful types of technological expertise, they will help
              you as kind of digital partner with the type of end to end
              solution services.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-1 py-2 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {List.map((list)=>{
                return(
                    <div className="p-4 md:px-10 md:w-1/3 flex flex-col text-center items-center">
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
