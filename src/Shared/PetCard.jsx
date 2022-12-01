import React from "react";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
function ItemCard(props) {
  const auth = getAuth();
  const navigateTo = useNavigate();
  const { id, img, name, gender, age, price, vaccine } = props;

  const loggedIn = useAuthStatus();
  const markFav = async () => {
    // console.log(id, img, name, gender, age, price, vaccine);
    if (!loggedIn) {
      toast.warning("You are not logged in.");
    } else {
      await axios.post(
        `https://groovy-groove-268003.firebaseio.com/favs/${auth.currentUser.displayName}/pets.json`,
        {
          id,
          img,
          name,
          gender,
          age,
          price,
          vaccine,
        }
      );
      navigateTo("/profile");
      toast.success("Added to Favourites");
    }
  };
  return (
    <>
      <div className="m-1 text-dark-blue">
        <div className="rounded-lg border-[1px] border-caramel-yellow text-sm shadow-xl ">
          <FaHeart
            color="red"
            size={"15px"}
            className="absolute m-3"
            onClick={markFav}
          />
          <div className="">
            <img
              src={img}
              alt={id}
              onClick={() => navigateTo(`/single/${id}`)}
              className="h-[160px] w-full rounded-t-lg object-cover md:h-[200px] lg:h-[300px]"
            />
          </div>
          <div className="rounded-b-xl bg-[#fdfdfd] p-3">
            <p className=" font-semibold">{name}</p>
            <div className="my-1 flex space-x-1 text-xs">
              <p className="text-red-500">
                Gender:{" "}
                <span className="text-red-600 font-semibold">{gender}</span>
              </p>
              <p>
                Age: <span className="font-semibold">{age} months</span>
              </p>
            </div>
            <p className="font-semibold">$ {price}</p>
            <p className="">{vaccine}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
