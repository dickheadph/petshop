import React from "react";
import DYKCard from "./DYKCard";
import getImageOf from "../Images/Test";
function PetInfo() {
  return (
    <>
      <div className="text-darkblue my-10 flex items-center justify-between font-semibold">
        <div className="hidden lg:block">
          <p className="">Do You Know ?</p>
          <h1 className="text-xl">Usefull Pet Informations</h1>
        </div>
        <div className="border-darkblue w-full rounded-full border-[1px] text-left lg:w-auto">
          <p className="py-2 px-3 text-center">View More</p>
        </div>
      </div>
      <div className="my-6 flex flex-wrap md:m-8 lg:m-10 xl:m-12">
        <DYKCard img={getImageOf.petThree} />
        <DYKCard img={getImageOf.petFive} />
        <DYKCard img={getImageOf.petTwo} />
      </div>
    </>
  );
}

export default PetInfo;
