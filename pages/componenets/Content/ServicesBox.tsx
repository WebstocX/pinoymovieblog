import React from "react";
import Icons from "../../constatnts/Icons";
import CustomButton from "../atoms/button";

interface ServicesProps {}
const Services: React.FC<ServicesProps> = () => {
  const ListOne = [
    {
      Icon: <Icons type="Like" />,
      Heading: "Social Media Marketing",
      bg: "bg-blue-100",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: <Icons type="Right" />,
          label: "PPC/SEM",
        },
        {
          Icon: <Icons type="Right" />,
          label: "Display Advertising",
        },
        {
          Icon: <Icons type="Right" />,
          label: "Facebook & Google Advertising",
        },
      ],
    },
    {
      Icon: <Icons type="Search" />,
      Heading: "Search Engine Optimization",
      bg: "bg-indigo-100",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: <Icons type="RightP" />,
          label: "SEO Audit",
        },
        {
          Icon: <Icons type="RightP" />,
          label: "Keyword Research",
        },
        {
          Icon: <Icons type="RightP" />,
          label: "Link Building Strategy",
        },
      ],
    },
    {
      Icon: <Icons type="PA" />,
      Heading: "Paid Advertising",
      bg: "bg-yellow-100",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: <Icons type="RightY" />,
          label: "Ads A/B Testing",
        },
        {
          Icon: <Icons type="RightY" />,
          label: "CR Optimization",
        },
        {
          Icon: <Icons type="RightY" />,
          label: "Retargeting",
        },
      ],
    },
    {
      Icon: <Icons type="Filter" />,
      bg: "bg-red-100",
      Heading: "Funnel Optimazation",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: <Icons type="RightR" />,
          label: "UX Analysis",
        },
        {
          Icon: <Icons type="RightR" />,
          label: "Funnel Audit",
        },
        {
          Icon: <Icons type="RightR" />,
          label: "CR Optimazation",
        },
      ],
    },
    {
      Icon: <Icons type="GA" />,
      bg: "bg-red-100",
      Heading: "Advaced Analytics",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: <Icons type="RightY" />,
          label: "Goals & Target Setup",
        },
        {
          Icon: <Icons type="RightY" />,
          label: "User Analytics",
        },
        {
          Icon: <Icons type="RightY" />,
          label: "Heat Map Analytics",
        },
      ],
    },
    {
      Icon: <Icons type="CM" />,
      bg: "bg-teal-100",
      Heading: "Content Marketing",
      para: "The way you got your brand know to your valuable customer We assure to get that adorable reach to your customers.",
      sublist: [
        {
          Icon: <Icons type="RightB" />,
          label: "Content Plan",
        },
        {
          Icon: <Icons type="RightB" />,
          label: "Content Creation",
        },
        {
          Icon: <Icons type="RightB" />,
          label: "Community Management",
        },
      ],
    },
  ];

  
  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container  ">
        <div className="flex md:px-5 ml-8 flex-wrap ">
          {ListOne.map((list) => {
            return (
              <div className="xl:w-1/3 md:w-auto w-full md:px-3 mb-5  md:w-1/2 ">
                <div className="border md:w-auto w-full border-2 mx-auto mt-5  p-6 border-gray-200 hover:border-indigo-500   rounded-3xl">
                  <div
                    className={`${list.bg} w-20 h-20 inline-flex items-center justify-center rounded-2xl  text-indigo-500 mb-4`}>
                    {list.Icon}
                  </div>
                  <h2 className="text-lg mt-5 font-bold w-full text-gray-900 text-2xl  mb-2">
                    {list.Heading}
                  </h2>
                  <p className="leading-relaxed mt-5 text-base">{list.para}</p>
                  {list.sublist.map((list) => {
                    return (
                      <div className=" mt-8 w-full">
                        <div className=" rounded flex  ">
                          {list.Icon}
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
    <div className="flex mb-8 mt-5 lg:w-2/3 justify-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative ">
            <CustomButton
              label="Contact Us"
              children={null}
              click={null}
              classN={
                "transform hover:scale-110 transition-all hover:shadow-2xl	 motion-reduce:transform-none bg-indigo-500 md:h-18 text-white rounded-xl p-4 md:w-48"
              }
            />
          </div>
          <div className="relative ">
            <CustomButton
              label="Learn More"
              children={null}
              click={null}
              classN={
                "transform hover:scale-110 transition-all hover:shadow-2xl	 motion-reduce:transform-none bg-white border-2 border-gray-200 md:h-18 text-black rounded-xl p-4 md:w-48"
              }
            />
          </div>
        </div>
    </>
  );
};

export default Services;
