import React from "react";
import "./categories.scss";

import ellips1 from "./img/Ellipse32.png";
import ellips2 from "./img/Ellipse33.png";
import ellips3 from "./img/Ellipse34.png";
import sneaker from "./img/sneaker.png";
import football from "./img/football1.png";
import volleyball from "./img/volley1.png";

const prods = [
   {
      category: "sneakers",
      items: 120,
      ellips: ellips1,
      img: sneaker,
   },
   {
      category: "football",
      items: 80,
      ellips: ellips2,
      img: football,
   },
   {
      category: "volleyball",
      items: 160,
      ellips: ellips3,
      img: volleyball,
   },
];

const Categories = () => {
   return (
      <section className="categories">
         <div className="categories__head">
            <h2>Choose categories</h2>

            <p>
               For explosive events (sprints up to 400 metres, long jump, triple
               jump) the reduction in atmospheric pressure means there is less
               resistance from the atmosphere.
            </p>
         </div>

         <div className="categories__body">
            {prods.map(({ category, items, ellips, img }, i) => {
               return (
                  <div className={`categories__body--card ${category}`} key={i}>
                     <h3>{category} Collection</h3>

                     <p>{items} products</p>

                     <b>See collection</b>

                     <img
                        className="categories__body--card--img"
                        src={img}
                        alt={category}
                     />

                     <img
                        className="categories__body--card--decoration"
                        src={ellips}
                        alt="decoration"
                     />
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Categories;
