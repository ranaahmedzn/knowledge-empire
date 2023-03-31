import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="container mx-auto mt-5 mb-8">
      <div className="navbar">
        <div className="flex-1">
          <img className="h-[100px]" src={logo} alt="" />
        </div>
        <div className="flex-none gap-10">
            <div>
                <a href="#" className="text-lg font-bold ml-10">Home</a>
                <a href="#" className="text-lg font-bold ml-10">Blog</a>
                <a href="#" className="text-lg font-bold ml-10">About</a>
                <a href="#" className="text-lg font-bold ml-10">
                    <FontAwesomeIcon icon={faRightToBracket} />&nbsp;
                    Login
                </a>
            </div>
          <div className="dropdown dropdown-end">
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
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Header;
