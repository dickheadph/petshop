import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import Logo from "../../Shared/Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../index.css";
import OAuth from "./OAuth";
function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [hasAcc, setHasAcc] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const navigateTo = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData === "") {
      return;
    }
    //console.log(formData);
    if (!hasAcc) {
      try {
        const auth = getAuth();
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (userCredentials.user) {
          navigateTo("/");
          toast.success("LogIn Succesfull");
        } else {
          navigateTo("/signup");
        }
      } catch (error) {
        console.log(error);
        toast.error("Bad Request. Try again.");
      }
    } else {
      try {
        const auth = getAuth();
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredentials.user;

        updateProfile(auth.currentUser, {
          displayName: username,
        });

        const newFormData = { ...formData };
        delete newFormData.password;
        newFormData.timestamp = serverTimestamp();

        // console.log(newFormData);

        setDoc(doc(db, "psusers", user.uid), newFormData);

        navigateTo("/");
        toast.success("LoggedIn Successfully");
      } catch (error) {
        console.log(error);
        toast.error("Bad Credentials. Please Try Again");
      }
    }
  };
  return (
    <>
      <div className="py-[10%] lg:py-[8%]">
        <div className="mx-auto h-full lg:w-[500px]">
          <div className="m-3 rounded-lg bg-caramel-light p-6">
            <form onSubmit={submitHandler}>
              <div
                className="w-auto pl-[25%] md:pl-[40%] lg:pl-[31%] xl:pl-[30%]"
                onClick={() => navigateTo("/")}
              >
                <Logo />
              </div>
              <h1 className="my-3 text-center">
                {hasAcc ? "Create an Account" : "LogIn your Acc"}
              </h1>
              <OAuth />
              <p className="my-2 text-center">
                {hasAcc ? "or sign up with" : "or login with"}
              </p>
              {hasAcc && (
                <>
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={onChange}
                    className="form"
                    required
                  />
                  <br />
                </>
              )}
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                className="form"
                required
              />
              <br />
              <label htmlFor="">Password</label>
              {showPass ? (
                <FaEye
                  className="absolute right-[12%] mt-4 md:right-[7%] lg:right-[31%] xl:right-[40%]"
                  onClick={() => setShowPass((prevState) => !prevState)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-[12%] mt-4 md:right-[7%] lg:right-[31%] xl:right-[40%]"
                  onClick={() => setShowPass((prevState) => !prevState)}
                />
              )}
              <input
                type={showPass ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                className="form"
                required
              />
              <br />
              <div className="mt-3 text-center">
                <button className="mt-3 w-full rounded-lg bg-dark-blue p-2 text-[#fdfdfd]">
                  {hasAcc ? "Register" : "Log In"}
                </button>
                <p className="mt-2">
                  {hasAcc ? "Have an Acc ?" : "Not registered yet ?"}
                  <span
                    className="underline"
                    onClick={() => setHasAcc((prevState) => !prevState)}
                  >
                    {" "}
                    {hasAcc ? "Log in here." : "SignUp here"}
                  </span>
                </p>
              </div>
            </form>
            <p
              className="mt-4 text-right text-sm underline"
              onClick={() => navigateTo("/reset")}
            >
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
