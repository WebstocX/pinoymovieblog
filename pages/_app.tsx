import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import Header from './componenets/Header'
import Head from 'next/head'
import Footer from './componenets/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <Head  >
     <title>WebStocx</title>
     <meta charSet='utf-8' />
     <link rel="icon" 
      type="image/png" 
      href="/icon-512x512.png"/>
  
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='Website Design and Development Services Develop your Website with us in pocket friendly budget, We provide you great innovative to grow your business and sales with our strategies. ' />
      <meta name='keywords' content='Website Development, Website Design, Website Development Agency, Website Making, Business Website Development, Low cost Website Development ' />
      <link rel='manifest' href='/manifest.json' />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
       <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <link rel='apple-touch-icon' href='/icon-512x512.png'></link>
      <meta name='theme-color' content='#317EFB' />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name="google-site-verification" content="8gmB9T9e8CwgviKIOsGfCCZPO_slq_vfHPPOIVsLjik" />

     </Head>
    <Header/>
    <Component   {...pageProps} />
    
    <Footer/>
     
     </>
   
  )
  
  
}

export default MyApp
