import React from "react";
import {
  GiSittingDog,
  GiKiwiBird,
  GiCat,
  GiLizardTongue,
} from "react-icons/gi";
import { Link } from "react-router-dom";
import "../index.css";
function PetTypeCard() {
  return (
    <>
      <div className="mt-4 flex flex-wrap justify-evenly text-center font-semibold text-caramel-strong">
        <Link to={"/canines/dogs"}>
          <p>Canines</p>
          <GiSittingDog className="pet-type" />
        </Link>
        <Link to={"/felines/cats"}>
          <p>Felines</p>
          <GiCat className="pet-type" />
        </Link>
        <Link to={"/sparrows/birds"}>
          <p>Sparrows</p>
          <GiKiwiBird className="pet-type" />
        </Link>
        <Link to={"/reptiles/lizards"}>
          <p>Reptiles</p>
          <GiLizardTongue className="pet-type" />
        </Link>
      </div>
    </>
  );
}

export default PetTypeCard;
