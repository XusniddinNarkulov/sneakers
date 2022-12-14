import React from "react";
import "./navbar.scss";

import logo from "../../../Logo.png";
import Search from "../../../components/search/Search";

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
            <button
               className="
       navbar-toggler
       text-gray-500
       border-0
       hover:shadow-none hover:no-underline
       py-2
       px-2.5
       bg-transparent
       focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
     "
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <svg
                  width="32"
                  height="12"
                  fill="none"
                  viewBox="0 0 32 12"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="w-6"
                  role="img"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H31C31.5523 2 32 1.55228 32 1C32 0.447715 31.5523 0 31 0H1ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H31C31.5523 12 32 11.5523 32 11C32 10.4477 31.5523 10 31 10H1Z"
                     fill="#0A083A"
                  />
               </svg>
            </button>
            <div
               className="collapse navbar-collapse flex-grow items-center"
               id="navbarSupportedContent"
            >
               <a
                  className="
         flex
         items-center
         text-gray-900
         hover:text-gray-900
         focus:text-gray-900
         mt-2
         lg:mt-0
         mr-1
       "
                  href="#"
               >
                  <img src={logo} alt="" loading="lazy" className="nav-logo" />
               </a>
            </div>

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
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="flex items-center relative ml-4 nav-right-max-991px">
               {/* <!-- Icon --> */}
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
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true"
                     focusable="false"
                     data-prefix="fas"
                     data-icon="shopping-cart"
                     className="w-8"
                     role="img"
                  >
                     <path
                        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                        stroke="#0A083A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M3 6H21"
                        stroke="#0A083A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                        stroke="#0A083A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>

                  <span>1</span>
               </a>

               <div className="dropdown relative">
                  {/* <a
                     className="
           text-gray-500
           hover:text-gray-700
           focus:text-gray-700
           mr-8
           dropdown-toggle
           hidden-arrow
           flex items-center
         "
                     href="#"
                     id="dropdownMenuButton1"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                  >
                     <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell"
                        className="w-8"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                        ></path>
                     </svg>
                     <span className="text-white bg-red-700 absolute rounded-full text-sm -mt-2.5 ml-4 py-0 px-1.5">
                        1
                     </span>
                  </a> */}
                  <ul
                     className="
       dropdown-menu
       min-w-max
       absolute
       hidden
       bg-white
       text-base
       z-50
       float-left
       py-2
       list-none
       text-left
       rounded-lg
       shadow-lg
       mt-1
       hidden
       m-0
       bg-clip-padding
       border-none
       left-auto
       right-0
     "
                     aria-labelledby="dropdownMenuButton1"
                  >
                     <li>
                        <a
                           className="
           dropdown-item
           text-sm
           py-2
           px-4
           font-normal
           block
           w-full
           whitespace-nowrap
           bg-transparent
           text-gray-700
           hover:bg-gray-100
         "
                           href="#"
                        >
                           Action
                        </a>
                     </li>
                     <li>
                        <a
                           className="
           dropdown-item
           text-sm
           py-2
           px-4
           font-normal
           block
           w-full
           whitespace-nowrap
           bg-transparent
           text-gray-700
           hover:bg-gray-100
         "
                           href="#"
                        >
                           Another action
                        </a>
                     </li>
                     <li>
                        <a
                           className="
           dropdown-item
           text-sm
           py-2
           px-4
           font-normal
           block
           w-full
           whitespace-nowrap
           bg-transparent
           text-gray-700
           hover:bg-gray-100
         "
                           href="#"
                        >
                           Something else here
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="dropdown relative">
                  <a
                     className="dropdown-toggle flex items-center hidden-arrow"
                     href="#"
                     id="dropdownMenuButton2"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                  >
                     <img
                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                        className="rounded-full"
                        style={{ height: "25px", width: "25px" }}
                        alt=""
                        loading="lazy"
                     />
                  </a>
                  <ul
                     className="
     dropdown-menu
     min-w-max
     absolute
     hidden
     bg-white
     text-base
     z-50
     float-left
     py-2
     list-none
     text-left
     rounded-lg
     shadow-lg
     mt-1
     hidden
     m-0
     bg-clip-padding
     border-none
     left-auto
     right-0
   "
                     aria-labelledby="dropdownMenuButton2"
                  >
                     <li>
                        <a
                           className="
         dropdown-item
         text-sm
         py-2
         px-4
         font-normal
         block
         w-full
         whitespace-nowrap
         bg-transparent
         text-gray-700
         hover:bg-gray-100
       "
                           href="#"
                        >
                           Action
                        </a>
                     </li>
                     <li>
                        <a
                           className="
         dropdown-item
         text-sm
         py-2
         px-4
         font-normal
         block
         w-full
         whitespace-nowrap
         bg-transparent
         text-gray-700
         hover:bg-gray-100
       "
                           href="#"
                        >
                           Another action
                        </a>
                     </li>
                     <li>
                        <a
                           className="
         dropdown-item
         text-sm
         py-2
         px-4
         font-normal
         block
         w-full
         whitespace-nowrap
         bg-transparent
         text-gray-700
         hover:bg-gray-100
       "
                           href="#"
                        >
                           Something else here
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            {/* <!-- Right elements --> */}
         </div>
      </nav>
   );
};

export default Navbar;
