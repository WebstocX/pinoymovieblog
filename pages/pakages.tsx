import { useRouter } from "next/router";
import React from "react";
import CustomButton from "./componenets/atoms/button";

interface PakagesProps {}
const Pakages: React.FC<PakagesProps> = () => {
  const router = useRouter();
  const ListOne = [
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9663ce9aa51/5f3afb6ce4d49eada172bf4b_icon-package-01-growth-template.svg",
      Heading: "Standard",
      Cost: "5999",
      bg: "bg-blue-100",
      para: "This is our base plan to get your busniess online with affordable price & more services you will ever get at this range.",
      sublist: [
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "1 year Domain ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "1 year hosting",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "6 months of website management ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "24/7 Tech support ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "4 to 6 template ",
        },
    
      ],
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9663ce9aa51/5f3afe16d4e2850f698b055c_icon-package-02-growth-template.svg",
      Heading: "Premium",
      Cost: "13,999",
      bg: "bg-blue-100",
      para: "This is our most affordable plan for any well settled business to get there store online in single click you just need to contact us rest will handle by our team",
      sublist: [
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "1 year Domain ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "1 year hosting ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "9 months of website management ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "24/7 support ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "6 to 10 & above template ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Social Media Marketing ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "SEO ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Installable Web App (PWA)",
        },
        {

          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",

          label: "Redesigning ",

        },
      ],
    },
    {
      Icon: "https://assets.website-files.com/5f35521e2ed7d9663ce9aa51/5f3b00980b5427bfcfba5d4d_icon-package-03-growth-template.svg",
      Heading: "Deluxe",
      Cost: "16,999",
      bg: "bg-blue-100",
      para: "We don't lie to our customers so this plan is for big buiness to get you online and grow your business through advertising & marketing this is the mosr effective to grow your sales ",
      sublist: [
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "2 year Domain ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "2 year hosting ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "24 months of website management ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "24/7 Tech support   ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "15 template & above",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Customization as per the requirements  ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Instant Response Support  ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Social media marketing  ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "SEO Services  ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Social media marketing  ",
        },
        {

          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",

          label: "Premium Logo Service",

        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Installable Web App (PWA) ",
        },
        {
          Icon: "5f3b04f9d4e28544078b158e_icon-our-services-04-growth-template.svg",
          label: "Whatsapp Direct Chat Feature ",
        },
      ],
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container md:px-56 md:py-12 py-10 mx-auto">
          <div className="flex flex-col text-center justify-center items-center w-full mb-8">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              packages
            </span>
            <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
              Tailor-made packages to help your business grow
            </span>
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
              Get your dream website in your budget with all high-tech features oly on WebStocx 
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mb-10">
        <div className="container mx-auto ">
          <div className="flex md:px-5  flex-wrap ">
            {ListOne.map((list) => {
              return (
                <div
                  className="xl:w-1/3  md:w-auto w-full md:px-3 mb-5  md:w-1/2 "
                  style={{
                    alignContent: "center !important",
                    justifyContent: "center !important",
                    alignItems: "center !important",
                    textAlign: "center",
                  }}>
                  <div className="border  md:w-auto w-full border-2 mx-auto mt-16  p-6 border-gray-200 hover:border-indigo-500   rounded-3xl">
                    <div
                      className={`${list.bg}  w-20 h-20 inline-flex  rounded-2xl  text-indigo-500 mb-4`}
                      style={{
                        alignContent: "start !important",
                        justifyContent: "start !important",
                        alignItems: "start !important",
                        textAlign: "start",
                      }}>
                      <img src={list.Icon} />
                    </div>
                    <h2 className=" mt-5 font-bold  text-gray-900 text-2xl md:text-2xl  mb-2">
                      {list.Heading}
                    </h2>
                    <h2 className=" mt-5 font-bold  text-gray-900 text-2xl md:text-2xl  mb-2">
                      ₹{list.Cost}
                    </h2>
                    <p className="leading-relaxed mt-5 text-base">
                      {list.para}
                    </p>
                    {list.sublist.map((list) => {
                      return (
                        <div
                          className="mb-5 mt-8 w-full"
                          style={{
                            alignContent: "start !important",
                            justifyContent: "start !important",
                            alignItems: "start !important",
                            textAlign: "start",
                          }}>
                          <div className=" rounded flex  ">
                            <img src={list.Icon} />
                            <span className="title-font ml-5 w-full">
                              {list.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <CustomButton
                    label="Add To Cart"
                    classN={
                      "duration-500  w-56 -mt-8 -ml-24  md:-mt-8 absolute md:-ml-28 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl mb-8 bg-indigo-500 border-2 border-gray-200 md:h-18 text-white rounded-xl p-4 md:w-56"
                    }
                    click={()=>{
                      router.push("/contact")
                    }}
                    children={null}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-600  body-font md:px-16 md:py-24 py-20 ">
        <div className="container  border-t-8 border rounded-2xl border-indigo-500 flex felx-col md:px-56 md:py-12  mx-auto">
          <div className="w-full   md:w-1/2">
            <img
              className="md:-ml-16  ml-16 md:mt-10"
              src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3b08300f15a50b635bb1db_image-packages-contact-us-growth-template.svg"
            />
          </div>
          <div className="w-full   md:w-1/2">
            <div className="md:ml-0 md:mt-0 -ml-28 mt-40">
              <span className="font-bold  text-2xl w-96 ">
                Need help with a custom marketing campaign?
              </span>
              <p className="w-full md:mt-5 mt-5">
                Here's a advice on finding good.. Check out our services and
                Projects that would help you out to make a decision. Get In
                touch Today! You will definitely get the satisfaction once you
                touch with us We get you to find a solution on your Ideas with
                your Business on a digital platform.
              </p>
              <CustomButton
                label="Conatct Us"
                click={() => {
                  router.push("/contact");
                }}
                classN={
                  "duration-500  w-56 mt-5 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl mb-8 md:mb-0 bg-indigo-500 border-2 border-gray-200 md:h-18 text-white rounded-xl p-4 md:w-56"
                }
                children={null}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pakages;
