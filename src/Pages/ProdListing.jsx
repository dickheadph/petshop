import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useParams } from "react-router-dom";
import { Navbar, Footer } from "./Index";
import Products from "../Components/Products";
function ProdListing() {
  const params = useParams();
  const [prod, setProd] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getProd = async () => {
      try {
        const docRef = doc(db, "prodlist", params.prodId);

        const docSnap = await getDoc(docRef);

        setProd(docSnap.data());
        setImages(docSnap.data().imgUrls);
      } catch (error) {
        console.log(error);
      }
    };
    getProd();
  }, [params]);
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <ul className="flex">
            {images.map((img) => (
              <img src={img} className="" alt="" />
            ))}
          </ul>
          <div className="">
            <h1 className="">{prod.name}</h1>
            <p>$ {prod.price}</p>
            <p>{prod.desc}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto lg:w-[90%]">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default ProdListing;
