import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../Shared/Logo";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GEO_API_KEY } from "../../Api/Keys";
function PetDataForm() {
  const auth = getAuth();
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    breed: "",
    name: "",
    gender: "",
    price: 0,
    color: "",
    age: 0,
    images: {},
    vaccine: false,
    certification: false,
    dewormed: false,
    chip: false,
    address: "",
    addInfo: "",
  });
  const {
    breed,
    name,
    gender,
    price,
    color,
    age,
    images,
    vaccine,
    certification,
    dewormed,
    chip,
    address,
    addInfo,
  } = formData;

  const onMutate = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    //Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    //Text.Boolen/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);

    if (images.lenght > 6) {
      toast.warning("Please upload a maximum of 6 files.");
    }

    let geoLocation = {};
    // eslint-disable-next-line
    let location;

    axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=${GEO_API_KEY}`
      )

      .then((res) => {
        const data = res.data.features[0]?.properties;
        geoLocation.lat = data.lat ?? 0;
        geoLocation.lon = data.lon ?? 0;
        location = data.formatted;
        // console.log(geoLocation, location);
      })
      .catch((err) => {
        console.log(err);
      });

    //Store image in firebase
    const storeImage = (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, "pets/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default: {
                return;
              }
            }
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    );
    // console.log(imgUrls);

    const newFormData = {
      ...formData,
      imgUrls,
      geoLocation,
      timestamp: serverTimestamp(),
    };

    delete newFormData.images;
    delete newFormData.address;
    location && (newFormData.location = location);

    const docRef = await addDoc(collection(db, "petlist"), newFormData);
    toast.success("Pet Added to Database");
    navigateTo(`/single/${docRef.id}`);
    //console.log(docRef.data());
  };
  return (
    <>
      <div className="pt-6">
        <div className="mx-auto h-full lg:w-[700px]">
          <div className="m-3 rounded-lg bg-caramel-light p-3 lg:p-6">
            <form onSubmit={submitHandler}>
              <div className="w-auto pl-[30%] md:pl-[40%] lg:pl-[38%]">
                <Logo />
              </div>
              <h1 className="my-3 text-center">Pet Information</h1>
              <div className="flex flex-wrap">
                <div className="w-6/12 px-1 lg:px-2">
                  <label htmlFor="">Breed Name</label>
                  <input
                    type="text"
                    id="breed"
                    value={breed}
                    onChange={onMutate}
                    className="form"
                    required
                  />
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={onMutate}
                    className="form"
                    required
                  />
                  <label htmlFor="">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    value={gender}
                    onChange={onMutate}
                    className="form"
                    required
                  />
                </div>
                <div className="w-6/12 px-1 lg:px-2">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={onMutate}
                    className="form"
                    required
                  />
                  <label htmlFor="">Age in Months</label>
                  <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={onMutate}
                    className="form"
                    required
                  />
                  <label htmlFor="">Color</label>
                  <input
                    type="text"
                    id="color"
                    value={color}
                    onChange={onMutate}
                    className="form"
                    required
                  />
                  <br />
                </div>
              </div>
              <div className="my-3 flex justify-evenly text-center">
                <div className="">
                  <label htmlFor="">Vaccinated</label>
                  <br />
                  <button
                    type="button"
                    id="vaccine"
                    value={true}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      vaccine ? "bg-dark-blue" : "bg-dark-blue/50"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    id="vaccine"
                    value={false}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      vaccine ? "bg-dark-blue/50" : "bg-dark-blue"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    No
                  </button>
                </div>
                <div>
                  <label htmlFor="">Dewormed</label>
                  <br />
                  <button
                    type="button"
                    id="dewormed"
                    value={true}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      dewormed ? "bg-dark-blue" : "bg-dark-blue/50"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    id="dewormed"
                    value={false}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      dewormed ? "bg-dark-blue/50" : "bg-dark-blue"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    No
                  </button>
                </div>
              </div>
              <div className="flex justify-evenly text-center">
                <div className="">
                  <label htmlFor="">Pet Certification</label>
                  <br />
                  <button
                    type="button"
                    id="certification"
                    value={true}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      certification ? "bg-dark-blue" : "bg-dark-blue/50"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    id="certification"
                    value={false}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      certification ? "bg-dark-blue/50" : "bg-dark-blue"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    No
                  </button>
                </div>
                <div>
                  <label htmlFor="">Microchip</label>
                  <br />
                  <button
                    type="button"
                    id="chip"
                    value={true}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      chip ? "bg-dark-blue" : "bg-dark-blue/50"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    id="chip"
                    value={false}
                    onClick={onMutate}
                    className={`mr-2 rounded-full ${
                      chip ? "bg-dark-blue/50" : "bg-dark-blue"
                    } py-2 px-4 text-[#fdfdfd] outline-[1px] outline-[#fdfdfd]`}
                    required
                  >
                    No
                  </button>
                </div>
              </div>
              <label htmlFor="">Location</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={onMutate}
                className="form"
                required
              />
              <br />
              <label htmlFor="">Images (First image will be the cover.)</label>
              <br />
              <input
                type="file"
                id="images"
                onChange={onMutate}
                className="rounded"
                min="3"
                max="6"
                accept=".png, .jpg, .jpeg"
                multiple
                required
              />
              <br />
              <label htmlFor="">Additional Information</label>
              <textarea
                type="text"
                id="addInfo"
                value={addInfo}
                onChange={onMutate}
                className="form"
                required
              />
              <br />
              <div className="mt-3 text-center">
                <button className="mt-3 w-full rounded-lg bg-dark-blue p-2 text-[#fdfdfd]">
                  Add to Listings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetDataForm;
