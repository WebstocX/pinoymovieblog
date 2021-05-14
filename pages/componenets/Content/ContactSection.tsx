import React from "react";

interface ConatctSectionProps {}
const ConatctSection: React.FC<ConatctSectionProps> = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container md:px-24 mt-10 md:py-12 py-10 mx-auto">
        <div className="flex flex-col text-center justify-center items-center w-full mb-8">

          <span className=" md:text-5xl text-3xl   leading-1 font-bold   mb-4 text-gray-700">
          Need help with a project?
          </span>
          <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-base">
            We have wonderful types of technological expertise, they will help
            you as kind of digital partner with the type of end to end solution
            services.
          </p>
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
  <div className="container px-48 py-10 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/2 md:w-full">
          
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default ConatctSection;
