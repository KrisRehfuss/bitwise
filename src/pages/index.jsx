import Head from "next/head";
import Boxes from "./Boxes"
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router';


export default function Home() {

 


  return (
    <div className="MAIN Smoother">
      <Head>
        <title>Bitwise Practice</title>
        <meta name="description" content="Home" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/globe.png" />
      </Head>



        {/* Container */}
      <div className="border-2 flex flex-col font-pop BoxScreen">
        {/* Name */}
          <div className="BoxFit border-b pb-8 m-4 p-4 lg:m-8 lg:p-8 ">
            <p className="lg:p-4 pb-4 lg:text-4xl text-3xl">Bitwise AND Operation</p>
            <p className="lg:px-4 text-lg">Networking Practice</p>
          </div>

          <Boxes />
          <Boxes />
          <Boxes />
          


        

          
      
        </div>
      {/* </main> */}
    </div>
  );
}
