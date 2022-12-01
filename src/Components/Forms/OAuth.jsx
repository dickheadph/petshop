import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Google from "../../Images/google.svg";
function OAuth() {
  const admin = "yYXr5DSoTYc122xIORgSADHsk6R2";
  const navigateTo = useNavigate();
  const onUseGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);

      const user = userCredentials.user;

      const docSnap = await getDoc(doc(db, "psusers", user.uid));

      if (!docSnap.exists()) {
        await setDoc(doc(db, "psusers", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      if (user.uid !== admin) {
        navigateTo("/");
      } else {
        navigateTo("/admin");
      }
      toast.success("LogIn Succussfull");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="mt-2 flex rounded-xl bg-[#fdfdfd] text-center"
        onClick={onUseGoogle}
      >
        <img src={Google} alt="" className="ml-[38%] py-3" width={"20px"} />
        <button className="">&nbsp; Google</button>
      </div>
    </>
  );
}

export default OAuth;
