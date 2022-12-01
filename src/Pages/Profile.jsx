import React, { useEffect, useState, useContext } from "react";
import FavouritesContext from "../Context/favContext/FavouritesContext";
import { ADMIN_KEY } from "../Api/Keys";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PetCard from "../Shared/PetCard";
import ItemCard from "../Shared/ItemCard";
import Spinner from "../Shared/Spinner";
function Profile() {
  const admin = ADMIN_KEY;
  const navigateTo = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState("");
  const { loading, favourites, getFav, products, getProd } =
    useContext(FavouritesContext);
  useEffect(() => {
    setUser(auth.currentUser);
    //   console.log(auth.currentUser.uid);
  }, [auth]);

  const onLogOut = () => {
    auth.signOut();
    navigateTo("/signup");
    toast.success("LoggedOut Succesfully");
  };

  useEffect(() => {
    getProd();
    getFav();
    // eslint-disable-next-line
  }, [auth]);
  return user ? (
    <>
      <div className="ld:text-lg mx-auto p-5 text-center lg:w-[500px]">
        {auth.currentUser.uid === admin && (
          <p className="text-xl font-semibold">Welcome back Admin</p>
        )}
        <img
          src={user.photoURL}
          className="relative left-[36%] my-3 rounded-full md:left-[44%] lg:left-[40%]"
          alt=""
        />
        <h1 className="font-semibold">{user.displayName}</h1>
        {auth.currentUser.uid === admin && (
          <div>
            <button
              className="rounded-lg bg-caramel-yellow py-2 px-3"
              onClick={() => navigateTo("/admin")}
            >
              Goto Dashboard
            </button>
          </div>
        )}
        <button onClick={onLogOut}>Log Out</button>
      </div>
      {favourites.length <= 0 ? (
        <div className="absolute top-[35%] left-3 mx-6 md:left-[25%] lg:left-[20%] xl:left-[40%]">
          <p className="font-seminold my-4 text-4xl">You have no Favourites</p>
          <button
            onClick={() => navigateTo("/category")}
            className="w-full rounded-lg bg-caramel-yellow py-2 px-3"
          >
            Add to Favourites.
          </button>
        </div>
      ) : (
        <div className="px-3">
          <h1>Your Loved Pets</h1>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <ul className="flex flex-wrap py-10">
                {favourites.map((pets) => (
                  <li
                    key={pets.id}
                    className="w-2/4 md:w-4/12 lg:w-3/12 xl:w-2/12"
                  >
                    <PetCard
                      id={pets.id}
                      name={pets.name}
                      img={pets.img}
                      gender={pets.gender}
                      age={pets.age}
                      price={pets.price}
                      vaccine={pets.vaccine}
                    />
                  </li>
                ))}
              </ul>
              {/* Break here */}
              <h1>Your Products</h1>
              <ul className="flex flex-wrap py-10">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="w-2/4 md:w-4/12 lg:w-3/12 xl:w-2/12"
                  >
                    <ItemCard
                      id={product.id}
                      img={product.img}
                      name={product.name}
                      price={product.price}
                      desc={product.desc}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  ) : (
    <div className="absolute top-[35%] left-3 mx-6 md:left-[25%] lg:left-[20%] xl:left-[40%]">
      <p className="font-seminold my-4 text-4xl">You are not logged in.</p>
      <button
        onClick={() => navigateTo("/signup")}
        className="w-full rounded-lg bg-caramel-yellow py-2 px-3"
      >
        Create an Account.
      </button>
    </div>
  );
}

export default Profile;
