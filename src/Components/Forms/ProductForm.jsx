import React, { useState } from "react";
import {} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../Shared/Logo";
function ProductForm() {
  const navigateTo = useNavigate();
  const [prod, setProd] = useState({
    name: "",
    price: 0,
    images: {},
    desc: "",
  });

  const { name, price, images, desc } = prod;
  const onChange = (e) => {
    //Files
    if (e.target.files) {
      setProd((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    //Text.Boolen/Numbers
    if (!e.target.files) {
      setProd((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (images.lenght > 3) {
      toast.warning("Maximum Of 3 are allowed.");
    }
    // console.log(prod);

    //Store image in firebase
    const storeImage = (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, "products/" + fileName);

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

    const newProd = {
      ...prod,
      imgUrls,
      timestamp: serverTimestamp(),
    };

    delete newProd.images;

    await addDoc(collection(db, "prodlist"), newProd);
    toast.success("Product added toDatabase");
    navigateTo("/admin");
  };
  return (
    <>
      <div className="py-[10%] lg:py-[8%]">
        <div className="mx-auto h-full lg:w-[500px]">
          <div className="m-3 rounded-lg bg-caramel-light p-6">
            <form onSubmit={submitHandler}>
              <div
                className="w-auto pl-[25%] md:pl-[40%] lg:pl-[31%] xl:pl-[30%]"
                onClick={() => navigateTo("/admin")}
              >
                <Logo />
              </div>
              <h1 className="my-3 text-center">Add Product</h1>

              <label htmlFor="">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                className="form"
                required
              />
              <br />
              <label htmlFor="">Price</label>
              <input
                type="number"
                id="price"
                value={price}
                min={1}
                onChange={onChange}
                className="form"
                required
              />
              <br />
              <label htmlFor="">Product Image</label>
              <input
                type="file"
                id="images"
                onChange={onChange}
                accept=".png, .jpg, .jpeg"
                max={3}
                multiple
                className="form"
                required
              />
              <br />
              <label htmlFor="">Product Description</label>
              <textarea
                type="text"
                id="desc"
                value={desc}
                onChange={onChange}
                className="form"
                required
              />
              <br />
              <div className="mt-3 text-center">
                <button className="mt-3 w-full rounded-lg bg-dark-blue p-2 text-[#fdfdfd]">
                  Add to Products
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
