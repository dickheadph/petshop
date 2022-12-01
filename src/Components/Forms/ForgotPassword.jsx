import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../../Shared/Logo";
import { toast } from "react-toastify";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigateTo = useNavigate();
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email);
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent to you email Acc.");
      toast.success("Please check you spam.");
      navigateTo("/signup");
    } catch (error) {
      console.log(error);
      toast.error("Bad Request. Please Try Again");
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
              <h1 className="my-3 text-center">Create New Password</h1>
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
              <div className="mt-3 text-center">
                <button className="mt-3 w-full rounded-lg bg-dark-blue p-2 text-[#fdfdfd]">
                  Send Reset Link
                </button>
              </div>
            </form>
            <p
              className="mt-3 text-right underline"
              onClick={() => navigateTo("/signup")}
            >
              Create Account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
