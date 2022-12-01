import React from "react";
import logoOf from "../Components/UI/ResellerShopLogo";
function ShopResellers() {
  return (
    <div className="hidden lg:block">
      <div className="text-darkblue my-10 flex items-center justify-between font-semibold">
        <div className="hidden lg:block">
          <p className="">Proud To Be Part Of</p>
          <h1 className="text-xl font-semibold">Pet Sellers</h1>
        </div>
        <div className="border-darkblue w-full rounded-full border-[1px] text-left lg:w-auto">
          <p className="py-2 px-3 text-center">View More</p>
        </div>
      </div>
      <div className="my-10 flex flex-wrap justify-evenly space-x-10">
        {logoOf.shopOne}
        {logoOf.shopTwo}
        {logoOf.shopThree}
        {logoOf.shopFour}
        {logoOf.shopFive}
        {logoOf.shopSix}
        {logoOf.shopSeven}
      </div>
    </div>
  );
}

export default ShopResellers;
