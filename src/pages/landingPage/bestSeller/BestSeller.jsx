import React from "react";
import { StarFilled } from "../../../components/icons/Icons";
import "./bestSeller.scss";

import img from "./img/image6.png";

const BestSeller = () => {
   return (
      <section className="best-seller">
         <div className="best-seller__head">
            <h2>Best seller this week</h2>

            <div className="form-check form-switch">
               <label htmlFor="flexSwitchCheckDefault56">Women</label>

               <input
                  className="form-check-input appearance-none w-20 rounded-full float-left h-12 align-top bg-white bg-no-repeat bg-contain bg-purple-600 focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault56"
               />

               <label htmlFor="flexSwitchCheckDefault56">Men</label>
            </div>
         </div>

         <div className="best-seller__prod">
            <div className="best-seller__prod--left">
               <div className="best-seller__prod--left--bg"></div>

               <img src={img} alt="best seller" />

               <div
                  className="best-seller__prod--left--circle circle1 ui"
                  data-tooltip="Improved stability, traction control & sole handling"
                  data-position="top center"
               >
                  <div></div>
               </div>

               <div
                  className="best-seller__prod--left--circle circle2 ui"
                  data-tooltip="Improved stability, traction control & sole handling"
                  data-position="top center"
               >
                  <div></div>
               </div>

               <div
                  className="best-seller__prod--left--circle circle3 ui"
                  data-tooltip="Improved stability, traction control & sole handling"
                  data-position="top center"
               >
                  <div></div>
               </div>
            </div>

            <div className="best-seller__prod--right">
               <div className="best-seller__prod--right--stars">
                  {[...Array(5)].map((e, i) => (
                     <StarFilled key={i} />
                  ))}
               </div>

               <h4>Adidas Falcon Shoes for women - 2021 Edition</h4>

               <b>$120.50</b>

               <button className="btn">Shop now</button>
            </div>
         </div>
      </section>
   );
};

export default BestSeller;
