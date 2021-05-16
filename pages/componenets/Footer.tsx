import Link from 'next/link';
import React from 'react';

function Footer(props) {
    return (
      <footer className="text-gray-600 body-font">
      <div className="md:block hidden  container px-24 -mt-16 py-4 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
        
         
        <div className="w-64  flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Link href="/">
              <img className="md:w-16 w-16" src="/LOGO.png"/>
              </Link>
        <span className="-ml-1 text-xl">WebStocX</span>
      </a>
      <p className="mt-2 ml-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>
    </div>
    <div className="flex-grow flex flex-wrap  leading-12 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4   md:w-1/2 w-full px-12">
        <h2 className="text-gray-900 font-bold tracking-widest text-xl mb-3">Pages</h2>
        <nav className="list-none  mb-10">
          <Link href="/">
          <li className="mb-3 cursor-pointer">
            <a className="text-gray-600  hover:text-indigo-800">Home</a>
          </li>
          </Link>
          <Link href="/services">
          <li className="mb-3 cursor-pointer">
            <a className="text-gray-600  hover:text-indigo-800">Services</a>
          </li>
          </Link>
          <Link href="/pakages">
          <li className="mb-3 cursor-pointer">
            <a className="text-gray-600  hover:text-indigo-800">Our Pakages</a>
          </li>
          </Link>
          <Link href="/contact">
          <li className="mb-3 cursor-pointer">
            <a className="text-gray-600  hover:text-indigo-800">Contact Us</a>
          </li>
          </Link>
          <Link href="/about">
          <li className="mb-3 cursor-pointer">
            <a className="text-gray-600  hover:text-indigo-800">About Us</a>
          </li>
          </Link>
          
        </nav>
      </div>
      </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-24 py-6 mx-auto flex items-center lg:flex-row flex-col">
          <a className="flex md:mt-0  title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Link href="/">
              <img className="md:w-16 w-16" src="/LOGO.png"/>
              </Link>
            <span className="-ml-1 text-xl">WebstocX</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6  mt-2 md:mt-0">© 2021 WebstocX 
          </p>
          <span className="inline-flex md:ml-auto  md:mt-0 mt-5 justify-center sm:justify-start">
            <a className="text-gray-500" href="https://www.facebook.com/web.stocx" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a> */}
            <a className="ml-3 text-gray-500" href="https://www.instagram.com/webstocx/" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/web-stocx-744595212/" target="_blank">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
    );
}

export default Footer;




