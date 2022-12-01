import React, { useEffect, useContext } from "react";
import PetContext from "../Context/petContext/PetContext";
import ItemCard from "../Shared/ItemCard";
function Products() {
  const { products, getProducts } = useContext(PetContext);
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="text-darkblue my-10 flex items-center justify-between font-semibold">
        <div className="hidden lg:block">
          <p className="">Having a Hard Time to Choose ?</p>
          <h1 className="text-xl">Checkout our Products!</h1>
        </div>
        <div className="border-darkblue w-full rounded-full border-[1px] text-left lg:w-auto">
          <p className="py-2 px-3 text-center">View More</p>
        </div>
      </div>
      <div className="">
        <ul className="flex flex-wrap py-2">
          {products.map((prod) => (
            <li key={prod.id} className="w-2/4 md:w-4/12 lg:w-3/12 xl:w-2/12">
              <ItemCard
                id={prod.id}
                code={prod.id}
                img={prod.data.imgUrls[0]}
                name={prod.data.name}
                price={prod.data.price}
                desc={prod.data.desc}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
