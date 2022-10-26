import React from "react";

import logo from "../../../../Logo.png";

const Logo = () => {
   return (
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
   );
};

export default Logo;
