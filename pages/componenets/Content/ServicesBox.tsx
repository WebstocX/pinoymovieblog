import { useRouter } from "next/router";
import React from "react";
import CustomButton from "../atoms/button";

interface ServicesBoxProps {}
const ServicesBox: React.FC<ServicesBoxProps> = () => {
  const router = useRouter();
  const ListOne = [
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e053a168cf0eea0cf5f_icon-service-01-growth-template.svg",
      Heading: "Social Media Marketing",
      bg: "bg-blue-100",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f8d6e62b39c0caff0c_icon-our-services-01-growth-template.svg",
          label: "PPC/SEM",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f8d6e62b39c0caff0c_icon-our-services-01-growth-template.svg",
          label: "Display Advertising",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f8d6e62b39c0caff0c_icon-our-services-01-growth-template.svg",
          label: "Facebook & Google Advertising",
        },
      ],
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e04be853418b0ac3e01_icon-service-02-growth-template.svg",
      Heading: "Search Engine Optimization",
      bg: "bg-indigo-100",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f982d6e35d0b6a2b7e_icon-our-services-02-growth-template.svg",
          label: "SEO Audit",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f982d6e35d0b6a2b7e_icon-our-services-02-growth-template.svg",
          label: "Keyword Research",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f982d6e35d0b6a2b7e_icon-our-services-02-growth-template.svg",
          label: "Link Building Strategy",
        },
      ],
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e053a168c0be1a0cf60_icon-service-03-growth-template.svg",
      Heading: "Paid Advertising",
      bg: "bg-yellow-100",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f964f15b664ddadea3_icon-our-services-03-growth-template.svg",
          label: "Ads A/B Testing",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f964f15b664ddadea3_icon-our-services-03-growth-template.svg",
          label: "CR Optimization",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f964f15b664ddadea3_icon-our-services-03-growth-template.svg",
          label: "Retargeting",
        },
      ],
    },
    {
      Icon:"https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e05a224a36b43f65ad0_icon-service-04-growth-template.svg",
      bg: "bg-red-100",
      Heading: "Funnel Optimazation",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "UX Analysis",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Funnel Audit",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "CR Optimazation",
        },
      ],
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e05b5fe6dd8ea8f2039_icon-service-05-growth-template.svg",
      bg: "bg-red-100",
      Heading: "Advaced Analytics",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f9e4d49e3dd972d40b_icon-our-services-05-growth-template.svg",
          label: "Goals & Target Setup",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f9e4d49e3dd972d40b_icon-our-services-05-growth-template.svg",
          label: "User Analytics",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04f9e4d49e3dd972d40b_icon-our-services-05-growth-template.svg",
          label: "Heat Map Analytics",
        },
      ],
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e0597194f3f8bae43c4_icon-service-06-growth-template.svg",
      bg: "bg-teal-100",
      Heading: "Content Marketing",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04fb8765116e2795856b_icon-our-services-06-growth-template.svg",
          label: "Content Plan",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04fb8765116e2795856b_icon-our-services-06-growth-template.svg",
          label: "Content Creation",
        },
        {
          Icon: "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b04fb8765116e2795856b_icon-our-services-06-growth-template.svg",
          label: "Community Management",
        },
      ],
    },
  ];

  
  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto ">
        <div className="flex md:px-5  flex-wrap ">
          {ListOne.map((list) => {
            return (
              <div className="xl:w-1/3 md:w-auto w-full md:px-3 mb-5  md:w-1/2 ">
                <div className="border  md:w-auto w-full border-2 mx-auto mt-5  p-6 border-gray-200 hover:border-indigo-500   rounded-3xl">
                  <div
                    className={`${list.bg} w-20 h-20 inline-flex items-center justify-center rounded-2xl  text-indigo-500 mb-4`}>
                   <img src= {list.Icon}/>
                  </div>
                  <h2 className=" mt-5 font-bold  text-gray-900 text-2xl md:text-2xl  mb-2">
                    {list.Heading}
                  </h2>
                  <p className="leading-relaxed mt-5 text-base">{list.para}</p>
                  {list.sublist.map((list) => {
                    return (
                      <div className=" mt-8 w-full">
                        <div className=" rounded flex  ">
                        <img src= {list.Icon}/>
                          <span className="title-font ml-5 w-full">
                            {list.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
   
        </div>
      </div>
    </section>
    <div className="flex mx-auto mb-8 mt-5 md:px-56  lg:w-2/3   sm:flex-row flex-col mx-auto  sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="mx-auto mx-auto ">
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
          
            <CustomButton
              label="Learn More"
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
    </>
  );
};

export default ServicesBox;
