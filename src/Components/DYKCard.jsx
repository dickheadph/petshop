import React from "react";
function DYKCard(props) {
  return (
    <>
      <div className="md:my-2 w-full md:w-4/12 lg:w-4/12">
        <div className="m-2 rounded-xl border-[1px] border-caramel-yellow shadow-lg">
          <img
            src={props.img}
            alt="logo"
            className="h-[200px] w-[417px] rounded-t-xl object-cover lg:h-[200px] lg:w-full xl:h-[400px]"
          />
          <div className="m-4">
            <p className="my-2 inline rounded-full bg-darkblue-light py-1 px-3 font-semibold text-[#ffff] text-sm md:text-base">
              Pet Knowledge
            </p>
            <div className="flex">
              <p className="text-red-500 my-3 text-justify indent-8 text-sm md:text-base lg:text-base xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium unde eaque architecto quae eum earum ex illo autem
                enim magni quo sed obcaecati, fugit aliquam vel sequi fuga
                corrupti quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DYKCard;
