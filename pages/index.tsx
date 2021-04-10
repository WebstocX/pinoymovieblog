import React from 'react';
import Head from "next/head";
import Post from './componenets/Post';

export default function Home() {
  return (
    <>
     <Head>
     <title>Movie & Lyrics Blog</title>
     </Head>
    <Post/>
    </>
  )
}
