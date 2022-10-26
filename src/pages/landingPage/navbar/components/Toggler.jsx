import React from "react";
import { BurgerIcon } from "../../../../components/icons/Icons";

const Toggler = () => {
   return (
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
         <BurgerIcon />
      </button>
   );
};

export default Toggler;
