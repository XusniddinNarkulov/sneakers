import React from "react";
import "./accessories.scss";

import img1 from "./img/Group1.png";
import img2 from "./img/Group2.png";

const Accessories = () => {
   return (
      <section className="accessories">
         <div className="accessories__child">
            <img src={img1} alt="sport accessories" />

            <div className="accessories__child--desc">
               <h4 className="accessories__child--desc--category">
                  Accessories
               </h4>

               <h3 className="accessories__child--desc--title">Football</h3>

               <p>We receive new sportwear every day. Just take your pick.</p>

               <button className="btn">Shop Now</button>
            </div>

            <div className="circle1"></div>

            <div className="circle2"></div>
         </div>

         <div className="accessories__child">
            <img src={img2} alt="sport accessories" />

            <div className="accessories__child--desc">
               <h4 className="accessories__child--desc--category">
                  Accessories
               </h4>

               <h3 className="accessories__child--desc--title">Football</h3>

               <p>We receive new sportwear every day. Just take your pick.</p>

               <button className="btn">Shop Now</button>
            </div>

            <div className="circle1"></div>

            <div className="circle2"></div>
         </div>
      </section>
   );
};

export default Accessories;
