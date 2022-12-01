import React from "react";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import { useNavigate } from "react-router-dom";
import { FaGift, FaHeart } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";
function ItemCard(props) {
  const { id, img, name, price, desc } = props;
  const auth = getAuth();
  const loggedIn = useAuthStatus();
  const navigateTo = useNavigate();

  const addProd = async () => {
    if (!loggedIn) {
      toast.warning("You are not logged in.");
    } else {
      await axios.post(
        `https://groovy-groove-268003.firebaseio.com/favs/${auth.currentUser.displayName}/prods.json`,
        {
          id,
          img,
          name,
          price,
          desc,
        }
      );
      navigateTo("/profile");
      toast.success("Added to Favourites");
    }
  };

  return (
    <>
      <div className="m-1 rounded-xl border-[1px] border-caramel-yellow shadow-xl">
        <img
          src={img}
          alt="logo"
          className="h-[150px] w-[417px] rounded-t-xl object-cover md:h-[200px] lg:h-[200px] lg:w-full xl:h-[230px]"
          onClick={() => navigateTo(`/prod/${id}`)}
        />
        <div className="rounded-b-xl px-4 py-3 text-sm md:text-base lg:px-6">
          <p className="font-semibold">{name}</p>
          <p className="font-semibold">$ {price}.00</p>
          <p>{desc}</p>
          <div className="w-full rounded-lg bg-caramel-light">
            <FaGift className="absolute my-2 ml-2 text-pink-red" />
            <p className="my-2 ml-8 py-1 px-3 text-sm font-semibold md:text-base lg:ml-10">
              Pet Meal
            </p>
          </div>
          <div className="mx-auto mt-2 flex justify-center space-x-4 text-sm md:text-base">
            <button
              className=" rounded-lg bg-green-leaf p-1 px-2 text-[#fdfdfd] lg:py-2"
              onClick={addProd}
            >
              Add to Cart
            </button>
            <button>
              <FaHeart color="red" className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
