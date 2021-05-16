import React from 'react';
import Head from "next/head";
import AboutSection from './componenets/Content/AboutSection';
import Box1 from './componenets/Content/Box1';
import Box2 from './componenets/Content/Box2';
import ConatctSection from './componenets/Content/ContactSection';
import OurProcess from './componenets/Content/OurProcess';
import ServicesBox from './componenets/Content/ServicesBox';

export default function Home() {
  return (
    <>
    <div style={{overflowX:'hidden'}}>
     <Head >
     <title>WebStocx</title>
     <link rel="preconnect" href="https://fonts.gstatic.com"/>
       <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
     </Head>
     <Box1/>
     <Box2/>
     <ServicesBox/>
     <AboutSection/>
     <OurProcess/>
     <ConatctSection/>
     </div>
    </>
  )
}
