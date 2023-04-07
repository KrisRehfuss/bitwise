import Head from "next/head";
import Link from 'next/link'
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import BannerImage from "../../public/Explode.png";
import Cover from "../../public/Explode.png";
import Drop from "../../public/ExplodeVert.png";
import { useRouter } from 'next/router';
import Banner from "./Banner";
import Header from "./Header";
import SkillTree from "./SkillTree";
import { BsSun } from "react-icons/bs";
import Footer from "./Footer";
import Top from "./Top";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdPiano } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";// import Synth from '../../public/SynthB.png'ynth from '../../public/SynthB.png'



export default function Splash() {
   const router = useRouter();

   const [DropChanger, setDropChanger] = useState(Cover);

   useEffect(() => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const newImageUrl = window.innerWidth >= 1440 ? Cover : Drop;
      if (!isMobile) {
         router.push("/");
      }
      setDropChanger(newImageUrl);
   }, []);

   return (
      <div className="scroll-smooth h-fit bg-whiteish dark:bg-coal Smoother">
         <Head>
            <title>Kris Dashboard </title>
            <meta name="description" content="Splash" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/DNA.svg" />
         </Head>





         {/* Container */}
         <div className="FlexCenterCol font-pop h-screen w-screen">
            {/* <Banner image={BannerImage} /> */}


         {/*  */} 
            <Image
               src={DropChanger}
               className="absolute"
               layout='fill'
               objectFit='cover'
               alt='#'
            />


            <div className="z-20 flex flex-col xl:items-center xl:justify-center items-end justify-end gap-8 BoxFull p-4">

               <Link href='/'>
                  <div className="SplashLinks xl:mr-36">
                     <AiOutlineHome className=' w-5 h-5' /><p className='ml-2'>Home Page</p> 
                  </div>
               </Link>

               <Link href='/ModernSynth'>
                  <div className="SplashLinks">
                     <MdPiano className='w-5 h-5' /><p className='ml-2'>Modern Synth</p> 
                  </div>
               </Link>

               <a href='https://open.spotify.com/artist/3je0rpoLMnH2doxB43msGn'>
                  <div className="SplashLinks xl:ml-36">
                     <SlSocialSpotify className='w-5 h-5' /><p className='ml-2'>Prismatic EP</p> 
                  </div>
               </a>

            </div>

            


            {/* // Footer */}
            <div className="flex items-center xl:justify-evenly justify-between mt-24 mb-6 z-50">

               <div className="flex items-center xl:justify-center xl:gap-12 justify-evenly w-screen h-fit p-2">

                  {/* LinkedIn */}
                  <div className="text-3xl text-whiteish hover:text-Pinkk Smooth w-fit h-fit p-2">
                     <a href="https://www.linkedin.com/in/krisrehfuss/">
                        <AiFillLinkedin />
                     </a>
                  </div>

                  {/* Github */}
                  <div className="text-3xl text-whiteish hover:text-Pinkk Smooth w-fit h-fit p-2">
                     <a href="https://github.com/KrisRehfuss">
                        <AiOutlineGithub />
                     </a>
                  </div>


                  {/* Insta */}
                  <div className="text-3xl text-whiteish hover:text-Pinkk Smooth w-fit h-fit p-2">
                     <a href="https://www.instagram.com/krismatic__/">
                        <AiOutlineInstagram />
                     </a>
                  </div>



               </div>
            </div>

         </div>
      </div>
   );
}