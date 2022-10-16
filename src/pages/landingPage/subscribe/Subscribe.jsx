import React from "react";
import "./subscribe.scss";

import img from "./img/Group4.png";
import { Facebook, Instagram, Twitter } from "../../../components/icons/Icons";

const Subscribe = () => {
   return (
      <section className="subscribe">
         <div className="subscribe__circle"></div>

         <div className="subscribe__left">
            <h3>Subscribe now to get the latest updates</h3>

            <form action="">
               <input type="email" placeholder="Enter your email" />
               <button type="submit">Subscribe</button>
            </form>

            <div className="subscribe__left--oauth">
               <div>
                  <Twitter />
               </div>
               <div>
                  <Facebook />
               </div>
               <div>
                  <Instagram />
               </div>
            </div>
         </div>

         <img src={img} alt="sneaker" />
      </section>
   );
};

export default Subscribe;
