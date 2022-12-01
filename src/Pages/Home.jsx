import React from "react";
import { Navbar, Footer } from "./Index";
import { FaPlayCircle } from "react-icons/fa";
import Owner from "../Images/women.png";
import PetProducts from "../Components/PetProducts";
import Products from "../Components/Products";
import Poster from "../Components/UI/Poster";
import ShopResellers from "../Components/ShopResellers";
import Poster2 from "../Components/UI/Poster2";
import PetInfo from "../Components/PetInfo";
function Home() {
  return (
    <>
      <div className="h-auto w-[100vw] overflow-clip rounded-b-3xl bg-caramel-light">
        <Navbar />
        <div className="relative flex flex-wrap">
          <div className="absolute h-[350px] w-[350px] -translate-y-96 rotate-12 rounded-3xl bg-caramel-mid md:h-[400px] md:w-[400px] lg:h-[300px] xl:h-[370px] xl:w-[600px]" />
          <div className="absolute left-[10%] top-[20%] h-[100px] w-[100px] rotate-12 rounded-3xl bg-caramel-yellow md:h-[100px] md:w-[100px]" />
          <div className="absolute left-[10%] bottom-0 h-[350px] w-[350px] translate-y-72 rotate-12 rounded-3xl bg-caramel-yellow md:h-[400px] md:w-[400px] md:translate-y-64" />
          <div className="lg:w-6/12 ">
            <div className="relative left-[10%] top-[6%] text-darkblue-strong lg:top-[6%] lg:left-[20%] xl:top-[8%] xl:left-[20%]">
              <h1 className="text-4xl font-extrabold text-darkblue-strong md:text-6xl lg:text-6xl xl:text-8xl">
                One More Freind
              </h1>
              <h2 className="my-3 text-2xl font-bold md:my-5 md:text-4xl lg:text-4xl xl:text-6xl">
                Thousand More Fun !
              </h2>
              <p className="w-10/12 text-justify text-sm xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                voluptas dolorum commodi accusantium totam dolores consequatur
                quam ab? Ad tempore exercitationem odit corporis.
              </p>
              <div className="my-4 flex space-x-6 md:my-6">
                <button className="bg-transaprent border-darkblue flex rounded-full border-[1px] py-1 px-3 md:py-2 md:px-3">
                  View Intro
                  <FaPlayCircle className="ml-2 mt-1" />
                </button>
                <button className="rounded-full bg-dark-blue py-1 px-4 text-caramel-light md:py-2">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 overflow-x-hidden md:mt-10 lg:w-6/12">
            <div className="absolute bottom-0 right-16 h-[300px] w-[300px] translate-y-16 rotate-12 overflow-hidden rounded-3xl bg-darkblue-strong md:h-[500px] md:w-[500px] lg:right-[5%] lg:h-[350px] lg:w-[350px] xl:right-20 xl:h-[600px] xl:w-[600px]" />
            <div className="absolute bottom-0 right-16 h-[300px] w-[300px] translate-y-16 rotate-45 overflow-hidden rounded-3xl bg-caramel-mid md:h-[500px] md:w-[500px] lg:right-[5%] lg:h-[350px] lg:w-[350px] xl:right-20 xl:h-[600px] xl:w-[600px]" />
            <img src={Owner} alt="" className="relative" />
          </div>
        </div>
      </div>
      <div className="lg:px-15 px-3 md:px-10 xl:px-20">
        <PetProducts />
        <Poster />
        <Products />
        <ShopResellers />
        <Poster2 />
        <PetInfo />
      </div>
      <Footer />
    </>
  );
}

export default Home;
