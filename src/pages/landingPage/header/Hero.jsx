import React from "react";
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

const Hero = () => {
   return (
      <section className="hero">
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
            <div className="hero__right--img">
               <img src={heroImg} alt="sneaker" />

               <div className="hero__right--img--notification">
                  <div className="hero__right--img--notification--flex">
                     <img src={notificationImg} alt="notification img" />

                     <div className="hero__right--img--notification--flex--text">
                        <b>Joan</b> has just purchased these sneakers now.
                     </div>

                     <div className="hero__right--img--notification--flex--lock-icon">
                        <LockIcon />
                     </div>
                  </div>
               </div>
            </div>

            <div className="hero__right--arrows">
               <LeftArrowCircleOutlinedIcon />
               <RightArrowCircleOutlinedIcon />
            </div>
         </div>
      </section>
   );
};

export default Hero;
