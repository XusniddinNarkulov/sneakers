import React from "react";
import "./newArrivals.scss";

import img1 from "./img/image11.png";
import img2 from "./img/image22.png";
import img3 from "./img/image33.png";
import img4 from "./img/image44.png";
import { RightArrow, StarFilled } from "../../../components/icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";



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
];

const NewArrivals = () => {
   return (
      <section className="arrivals">
         <div className="arrivals__head">
            <div className="arrivals__head--title">
               <h2>New Arrivals</h2>

               <p>
                  Enjoy the new products from our store. Select what you like,
                  enjoy & return.
               </p>
            </div>

            <div className="arrivals__head--view-all">
               <p>View All</p>

               <RightArrow />
            </div>
         </div>

         <div className="arrivals__cards">
            {products.map(({ linearBg, image, description, price }, i) => {
               return (
                  <div className="arrivals__cards--card" key={i}>
                     <div className={`arrivals__cards--card--img ${linearBg}`}>
                        <b className="arrivals__cards--card--img--num">
                           {`0${i + 1}`}
                        </b>

                        <img src={image} alt={description} />

                        <button>+</button>
                     </div>

                     <div className="arrivals__cards--card--stars">
                        {[...Array(4)].map((e, i) => (
                           <StarFilled key={i} />
                        ))}
                        <StarFilled color={"#c1c0c0"} />
                     </div>

                     <p className="arrivals__cards--card--description">
                        {description}
                     </p>

                     <b className="arrivals__cards--card--price">{price}</b>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default NewArrivals;
