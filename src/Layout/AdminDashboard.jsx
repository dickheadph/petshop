import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
function AdminDashboard() {
  const auth = getAuth();
  const navigateTo = useNavigate();
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    setAdmin(auth.currentUser);
  }, [auth]);
  return (
    <>
      <div className="flex bg-caramel-yellow/20 text-dark-blue">
        <div className="h-screen bg-caramel-yellow xl:w-3/12">
          <h1 className="my-6 text-center">AdminDashboard</h1>
          <div className="relative left-[35%]">
            <img
              src={admin.photoURL}
              className="w-[150px] rounded-full"
              alt=""
            />
          </div>
          <h1 className="text-center">{admin.displayName}</h1>
          <div className="my-2 flex w-full justify-evenly space-x-2 px-4">
            <button
              className="w-full rounded-xl bg-darkblue-mid py-2 text-[#fdfdfd]"
              onClick={() => navigateTo("/admin/products")}
            >
              Add Product
            </button>
            <button
              className="w-full rounded-xl bg-dark-blue py-2 text-[#fdfdfd]"
              onClick={() => navigateTo("listing")}
            >
              Add Pet
            </button>
          </div>
          <div className="mx-6">
            <button
              className="w-full rounded-xl bg-dark-blue py-2 text-[#fdfdfd]"
              onClick={() => navigateTo("/")}
            >
              Goto Home
            </button>
          </div>
          <ul>
            <li>Section</li>
            <li>Section</li>
            <li>Section</li>
            <li>Section</li>
          </ul>
        </div>
        <div className="w-9/12">
          <h1>Test</h1>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
