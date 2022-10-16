import React from "react";
import {
   Car,
   HeadPhone,
   Play,
   Quality,
   Wallet,
} from "../../../components/icons/Icons";
import "./advantages.scss";

import img1 from "./img/Group.png";
import img2 from "./img/Rectangle18.png";

const Advantages = () => {
   return (
      <section className="advantages">
         <div className="advantages__left">
            <div className="advantages__left--video">
               <img
                  src={img2}
                  alt="video"
                  className="advantages__left--video--img"
               />

               <div className="advantages__left--video--circle">
                  <Play />
               </div>

               <img
                  src={img1}
                  alt="video"
                  className="advantages__left--video--decoration"
               />
            </div>
         </div>

         <div className="advantages__right">
            <h3>Why choose our shop</h3>

            <p className="advantages__right--text">
               For explosive events (sprints up to 400 metres, long jump, triple
               jump) the reduction in atmospheric pressure means there is less
               resistance from the atmosphere.
            </p>

            <div className="advantages__right--services">
               <div className="advantages__right--services--child">
                  <Car />
                  <b>Fast Delivery</b>
               </div>

               <div className="advantages__right--services--child">
                  <HeadPhone />
                  <b>Great Support</b>
               </div>

               <div className="advantages__right--services--child">
                  <Wallet />
                  <b>Cool Prices</b>
               </div>

               <div className="advantages__right--services--child">
                  <Quality />
                  <b>High Quality</b>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Advantages;
