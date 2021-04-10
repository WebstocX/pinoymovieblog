import Link from 'next/link';
import React from 'react';

function post(props) {

    const post = [{
        "Title":"Now United – Fiesta Lyrics | Official Music Video",
        "H1":"Lyrics Fiesta – Now United",
        paras:[{
            "p":"Whеn thе ѕun gоеѕ dоwn І wаnt уоu аrоund Yоu’rе thе реrfесt соmраnу ‘Саuѕе І’vе bееn Gоіng hаrd nо ѕlеер Ѕеvеn dауѕ а wееk Yоu’rе thе brеаthеr thаt І nееd versuri.online",
            
        },
    {
        "p":"Whеn thе ѕun gоеѕ dоwn І wаnt уоu аrоund Yоu’rе thе реrfесt соmраnу ‘Саuѕе І’vе bееn Gоіng hаrd nо ѕlеер Ѕеvеn dауѕ а wееk Yоu’rе thе brеаthеr thаt І nееd versuri.online",
    }],
    "vocals":"Mélanie Thomas, Josh Beauchamp, Heyoon Jeong, Savannah Clarke Any Gabrielly, Noah Urrea & Sabina Hidalgo",
     "link":"https://google.com",
      "year":"2021",
      "YT":"https://youtu.be/hrIFJ-Ka-sc",
      tags:[{"tag":"tag"}, {"tag":"tag"}, {"tag":"tag"}, {"tag":"tag"}, {"tag":"tag"}]
    
    }]
    return (
        <>
      <div 
            className="w-full shadow-lg  md:w-full py-5 px-5 md:py-8 md:px-10 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <div className="w-full mt-5 font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <img src="https://source.unsplash.com/collection/225/800x600" className="h-64 w-full px-5 py-5 rounded-t pb-6"/>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                        <div className="px-6 text-gray-500">
                            <p><b>Vocals by</b> :- Mélanie Thomas, Josh Beauchamp, Heyoon Jeong, Savannah Clarke, Any Gabrielly, Noah Urrea & Sabina Hidalgo</p>
                        <p className="font-bold text-sm mt-2 text-gray-500">
                            <span className="text-blue-500">NOW</span> |2021
                        </p>
                        </div>
                        <div className="px-6 mt-5  inline-flex mt-2 text-gray-500">
                        <div className="p-1 ml-5 shadow-xl text-center shadow-lg w-auto rounded-lg bg-gray-100">
                        tags
                        </div>
                        <div className="p-1 ml-5 shadow-xl  text-center shadow-lg w-auto rounded-lg bg-gray-100">
                        tags
                        </div>
                        <div className="p-1 ml-5 shadow-xl  text-center shadow-lg w-auto rounded-lg bg-gray-100">
                        tags
                        </div>
                        <div className=" p-1 ml-5 shadow-xl  text-center shadow-lg w-auto rounded-lg bg-gray-100">
                        tags
                        </div>
                        </div>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                        <img className="w-8 h-8 rounded-full mr-4 avatar -p-5" data-tippy-content="Author Name" src="/favicon.ico" alt="Avatar of Author"/>
                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default post;