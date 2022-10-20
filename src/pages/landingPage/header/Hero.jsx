import React, { useEffect, useState } from "react";
import {
   CheckCircleIcon,
   HeartOutlined,
   LeftArrowCircleOutlinedIcon,
   LockIcon,
   RightArrowCircleOutlinedIcon,
} from "../../../components/icons/Icons";
import "./hero.scss";

import heroImg from "./img/heroImg.avif";
import notificationImg from "./img/notificationImg.png";

const data = [
   { customer: "Joan", customerImg: notificationImg, sneakerImg: heroImg },
   { customer: "David", customerImg: notificationImg, sneakerImg: heroImg },
   { customer: "Bred", customerImg: notificationImg, sneakerImg: heroImg },
];

const Hero = () => {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const lastIndex = data.length - 1;
      if (index > lastIndex) {
         setIndex(0);
      }
      if (index < 0) {
         setIndex(lastIndex);
      }
   }, [index]);

   return (
      <section className="hero" id="hero">
         <div className="hero__left">
            <h1 className="hero__left--title">Get Your Awesome Sneakers.</h1>

            <p className="hero__left--body-text">
               We offer the best deals in our shop. Check them out now. We have
               awesome stuff on sale for you.
            </p>

            <div className="hero__left--shop-now">
               <button className="btn">Shop Now</button>

               <HeartOutlined />
            </div>

            <div className="hero__left--free">
               <div className="hero__left--free--child">
                  <CheckCircleIcon />
                  <p className="grey">Free shipping</p>
               </div>

               <div className="hero__left--free--child">
                  <CheckCircleIcon />
                  <p>Free returns</p>
               </div>
            </div>
         </div>

         <div className="hero__right">
            {data.map(({ customer, customerImg, sneakerImg }, i) => {
               if (index === i) {
                  return (
                     <div
                        className={`hero__right--img ${
                           index === i
                              ? "animate__slideInLeft animate__delay-0.2s"
                              : "animate__slideOutLeft"
                        } animate__animated`}
                     >
                        <img src={sneakerImg} alt="sneaker" />

                        <div className="hero__right--img--notification">
                           <div className="hero__right--img--notification--flex">
                              <img src={customerImg} alt="notification img" />

                              <div className="hero__right--img--notification--flex--text">
                                 <b>{customer}</b> has just purchased these
                                 sneakers now.
                              </div>

                              <div className="hero__right--img--notification--flex--lock-icon">
                                 <LockIcon />
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               }
            })}

            <div className="hero__right--arrows">
               <div onClick={() => setIndex((prev) => prev - 1)}>
                  <LeftArrowCircleOutlinedIcon />
               </div>
               <div onClick={() => setIndex((prev) => prev + 1)}>
                  <RightArrowCircleOutlinedIcon />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
