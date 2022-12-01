import React from "react";
import Hand from "../../Images/handDog.png";
import { FaPlayCircle, FaPaw } from "react-icons/fa";
import "../../index.css";
function Poster2() {
  return (
    <>
      <div className="relative flex flex-wrap overflow-hidden rounded-3xl border-[1px] border-pongkan-mid bg-pongkan-mid shadow-lg lg:h-[400px]">
        <div className="-translate-x-18 absolute h-[600px] w-[600px] -translate-y-12 -rotate-12 rounded-[100px] bg-caramel-light md:h-[1000px] md:w-[1000px] md:translate-y-72" />
        <div className="absolute right-0 h-[1000px] w-[1000px] translate-y-64 translate-x-12 rotate-12 rounded-3xl bg-caramel-yellow/50 md:h-[400px] md:w-[800px] md:-translate-y-24 md:translate-x-24" />
        <div className="mt-10 w-full lg:w-6/12">
          <div className="relative mt-2 p-4 text-center font-medium text-dark-blue">
            <FaPaw size={"20px"} />
            <h1 className="text-4xl font-bold lg:text-5xl">ADAPTION </h1>
            <p className="my-2 text-xl md:text-2xl lg:text-3xl">
              If We Need Help.
            </p>
            <p className="my-2 text-base md:text-2xl lg:text-3xl">
              What More Of Them.
            </p>
            <p className="mx-3 text-sm lg:mx-6 lg:text-base">
              Adopt a Pet and give them a home.
            </p>
          </div>
          <div className="relative left-[10%] my-4 flex space-x-6 md:left-[30%] md:my-6">
            <button className="viewIntrobtn border-darkblue ">
              View Intro
              <FaPlayCircle className="ml-2 mt-1" />
            </button>
            <button className="exploreNowbtn bg-dark-blue text-caramel-light">
              Explore Now
            </button>
          </div>
        </div>
        <div className="lg:w-6/12">
          <img
            src={Hand}
            alt=""
            className="relative md:left-[20%] lg:h-[400px]"
          />
        </div>
      </div>
    </>
  );
}

export default Poster2;
