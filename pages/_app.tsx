import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import Header from './componenets/Header'
import Head from 'next/head'
import Footer from './componenets/Footer'

function MyApp({ Component, pageProps }) {
 

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
      <meta name='description' content='WebStocx Digital Marketing Agency ' />
      <meta name='keywords' content='Keywords' />
      <link rel='manifest' href='/manifest.json' />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
       <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <link rel='apple-touch-icon' href='/icon-512x512.png'></link>
      <meta name='theme-color' content='#317EFB' />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
       
     </Head>
    <Header/>
    <Component   {...pageProps} />
    <img onClick={()=>{
      document.location.href =  "https://wa.me/917039384232?text=Need Buusiness Related Query Give me a call Or Write Your Custom Message :- "
    }} className="what h p-0 md:hidden z-50 rounded-3xl bg-black " src="https://img-premium.flaticon.com/png/512/733/733585.png?token=exp=1621176067~hmac=9e77819eadfa7d7ff221caa9801c5607"></img>
    <Footer/>
     
     </>
   
  )
  
  
}

export default MyApp
