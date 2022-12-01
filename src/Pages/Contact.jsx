import React from "react";
// import ContactCard from "../Components/UI/ContactCard";
import getImageOf from "../Images/Test";
import { BiPhone, BiMap, BiMobile } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Card from "../Images/card.png";
import { Navbar, Footer } from "./Index";
function Contact() {
  return (
    <div className="bg-caramel-yellow/20">
      <Navbar />
      <div className="mx-3 text-dark-blue lg:mx-auto lg:w-[85%]">
        <div className="flex flex-wrap-reverse items-center md:justify-evenly">
          <div className="lg:w-3/12">
            <h1 className="text-[36px] font-semibold">Reach us @...</h1>
            <BiMobile />
            <p>(+63) 9123456789</p>
            <BiPhone />
            <p>0452-539-845</p>
            <BiMap />
            <h1>
              We are Located @ Jhonjones Strt. Missouri <br /> Ground Floor
              Bldg.
            </h1>
          </div>
          <div className="lg:w-2/12">
            <h1 className="text-[36px] font-semibold">Our Socials</h1>
            <ul>
              <FaFacebook />
              <li>Facebook: Moneto_Official_Page</li>
              <FaTwitter />
              <li>Twitter: monito_meow2</li>
              <FaInstagram />
              <li>Instagram: monito_Monito</li>
              <FaYoutube />
              <li>YouTube: MonitoPets TV</li>
            </ul>
          </div>
          <div className="mx-auto lg:w-2/12">
            <h1 className="text-[36px] font-semibold">You're invited !</h1>
            <div className="mx-auto flex flex-wrap text-center lg:space-x-4">
              <p className="mb-3 text-justify indent-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat rem asperiores vitae quam sequi quae ullam, rerum vero
                sint molestiae. Distinctio, eius! Vitae incidunt quos suscipit
                reiciendis, fugit ut quod!
              </p>
            </div>
          </div>
          <div className="lg:w-4/12">
            <img
              src={getImageOf.poster}
              className="rounded-lg"
              alt=""
              width={"700px"}
            />
          </div>
        </div>
        <h1 className="mt-6 text-center text-[36px] font-semibold">
          Frequent Searches...
        </h1>
        <div className="my-6 flex flex-wrap items-center lg:justify-evenly rounded-lg p-5 shadow-xl">
          <div className="">
            <h1 className="font-semibold">Populars</h1>
            <li>Yorkshire Terrier</li>
            <li>Pug</li>
            <li>Cocker Spaniel</li>
            <li>Jack Russel</li>
          </div>
          <div className="">
            <h1 className="font-semibold">Dogs</h1>
            <li>Beagle</li>
            <li>Husky</li>
            <li>Samoyed</li>
            <li>Labrador</li>
          </div>
          <div className="">
            <h1 className="font-semibold">Cats</h1>
            <li>Toasa</li>
            <li>Daschund</li>
            <li>French Bird</li>
            <li>Chihuahua</li>
          </div>
          <div className="">
            <h1 className="font-semibold">Birds</h1>
            <li>Chackita</li>
            <li>Alaskan Malmaute</li>
            <li>Bernse</li>
            <li>Mountain</li>
          </div>
          <div className="">
            <h1 className="font-semibold">Reptiles</h1>
            <li>Alaskan</li>
            <li>Bloodhound</li>
            <li>Bull Mastiff</li>
            <li>Cane Curso</li>
          </div>
          <div className="">
            <img src={Card} className="w-[340px]" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
