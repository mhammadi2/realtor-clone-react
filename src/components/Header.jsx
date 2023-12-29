import React from "react";
import {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [pagesState, setPageState] = useState("Sign in")
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* adding shadow  on nav with border , z-50 alwasy make sure on the top*/}
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
            border-b-transparent ${pathMatchRoute("/") && "text-blue-400 border-b-yellow-400"}`}
            onClick={()=>navigate("/")}
            >
              Home
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
            border-b-transparent ${pathMatchRoute("/offers") && "text-blue-400 border-b-yellow-400"}`}
            onClick={()=>navigate("/offers")}
            >Offers</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
            border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-blue-400 border-b-yellow-400"}`}
            onClick={()=>navigate("/profile")}
            >{pagesState}</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
