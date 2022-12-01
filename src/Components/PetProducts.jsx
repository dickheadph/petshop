import React, { useEffect, useContext } from "react";
import PetContext from "../Context/petContext/PetContext";
import PetCard from "../Shared/PetCard";
import Spinner from "../Shared/Spinner";
import { useNavigate } from "react-router-dom";
function Products() {
  const navigateTo = useNavigate();
  const { loading, listings, getListings } = useContext(PetContext);
  useEffect(() => {
    getListings();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="text-darkblue mt-5 flex items-center justify-between overflow-hidden font-semibold">
        <div className="hidden lg:block">
          <p className="lg:text-2xl">What's New ?</p>
          <h1 className="text-xl">Take A look At Our Pets</h1>
        </div>
        <div className="border-darkblue w-full rounded-full border-[1px] text-left lg:w-auto">
          <p
            className="py-2 px-3 text-center"
            onClick={() => navigateTo("/category")}
          >
            View More
          </p>
        </div>
      </div>
      <div className="">
        {loading ? (
          <Spinner />
        ) : (
          <ul className="flex flex-wrap py-5 lg:py-10">
            {listings.map((pet) => (
              <li className="w-2/4 md:w-4/12 lg:w-3/12 xl:w-2/12" key={pet.id}>
                <PetCard
                  id={pet.id}
                  code={pet.id}
                  img={pet.data.imgUrls}
                  name={pet.data.name}
                  gender={pet.data.gender}
                  age={pet.data.age}
                  price={pet.data.price}
                  vaccine={
                    pet.data.vaccine
                      ? "Fully Vaccinated"
                      : "Partially Vaccinated"
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Products;
