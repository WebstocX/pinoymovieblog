import Head from 'next/head';
import React from 'react';

function about(props) {
    return (
        <>
        <Head>
            <title>About Us</title>
        </Head>
        <div className="container px-10 py-10">
            <h2 className="mt-5 text-2xl">About Us</h2>
<p className="mt-5">Movie review & lyrics site</p>
<p className="mt-5">If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <strong>jadhavsagar.live@gmail.com</strong></p>

           </div>
           </>
    );
}

export default about;