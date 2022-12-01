import React, { useEffect, useContext } from "react";
import PetContext from "../Context/petContext/PetContext";
import { Navbar, Footer } from "./Index";
import PetCard from "../Shared/PetCard";
import ItemCard from "../Shared/ItemCard";
import Poster from "../Components/UI/Poster";
import Spinner from "../Shared/Spinner";
import "../index.css";
function Category() {
  const { loading, listings, getListings, products, getProducts } =
    useContext(PetContext);
  
  useEffect(() => {
    getListings();
    getProducts();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="mt-2 px-3 lg:mx-auto lg:w-[85%]">
        <Poster />
        {/* <PetTypeCard /> */}
        <div className="">
          <p className="text-darkblue mt-4 text-base font-semibold">
            Hi there!
          </p>
          <p className="text-darkblue mt-2 text-lg font-semibold">
            Check Our Pets
          </p>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <ul className="flex flex-wrap py-10">
                {listings.map((pet) => (
                  <li
                    className="w-2/4 md:w-4/12 lg:w-3/12 xl:w-2/12"
                    key={pet.id}
                  >
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
            </>
          )}
        </div>
        <div className="">
          <p className="text-darkblue mt-4 text-base font-semibold">
            Having a hardtime to Choose?
          </p>
          <p className="text-darkblue mt-2 text-lg font-semibold">
            Check Our Products
          </p>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <ul className="flex flex-wrap py-10">
                {products.map((product) => (
                  <li
                    className="w-2/4 md:w-4/12 lg:w-3/12 xl:w-2/12"
                    key={product.id}
                  >
                    <ItemCard
                      id={product.id}
                      img={product.data.imgUrls}
                      name={product.data.name}
                      price={product.data.price}
                      desc={product.data.desc}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
