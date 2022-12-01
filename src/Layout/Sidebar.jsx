import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  BiHome,
  BiCategory,
  BiQuestionMark,
  BiPhone,
  BiUserCircle,
} from "react-icons/bi";
import { Link } from "react-router-dom";
function Sidebar() {
  const auth = getAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth]);
  return (
    <div className="absolute inset-0 z-50 bg-[#0003]">
      <div className="absolute right-0 h-screen w-[170px] bg-caramel-light md:w-[300px]">
        <p className="absolute right-0 m-6 text-xl font-semibold">X</p>
        <ul className="text-darkblue ml-5 mt-20 text-lg md:ml-8">
          <Link to={"/"}>
            <li className="my-4 flex items-center">
              <BiHome />
              &nbsp;Home
            </li>
          </Link>
          <Link to={"/category"}>
            <li className="my-4 flex items-center">
              <BiCategory />
              &nbsp;Category
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="my-4 flex items-center">
              <BiQuestionMark />
              &nbsp;About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="my-4 flex items-center">
              <BiPhone />
              &nbsp;Contact
            </li>
          </Link>
          {user && (
            <Link to={"/profile"}>
              <li className="my-4 items-center">
                <BiUserCircle />
                &nbsp;{user.displayName}
              </li>
            </Link>
          )}

          {!user && (
            <Link to={"/signup"}>
              <li className="flex items-center">
                <button className="rounded-xl bg-dark-blue py-1 px-2 text-[#fdfdfd]">
                  Sign Up
                </button>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
