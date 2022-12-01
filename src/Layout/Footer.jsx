import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../Shared/Logo";
function Footer() {
  return (
    <>
      <footer className="h-[510px] rounded-t-[20px] bg-caramel-light py-[4%] px-3 md:h-[450px] lg:h-[400px] lg:px-0 xl:h-[450px]">
        <div className="flex flex-wrap items-center rounded-2xl bg-dark-blue p-[3%] lg:mx-10">
          <div className="lg:w-6/12">
            <p className="font fw-semibold pb-4 text-lg text-caramel-light md:text-left lg:text-center lg:text-2xl">
              Register Now So You Wont Miss Our Programs
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <form>
              <div className="flex flex-wrap items-center rounded-lg bg-[#fdfdfd] p-2 md:flex-wrap">
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  className="w-full rounded-lg border-[1px] p-3 outline-none focus:border-dark-blue lg:w-[285px] xl:w-[690px] xxl:w-full"
                />
                <button className="mt-2 w-full rounded-lg bg-dark-blue p-3 text-[#fdfdfd] lg:ml-2 lg:mt-0 lg:w-auto">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between border-b-[2px] border-[#0005] py-6 px-3 text-lg font-semibold lg:mx-10">
          <ul className="mx-auto flex space-x-6 text-sm md:mx-0 md:text-base">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/category"}>
              <li>Category</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
          <ul className="mx-auto my-4 flex space-x-6 md:mx-0">
            <li>
              <FaFacebook color="blue" />
            </li>
            <li>
              <FaTwitter color="lightblue" />
            </li>
            <li>
              <FaInstagram color="orange" />
            </li>
            <li>
              <FaYoutube color="red" />
            </li>
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-evenly space-y-3 text-sm md:text-base lg:text-lg">
          <Logo />
          <p>&copy; 2022 Shan - Monito. All Rights Reserved.</p>
          <p>
            Terms Of Service <span> Privacy Policy</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
