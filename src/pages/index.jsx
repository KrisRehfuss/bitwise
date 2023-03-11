import Head from "next/head";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wine Match Match </title>
        <meta name="description" content="Kris Dash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />

        {/* Wrapper Start */}
        <div className=" FlexCenterCol mt-8 font-pop BoxScreen">
          <div className="md:max-w-5xl FlexCenterCol p-2  h-fit min-h-fit w-full">
            {/* Header */}
            <h1 className="md:text-5xl cursor-text text-gray-300 text-4xl font-extrabold text-center">
              Rapidly compare wines without changing tab.
            </h1>

            {/* Caption */}
            <p className=" my-5 mb-5 leading-7 text-base text-gray-400 font-semibold text-center">
              The most extensive source of wines, spumanti and champagnes.
            </p>

            <div className=" FlexCenter items-center w-full px-64 space-x-7">

              <button className="md:w-3/6 md:px-1 w-full py-2 p-2 Shadow rounded-3xl font-semibold text-xl text-gray-200 bg-indigo-700 ">
                Explore All
              </button>

              <button className="md:w-11/12 md:mx-4 md:p-2 md:my-0 flex items-center w-full mt-3 p-3 px-4 Shadow rounded-3xl text-left font-extralight text-sm text-gray-400 bg-gray-700 bg-opacity-50 ">
                <BiSearch className="text-2xl mr-1 text-indigo-800" />
                Search for product, producer, region...
              </button>
            </div>

            <div className="h-screen w-full bg-gradient-to-br from-LeftG via-MidP to-RightG MARK mx-4 mt-6">
              <div className="w-full h-fit p-3">
                <h1 className="text-2xl text-gray-300 NameShadow font-bold">
                  Best Picks
                </h1>
                <p className="text-gray-400 w-fit mr-4">
                  Get great value and seamless service with these brilliant
                  wines
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}