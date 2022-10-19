import React, { useState } from "react";
import "animate.css";

import { StarFilled } from "../../../components/icons/Icons";
import "./bestSeller.scss";

import img from "./img/image6.png";

const BestSeller = () => {
   const [active, setActive] = useState(true);

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
                  onClick={() => setActive((prev) => !prev)}
               />

               <label htmlFor="flexSwitchCheckDefault56">Men</label>
            </div>
         </div>

         {active && (
            <div className="best-seller__prod animate__backInDown animate__animated animate__delay-0.1s">
               <div className="best-seller__prod--left">
                  <div className="best-seller__prod--left--bg women"></div>

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

                  <h4>Adidas Falcon Shoes for Women - 2021 Edition</h4>

                  <b>$120.50</b>

                  <button className="btn">Shop now</button>
               </div>
            </div>
         )}

         {!active && (
            <div className="best-seller__prod animate__backInUp animate__animated animate__delay-0.1s">
               <div className="best-seller__prod--left">
                  <div className="best-seller__prod--left--bg men"></div>

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

                  <h4>Puma x Hot Wheels for Men - 2021 Edition</h4>

                  <b>$149.99</b>

                  <button className="btn">Shop now</button>
               </div>
            </div>
         )}
      </section>
   );
};

export default BestSeller;
