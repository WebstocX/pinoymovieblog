import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import Header from './componenets/Header'
import Head from 'next/head'

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
    
     
     </>
   
  )
  
  
}

export default MyApp
