import Link from 'next/link';
import React from 'react';

function Footer(props) {
    return (
    <footer className="text-white bg-gray-800 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href="/">
    <a className=" cursor-pointer flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <img src="/popcorn.svg" width="40vw"/>
      <span className="ml-3 hover:text-blue-500 text-white text-xl">PinoyMovieBlog</span>
    </a>
    </Link>
   
    <p className="text-sm sm:ml-5 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 hover:text-blue-500 cursor-pointer sm:mt-0 mt-4">© 2020 PinoyMovieBlog 
      <a href="https://twitter.com/knyttneve" className=" ml-1" rel="noopener noreferrer" target="_blank"></a>
    </p>
    
    <span className="inline-flex md:text-start text-center sm:ml-auto sm:mt-0 mt-4 ">
    <p className="text-sm md:text-start text-center sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    All the lyrics on this website are the copyrighted property of their respective owners, provided for educational purposes and personal use only
    </p>
    </span>
  </div>
  <div className=" px-5 py-5  text-center  md:px-64 md:py-8 bg-gray-700">
  <Link href="/">
    <a href="#" className="mt-10 hover:text-blue-500  text-white  text-sm font-medium" aria-current="page">Home</a>
    </Link>
    <Link href="/about">
    <a href="#" className="md:ml-24 ml-5 hover:text-blue-500  text-white  text-sm font-medium" aria-current="page">About us</a>
    </Link>
    <Link href="/contact">
    <a href="#" className="md:ml-24 ml-5 hover:text-blue-500  text-white  text-sm font-medium" aria-current="page">Contact Us</a>
    </Link>
    <Link href="/privacy-policy">
    <a href="#" className="md:ml-24 ml-5  hover:text-blue-500  text-white  text-sm font-medium" aria-current="page">Privacy Policy</a>
    </Link>
    <Link href="/disclaimer">
    <a href="#" className="md:ml-24 ml-5 hover:text-blue-500  text-white  text-sm font-medium" aria-current="page">Disclaimer</a>
    </Link>
    
  </div>
</footer>
    );
}

export default Footer;