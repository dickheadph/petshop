import React, { useState, useEffect } from "react";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { TbMessageDots, TbShare } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import { useParams } from "react-router-dom";
import { Navbar, Footer } from "./Index";
import "../index.css";
import Products from "../Components/PetProducts";
import Map from "../Components/Map";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function SingleListing() {
  const auth = getAuth();
  const params = useParams();
  const navigateTo = useNavigate();
  const [listing, setListing] = useState([]);
  const [images, setImages] = useState([]);
  const [more, setMore] = useState(true);
  const [userId, setUserId] = useState("");
  const [lat, setLat] = useState(13.4075246);
  const [lon, setLon] = useState(123.3730644);
  const position = [lat, lon];

  const loggedIn = useAuthStatus();
  // console.log(loggedIn);

  useEffect(() => {
    const petListings = async () => {
      const docRef = doc(db, "petlist", params.petId);
      const docSnap = await getDoc(docRef);
      setListing(docSnap.data());
      setImages(docSnap.data().imgUrls);
      setLat(docSnap.data().geoLocation.lat);
      setLon(docSnap.data().geoLocation.lon);
      setUserId(auth.currentUser.uid);
    };
    petListings();
  }, [params.petId, auth]);

  const onNavigate = () => {
    if (loggedIn) {
      navigateTo(`/single/${params.petId}/${userId}`);
    } else {
      toast.error("You are not logged in.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="m-1 lg:m-2">
        <div className="flex h-auto flex-wrap rounded-3xl border-[1px] border-darkblue-mid p-3 md:space-x-[3%] xl:m-2">
          <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12">
            <Swiper pagination={true} modules={[Pagination]}>
              {images.map((image) => (
                <SwiperSlide>
                  <li className="object-fit rounded-xl md:h-[400px] md:w-[350px] lg:h-[600px] lg:w-[600px]">
                    <img
                      src={image}
                      className="h-[380px] w-full rounded-xl lg:h-[600px]"
                      alt=""
                    />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="text-darkblue mt-3 hidden w-full rounded-xl bg-caramel-yellow p-3 text-center font-bold lg:block">
              We Guarantee a 100% health of our pets.{" "}
              <span> 100% Guranteed Pet Identification</span>
            </p>
          </div>
          <div className="my-2 w-full text-sm font-semibold text-[#3f3f46] md:w-5/12 lg:w-5/12 lg:text-lg xl:w-4/12">
            <p className="text-sm lg:text-base">PID: {params.petId}</p>
            <h1 className="text-xl font-bold lg:text-2xl">
              {listing.name} - <span>{listing.breed}</span>
            </h1>
            <p className="my-2 text-lg font-semibold lg:text-xl">
              $ {listing.price}
            </p>
            <p className="my-2 border-b-[1px] pb-2 text-sm font-semibold lg:text-base">
              Gender: {listing.gender}
            </p>
            <div className="my-3 flex flex-wrap items-center space-x-6 space-y-2">
              <button
                className="rounded-full bg-darkblue-strong py-2 px-4 text-[#fdfdfd]"
                disabled={loggedIn ? false : true}
                onClick={onNavigate}
              >
                Contact Us
              </button>
              <button className="flex rounded-full border-[2px] border-darkblue-strong py-2 px-4">
                <TbMessageDots className="mt-1" />
                Chat with Monito
              </button>
              <button
                className="rounded-full bg-caramel-yellow py-2 px-4"
                onClick={() => setMore((prevState) => !prevState)}
              >
                {more ? "Read Less" : "Read More"}
              </button>
              <button
                className="flex items-center"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Link Copeid to Clipboard.");
                }}
              >
                <TbShare className="text-xl" />
                Share
              </button>
            </div>
            {more && (
              <ul className="space-y-3 lg:space-y-4">
                <li className="singlePetList">Age: {listing.age}</li>
                <li className="singlePetList">Color: {listing.color}</li>
                <li className="singlePetList">
                  Vaccinated: {listing.vaccine ? "Yes" : "No"}
                </li>
                <li className="singlePetList">
                  Dewormed: {listing.dewormed ? "Yes" : "No"}
                </li>
                <li className="singlePetList">
                  Microchip: {listing.chip ? "Yes" : "No"}
                </li>
                <li className="singlePetList">
                  Certificate: {listing.certification ? "Yes" : "No"}
                </li>
                <li className="singlePetList">
                  <p className="text-justify...">
                    Location: {listing.location ?? "No Location"}
                  </p>
                </li>
                <li className="singlePetList">
                  Additional Info: {listing.addInfo ?? "Noting Added."}
                </li>
              </ul>
            )}
          </div>
          <div className="w-[400px] md:w-full xl:w-3/12">
            <h1 className="text-sm font-semibold text-[#3f3f46] lg:text-base">
              Map Location:{" "}
            </h1>
            <Map position={position} />
          </div>
        </div>
        <div>
          <Products />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleListing;
