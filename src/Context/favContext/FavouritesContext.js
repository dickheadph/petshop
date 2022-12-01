import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  //States || Reducers here
  const auth = getAuth();
  const [favourites, setFavourites] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //Get PET Favourites
  const getFav = async () => {
    await axios
      .get(
        `https://groovy-groove-268003.firebaseio.com/favs/${auth.currentUser.displayName}/pets.json`
      )
      .then((res) => {
        const pets = res.data;
        // console.log(res.data);

        const petList = [];

        setLoading(true);
        document.body.style.overflow = "hidden";
        for (const key in pets) {
          petList.push({
            id: pets[key].id,
            age: pets[key].age,
            gender: pets[key].gender,
            img: pets[key].img,
            name: pets[key].name,
            price: pets[key].price,
            vaccine: pets[key].vaccine,
          });
        }
        //console.log(petList);
        setFavourites(petList);
        setLoading(false);
        document.body.style.overflow = "unset";
      })
      .catch((err) => console.log(err));
  };

  //Get Product Favourites

  const getProd = () => {
    axios
      .get(
        `https://groovy-groove-268003.firebaseio.com/favs/${auth.currentUser.displayName}/prods.json`
      )
      .then((res) => {
        const prods = res.data;

        const prodList = [];

        for (const key in prods) {
          prodList.push({
            id: prods[key].id,
            img: prods[key].img,
            name: prods[key].name,
            price: prods[key].price,
            desc: prods[key].desc,
          });
        }
        setProducts(prodList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FavouritesContext.Provider
      value={{ loading, favourites, getFav, products, getProd }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
