import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="container mx-auto mt-5 mb-8">
      <div className="navbar">
        <div className="flex-1">
          <img className="h-[70px] md:h-[100px]" src={logo} alt="" />
        </div>
        <div className="flex-none gap-10">
            <div className="hidden md:block">
                <a href="#" className="text-lg font-bold ml-8 hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">Home</a>
                <a href="#" className="text-lg font-bold ml-8 hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">Blog</a>
                <a href="#" className="text-lg font-bold ml-8 hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">About</a>
                <a href="#" className="text-lg font-bold ml-8 hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">
                    <FontAwesomeIcon icon={faRightToBracket} />&nbsp;
                    Login
                </a>
            </div>
            <div className="hidden md:block dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
            </div>

            {/* for mobile device only */}
            <div className="md:hidden w-fit h-fit" onClick={() => setIsOpen(!isOpen)}>
              <ul className={`${isOpen ? "top-24 left-0" : "-top-96 left-0"} duration-500 absolute px-5 py-8 bg-indigo-500 text-slate-100 w-full flex flex-col gap-6`}>
                  <li><a href="#" className="text-lg font-bold hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">Home</a></li>
                  <li><a href="#" className="text-lg font-bold hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">Blog</a></li>
                  <li><a href="#" className="text-lg font-bold hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">About</a></li>
                  <li><a href="#" className="text-lg font-bold hover:border-b-4 p-1 border-indigo-500 transition-all duration-75">
                      <FontAwesomeIcon icon={faRightToBracket} />&nbsp;
                      Login
                  </a></li>
              </ul>
              {
                isOpen ?
                <FontAwesomeIcon className="text-3xl" icon={faClose} /> :
                <FontAwesomeIcon className="text-3xl" icon={faBars} />
              }
            </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Header;
