import { createContext, useState } from "react";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
//Context proper
const PetContext = createContext();

export const PetProvider = (props) => {
  //State || Reducers here
  const [listings, setListings] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  //Get Pet Listings
  const getListings = async () => {
    try {
      //Get a reference
      //const collectionRef = collection(db, "petlist");

      //Query on the collection
      setLoading(true);
      document.body.style.overflow = "hidden";
      const q = query(
        collection(db, "petlist"),
        orderBy("timestamp", "desc"),
        limit(10)
      );

      //Execute query
      const querySnap = await getDocs(q);

      let listings = [];

      //add additional data into the list
      querySnap.forEach((doc) => {
        //console.log(doc.data());
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      // console.log(listings);
      setLoading(false);
      document.body.style.overflow = "unset";
      setListings(listings);
    } catch (error) {
      console.log(error);
    }
  };

  //Get Pet Listings
  const getProducts = async () => {
    try {
      const q = query(collection(db, "prodlist"), orderBy("timestamp", "desc"));

      const querySnap = await getDocs(q);

      const prodList = [];

      querySnap.forEach((pet) => {
        return prodList.push({
          id: pet.id,
          data: pet.data(),
        });
      });
      //console.log(prodList);
      setProducts(prodList);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PetContext.Provider
      value={{ loading, listings, getListings, products, getProducts }}
    >
      {props.children}
    </PetContext.Provider>
  );
};

export default PetContext;
