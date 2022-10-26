import React from "react";

const NavLinks = () => {
   return (
      <div
         className="collapse navbar-collapse flex-grow items-center"
         id="navbarSupportedContent"
      >
         <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto gap-10 p-5 items-center">
            <li className="nav-item p-2">
               <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
               >
                  Footwear
               </a>
            </li>
            <li className="nav-item p-2">
               <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
               >
                  About us
               </a>
            </li>
            <li className="nav-item p-2">
               <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
               >
                  Products
               </a>
            </li>
            <li className="nav-item p-2">
               <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
               >
                  Sale
               </a>
            </li>
         </ul>
      </div>
   );
};

export default NavLinks;
