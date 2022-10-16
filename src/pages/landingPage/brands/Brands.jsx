import React from "react";
import { RightArrow } from "../../../components/icons/Icons";
import "./brands.scss";

import img1 from "./img/Image5.png";
import img2 from "./img/Image6.png";
import img3 from "./img/Image7.png";
import img4 from "./img/Image8.png";

const Brands = () => {
   return (
      <section className="brands">
         <div className="brands__circle"></div>

         <h2>Popular brands</h2>

         <div className="brands__logos">
            {/* <RightArrow /> */}

            <div className="brands__logos--grid">
               <div className="brands__logos--grid--child">
                  <img src={img1} alt="logo" />
               </div>

               <div className="brands__logos--grid--child">
                  <img src={img2} alt="logo" />
               </div>

               <div className="brands__logos--grid--child">
                  <img src={img3} alt="logo" />
               </div>

               <div className="brands__logos--grid--child">
                  <img src={img4} alt="logo" />
               </div>
            </div>

            {/* <RightArrow /> */}
         </div>
      </section>
   );
};

export default Brands;
