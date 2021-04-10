import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
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
