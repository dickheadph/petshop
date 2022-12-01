import React from "react";
import { Navbar, Footer } from "./Index";
import Poster from "../Images/petx.jpg";
import Card from "../Images/card.png";
function About() {
  return (
    <div className="bg-caramel-yellow/20">
      <Navbar />
      <div className="mx-3 my-6 lg:my-10 lg:mx-auto">
        <div className="flex flex-wrap text-darkblue-strong">
          <div className="lg:w-6/12">
            <h1 className="text-center text-3xl font-bold">Who We Are</h1>
            <p className="text-center text-2xl font-semibold">What We Do</p>
            <p className="m-4 mx-auto w-[90%] text-justify indent-8 lg:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              distinctio. Doloremque asperiores rerum autem voluptatum
              temporibus qui quaerat nulla expedita veniam nostrum. Architecto
              eveniet nihil, dolorem nobis provident dicta accusamus. Expedita
              accusamus inventore at nisi exercitationem dolorem reiciendis
              numquam necessitatibus, nemo officiis odit consequuntur animi
              aliquam dicta vero molestiae voluptatem voluptates facere
              similique quidem illum debitis veniam. Repellat, culpa ratione.
            </p>
            <div className="mt-4 text-center">
              <h1 className="text-3xl font-bold">JOIN OUR CAUSE</h1>
              <p className="my-3 text-lg">
                Save thousands and be a{" "}
                <span className="text-xl font-bold"> Hope.</span>
              </p>
              <img
                src={Card}
                className="relative left-[14%] lg:left-[35%]"
                alt=""
              />
            </div>
            <div className="my-3 flex justify-evenly text-base lg:mt-6">
              <button className="rounded-full border-[1px] border-darkblue-strong py-2 px-3 font-semibold hover:bg-darkblue-strong hover:text-[#ffff]">
                Join Something
              </button>
              <button className="rounded-full border-[1px] border-darkblue-strong py-2 px-3 font-semibold hover:bg-darkblue-strong hover:text-[#ffff]">
                Join Something
              </button>
              <button className="rounded-full border-[1px] border-darkblue-strong py-2 px-3 font-semibold hover:bg-darkblue-strong hover:text-[#ffff]">
                Join Something
              </button>
            </div>
          </div>
          <div className="lg:w-6/12">
            <img src={Poster} alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
