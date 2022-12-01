import React from "react";
import Spinnr from "../Images/spinner.gif";
function Spinner() {
  return (
    <>
      <div className="absolute inset-0 z-50 bg-[#0003]">
        <img
          src={Spinnr}
          className="absolute top-[40%] left-[25%] md:left-[35%] lg:left-[40%] xl:left-[45%]"
          alt=""
        />
      </div>
    </>
  );
}

export default Spinner;
