import React, { useState, useEffect } from "react";
import Logo from "../Shared/Logo";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Sidebar from "./Sidebar";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState("");
  const onShow = () => {
    if (showNav) {
      setShowNav(false);
      document.body.style.overflow = "unset";
    } else {
      setShowNav(true);
      document.body.style.overflow = "hidden";
    }
  };
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth]);
  return (
    <>
      <nav className="mx-auto flex items-center justify-evenly py-6 lg:py-6 xl:py-8">
        <div className="z-10 mx-auto w-[100px] md:mx-auto md:w-[150px] lg:mx-0">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div onClick={onShow}>
          <FaBars
            className="absolute top-8 right-10 z-10 text-darkblue-strong lg:hidden"
            size={"25px"}
          />
        </div>
        {showNav && (
          <div onClick={onShow}>
            <Sidebar />
          </div>
        )}
        <div className="hidden font-semibold text-dark-blue lg:block xl:text-lg">
          <ul className="flex items-center text-sm md:text-base lg:space-x-4 xl:space-x-12 xl:text-lg">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/category"}>
              <li>Category</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>

            <li className="rounded-full bg-[#ffff] px-3 text-base lg:py-1 xl:py-2">
              <form className="flex items-center">
                <FaSearch className="mx-3 text-darkblue-mid" />
                <input
                  type="text"
                  className="w-auto outline-none"
                  placeholder="Search something here!"
                />
              </form>
            </li>
            <li>
              <button className="rounded-full bg-dark-blue py-1 px-4 text-base text-[#fff] xl:py-2">
                Join the Community!
              </button>
            </li>
            {user ? (
              <Link to={"/profile"}>
                <li className="flex items-center">
                  <p>{user.displayName}</p>
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="ml-2 rounded-full"
                    width={"40px"}
                  />
                </li>
              </Link>
            ) : (
              <Link to={!auth ? "/profile" : "/signup"}>
                <p className="flex items-center">
                  Guest &nbsp;
                  <FaUserCircle />
                </p>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
