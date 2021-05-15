import React from "react";
import CustomButton from "./componenets/atoms/button";

interface ConatctProps {}
const Conatct: React.FC<ConatctProps> = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:px-10 py-0  py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:-mt-96   md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
              Contact us
            </span>

            <span className=" md:text-4xl text-5xl   md:leading-1 font-bold   mb-4 text-gray-700">
              Let’s work together
            </span>
            <p className="mb-8 leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin
              viverra ullamcorper ac, eget.
            </p>
            <div className=" justify-center">
              <span className="font-bold text-indigo-900 text-lg">
                Conatct Information
              </span>
              <div className="mt-5 w-full">
                <div className=" rounded flex  ">
                  <img
                    src={
                      "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3c2b534b173a6717fe13ee_icon-contact-01-growth-template.svg"
                    }
                  />
                  <span className="text-lg mt-3 hover:text-indigo-700 ml-5 w-full">
                    <a href="mailto:webstocx@gmail.com">WebStocx@gmail.com</a>
                  </span>
                </div>
              </div>
              <div className="mt-5 w-full">
                <div className=" rounded flex  ">
                  <img
                    src={
                      "https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f3c2b533d8918d029c0de55_icon-contact-02-growth-template.svg"
                    }
                  />
                  <span className="text-lg mt-3 tracking-wider hover:text-indigo-700 ml-5 w-full">
                    <a href="tel:+917718960840">+917718960840</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex-grow rounded-3xl border-2 border-gray-200 md:py-12 py-5 px-5 shadow-5xl w-full  md:w-1/2  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
            <div className="flex  lg:w-1/2 w-full md:px-5 text-left  md:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start text-start">
              <div className="relative mb-5 ">
                <label className="mb-8 font-bold  ml-2 md:ml-0  md:ml-2">
                  Name
                </label>
                <input
                  className={
                    " mt-3 md:h-18 border-2 text-sm border-gray-200 md:ml-0 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }
                  placeholder="What's Your Name?"
                />
              </div>
              <div className="relative mb-5 ">
                <label className="mb-8 font-bold   md:ml-0  md:ml-2">
                  Email Address
                </label>
                <input
                  className={
                    " mt-3 md:h-18 border-2 -ml-3 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }
                  placeholder="What's Your Email  ?"
                />
              </div>
            </div>
            <div className="flex  lg:w-1/2 w-full md:px-5 text-left  md:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start text-start">
              <div className="relative mb-5 mt-5 md:mt-0 ">
                <label className="mb-8 font-bold  ml-2 md:ml-0  md:ml-2">
                  Company
                </label>
                <input
                  className={
                    " mt-3 md:h-18 border-2 text-sm md:ml-0 border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }
                  placeholder="What's your company name?"
                />
              </div>
              <div className="relative mb-5 ">
                <label className="mb-8 font-bold   md:ml-0  md:ml-2">
                  Budget
                </label>
                <select
                  className={
                    "appearance-none mt-3 md:h-18 border-2 bg-white text-gray-400 -ml-3 md:ml-0 text-sm border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <option>₹5000 - ₹10000</option>
                  <option>₹10000 - ₹15000</option>
                  <option>₹20000 - ₹25000</option>
                  <option>₹25000 - ₹30000</option>
                </select>
              </div>
            </div>

            <span className="md:mt-5 font-bold md:ml-5 mb-8 -ml-2  mt-8">
              {" "}
              Services you are interested on
            </span>
            <div className="flex  lg:w-1/2 w-full md:px-5 text-left  md:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start text-start">
              <div className="relative  ">
                <div
                  className={
                    " mt-3 md:h-18 border-2 flex flex-row ml-1 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-3xl mr-4"
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e053a168cf0eea0cf5f_icon-service-01-growth-template.svg"
                  />

                  <span className="font-bold leading-2 mt-2 text-medium -ml-2 tracking-normal">
                    Social Media Marketing
                  </span>
                  <input
                    type="checkbox"
                    className=" h-8 mt-3 w-8 form-checkbox"
                  />
                </div>
              </div>
              <div className="relative  ">
                <div
                  className={
                    " mt-3 md:h-18 border-2 flex flex-row -ml-3 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-3xl mr-4"
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e04be853418b0ac3e01_icon-service-02-growth-template.svg"
                  />

                  <span className="font-bold leading-2 mt-2 text-medium -ml-2 tracking-normal">
                    Search Engine Optimization
                  </span>
                  <input
                    type="checkbox"
                    className=" h-8 mt-3 w-8 form-checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="flex  lg:w-1/2 w-full md:px-5 text-left  md:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start text-start">
              <div className="relative  ">
                <div
                  className={
                    " mt-3 md:h-18 border-2 flex flex-row ml-1 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-3xl mr-4"
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e053a168c0be1a0cf60_icon-service-03-growth-template.svg"
                  />

                  <span className="font-bold leading-2 mt-2 text-medium -ml-2 tracking-normal">
                    Paid Advertising
                  </span>
                  <input
                    type="checkbox"
                    className=" h-8 mt-3 w-8 form-checkbox"
                  />
                </div>
              </div>
              <div className="relative  ">
                <div
                  className={
                    " mt-3 md:h-18 border-2 flex flex-row -ml-3 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-3xl mr-4"
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e05a224a36b43f65ad0_icon-service-04-growth-template.svg"
                  />

                  <span className="font-bold leading-2 mt-2 text-medium -ml-2 tracking-normal">
                    Funnel Optimization
                  </span>
                  <input
                    type="checkbox"
                    className=" h-8 mt-3 w-8 form-checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="flex  lg:w-1/2 w-full md:px-5 text-left  md:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start text-start">
              <div className="relative  ">
                <div
                  className={
                    " mt-3 md:h-18 border-2 flex flex-row ml-1 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-3xl mr-4"
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e05b5fe6dd8ea8f2039_icon-service-05-growth-template.svg"
                  />

                  <span className="font-bold leading-2 mt-2 text-medium -ml-2 tracking-normal">
                    Advanced Analytics
                  </span>
                  <input
                    type="checkbox"
                    className=" h-8 mt-3 w-8 form-checkbox"
                  />
                </div>
              </div>
              <div className="relative  ">
                <div
                  className={
                    " mt-3 md:h-18 border-2 flex flex-row -ml-3 md:ml-0 text-sm  border-gray-200 w-64 hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                  }>
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-3xl mr-4"
                    src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f357e0597194f3f8bae43c4_icon-service-06-growth-template.svg"
                  />

                  <span className="font-bold leading-2 mt-2 text-medium -ml-2 tracking-normal">
                    Content Marketing
                  </span>
                  <input
                    type="checkbox"
                    className=" h-8 mt-3 w-8 form-checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5 w-full text-left md:h-36  mt-8 ">
              <label className="mb-8 font-bold  ml-2 md:ml-0  md:ml-2">
                Message
              </label>
              <textarea
                className={
                  " mt-3 h-full border-2 text-sm hover:border-indigo-500 border-gray-200 md:ml-0 w-full hover:outline:none focus:outline-none focus:border-none rounded-xl p-5 "
                }
                placeholder="What can we help you with?"
              />
            </div>
            <CustomButton
              label="Send"
              children={null}
              click={null}
              classN={
                "duration-500 md:mt-10 md:ml-3 mb-8 md:mb-0 w-full hover:ease-in-out transform hover:scale-110 hover:shadow-2xl bg-indigo-500 border-2 border-gray-200 md:h-18 text-white rounded-xl p-4 md:w-48"
              }
            />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Conatct;
