import React from "react";
import CustomButton from "../atoms/button";

interface OurOfficeProps{
  
}
const OurOffice:React.FC<OurOfficeProps> = () => {
  return (
      <>
      <section  className="text-gray-600 body-font">
        <div className="container mx-auto flex md:px-10  py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className="text-indigo-500 md:text-xl textt-center mb-2 ">
            our offices
            </span>

            <span className=" md:text-4xl text-4xl   leading-1 font-bold   mb-4 text-gray-700">
            Come to visit our offices through the globe
            </span>
            <p className="mb-8 leading-relaxed">
           We are located in city of dreams Mumbai to get your business & dream website to next level by adding it on internet with some key features 
           if your are in mumbai give us a visit (post covid)
            </p>
           
          </div>
          <div className="lg:max-w-lg shadow-xl rounded-5xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl  -p-16 rounded-5xl shadow-2xl object-center rounded-3xl"
              alt="hero"
              src="https://assets.website-files.com/5f35521e2ed7d9ce30e9aa4e/5f481c17ecad0884eb94fee0_about-office-2-growth-template.jpg"
            />
          </div>
        </div>
      </section>
      </>
  )
}

export default OurOffice
