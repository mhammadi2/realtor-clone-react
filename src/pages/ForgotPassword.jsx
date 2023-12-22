// Modified sign in page
import React, { useState } from "react";
// import { IoMdEye } from "react-icons/io";
// import { IoMdEyeOff } from "react-icons/io";
import {Link} from "react-router-dom";
import OAuth from "../components/OAuth";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold "> Forgot Password   </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%]  lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lnbiUyMHVwfGVufDB8fDB8fHww"
            alt="Sign In"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
            />
            
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6"> Don't have a account?

              <Link to="/sign-up" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Register</Link>
              </p>
              <p>

              <Link to="/forgot-password " className="text-blue-600 hover:text-blue-50-800 transition duration-200 ease-in-out">Sign in instead</Link>
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm 
          font-medium uppercase rounded shadow-md hover:bg-blue-700 
          transition duration-150 ease-in-out hover:shadow-lg
           active:bg-blue-800" type="submit"> Send reset password</button>
           <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-500 after:border-t flex after:flex-1 items-center after:border-gray-500">
            <p className="text-center font-semibold mx-4">Or</p>
           </div>

           <OAuth/>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
