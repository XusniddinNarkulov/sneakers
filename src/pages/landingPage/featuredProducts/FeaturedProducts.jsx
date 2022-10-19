import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import "./featuredProducts.scss";

import img1 from "./img/image11.png";
import img2 from "./img/image22.png";
import img3 from "./img/image33.png";
import img4 from "./img/image44.png";
import { RightArrow, StarFilled } from "../../../components/icons/Icons";

const FeaturedProducts = () => {
   const ref = useRef();
   const { events } = useDraggable(ref);

   let products = [
      {
         linearBg: "orange",
         image: img1,
         description: "Adidas Falcon Shoes For men - 2022 Edition",
         price: "$120.50",
      },
      {
         linearBg: "green",
         image: img2,
         description: "Puma x Hot Wheels For men - 2022 Edition",
         price: "$160.99",
      },
      {
         linearBg: "red",
         image: img3,
         description: "Reebook | Red Dragon For men - 2022 Edition",
         price: "$230.50",
      },
      {
         linearBg: "blue",
         image: img4,
         description: "Nike & Just Do It For men - 2022 Edition",
         price: "$420.00",
      },
      {
         linearBg: "orange",
         image: img1,
         description: "Adidas Falcon Shoes For men - 2022 Edition",
         price: "$120.50",
      },
      {
         linearBg: "green",
         image: img2,
         description: "Puma x Hot Wheels For men - 2022 Edition",
         price: "$160.99",
      },
      {
         linearBg: "red",
         image: img3,
         description: "Reebook | Red Dragon For men - 2022 Edition",
         price: "$230.50",
      },
      {
         linearBg: "blue",
         image: img4,
         description: "Nike & Just Do It For men - 2022 Edition",
         price: "$420.00",
      },
   ];

   return (
      <section className="featured-products">
         <div className="title">
            <h2>Featured Products</h2>

            <div className="view-all">
               <p>View all </p>

               <RightArrow />
            </div>
         </div>

         <div className="products" ref={ref} {...events}>
            {products.map(({ linearBg, image, description, price }, i) => {
               return (
                  <div className="products__prod" key={i}>
                     <div className="products__prod--img">
                        <div
                           className={`products__prod--img--bg ${linearBg}`}
                        ></div>
                        <img src={image} alt={description} />
                     </div>

                     <div className="products__prod--stars">
                        {[...Array(4)].map((e, i) => (
                           <StarFilled key={i} />
                        ))}
                        {<StarFilled color={"#c1c0c0"} />}
                     </div>

                     <p className="products__prod--description">
                        {description}
                     </p>

                     <b>{price}</b>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default FeaturedProducts;
