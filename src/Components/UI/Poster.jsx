import React from "react";
import Women from "../../Images/sitsu.png";
import { FaPlayCircle } from "react-icons/fa";
function Poster() {
  return (
    <>
      <div className="my-15 relative flex flex-wrap-reverse overflow-hidden rounded-3xl border-darkblue-mid border-[1px] bg-darkblue-mid lg:h-[400px]">
        <div className="absolute bottom-0 h-[350px] w-[350px] translate-y-72 -translate-x-9 rotate-12 rounded-3xl bg-dark-blue md:h-[400px] md:w-[800px] md:translate-y-60 lg:h-[400px] lg:w-[600px] xl:h-[500px] xl:w-[700px]" />
        <div className="md:-translate-y absolute bottom-0 right-0 h-[400px] w-[500px] -translate-y-64 translate-x-12 rotate-12 rounded-3xl bg-caramel-light md:h-[500px] md:w-[800px] md:translate-x-24 lg:h-[400px] lg:w-[600px] xl:h-[600px] xl:w-[700px] xl:translate-x-12" />
        <div className="lg:w-6/12">
          <img
            src={Women}
            alt=""
            className="relative md:left-[20%] lg:h-[400px]"
          />
        </div>
        <div className="w-full lg:w-6/12">
          <div className="relative mt-[2%] lg:mt-[5%] p-4 text-center font-medium text-dark-blue">
            <h1 className="text-4xl font-bold lg:text-5xl">One More Friend</h1>
            <h2 className="my-2 text-2xl lg:text-3xl">Thousands More Fun !</h2>
            <p className="mx-3 text-right text-sm lg:mx-6 lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              voluptas dolorum commodi accusantium totam dolores consequatur
              quam ab? Ad tempore exercitationem odit corporis. Soluta nostrum
              consequatur qui voluptate! Sit, quisquam.
            </p>
          </div>
          <div className="relative left-[10%] my-4 flex space-x-6 md:left-[30%] md:my-6">
            <button className="bg-transaprent flex rounded-full border-[1px] border-[#ffff] py-1 px-3 text-[#ffff] md:py-2 md:px-3">
              View Intro
              <FaPlayCircle className="ml-2 mt-1" color="white" />
            </button>
            <button className="text-darkblue rounded-full bg-[#ffff] py-1 px-4 md:py-2">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poster;
