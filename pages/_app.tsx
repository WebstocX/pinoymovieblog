import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])
  return (
    <>
    <Head>
     <title>Movie & Lyrics Blog</title>
     </Head>
    <Header/>
    <Component {...pageProps} />
     <Footer/>
     </>
   
  )
  
  
}

export default MyApp
