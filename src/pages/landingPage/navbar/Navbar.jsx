import React from "react";
import "./navbar.scss";

import Search from "./components/search/Search";
import Toggler from "./components/Toggler";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import { CartIcon } from "../../../components/icons/Icons";
import Profile from "./components/Profile";

const Navbar = () => {
   return (
      <nav
         className="
   relative
   w-full
   flex flex-wrap
   items-center
   justify-between
   py-4
   bg-gray-100
   text-gray-500
   hover:text-gray-700
   focus:text-gray-700
   shadow-lg
   navbar navbar-expand-lg navbar-light
   "
      >
         <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <Toggler />

            {/* Collapsible wrapper */}
            <Logo />

            <NavLinks />
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="flex items-center relative ml-4 nav-right-max-991px">
               <a
                  className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-8"
                  href="#"
               >
                  <Search />
               </a>

               <a
                  className="relative cart-icon text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-8"
                  href="#"
               >
                  <CartIcon />
                  <span>1</span>
               </a>

               <Profile />
            </div>
            {/* <!-- Right elements --> */}
         </div>
      </nav>
   );
};

export default Navbar;
