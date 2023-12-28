import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { getAuth } from 'firebase/auth';
function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState( {
    name: auth.currentUser.name,

    email:auth.currentUser.email,
  });
  const {name, email} = formData;

  function onLogout(){
    auth.signOut()
    navigate("/")

  }
  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col ">
      <h1 className="text-center text-3xl mt-6 font-bold"> My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3">
        <form>
          <input type="text" value={name} disabled className="w-full px-4 py-2 text-x1 text-gray-700
           bg-white border border-gray-300 rounded transition ease-in-out mb-6" />
           
           {/* Email Input */}
          <input type="email" id ="email" value={email} disabled className="w-full px-4 py-2 text-x1 text-gray-700
           bg-white border border-gray-300 rounded transition ease-in-out" />
           <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6" >
           <p className="flex items-center">

           Do you want to change your name?
           <span
                  // onClick={() => {
                  //   changeDetail && onSubmit();
                  //   setChangeDetail((prevState) => !prevState);
                  // }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {/* {changeDetail ? "Apply change" : "Edit"} */}
                   Edit
                </span>

           </p> 
            <p 
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">
            Sign out
            </p>


           </div>
        </form>
      </div>
    </section>
);
}
export default Profile